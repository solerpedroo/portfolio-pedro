import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("English default, progressive 3D on mobile and scene recovery", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".site-entrance")).toBeHidden({ timeout: 2500 });
  await expect(page.locator(".hero canvas")).toHaveCount(0);
  await page.locator(".hero").getByRole("button", { name: "Animate visualization" }).click();
  await expect(page.locator(".hero canvas")).toBeVisible();
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.locator(".hero canvas")).toHaveCount(0);
  await page.evaluate(() => scrollTo(0, 0));
  await page.locator(".hero .scene").scrollIntoViewIfNeeded();
  await expect(page.locator(".hero canvas")).toBeVisible();
  await expect(page.locator(".hero canvas")).toHaveAttribute("data-scene-ready", "true");
  await page.locator(".hero canvas").evaluate(canvas => canvas.dispatchEvent(new Event("webglcontextlost")));
  await expect(page.locator(".hero canvas")).toHaveCount(0);
  await expect(page.locator(".hero .surface-fallback")).toBeVisible();
});

test("desktop: content, WebGL, filters, downloads, navigation and accessibility", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/pt");
  await expect(page.locator("h1")).toContainText("Software com");
  await expect(page.locator(".hero canvas")).toBeVisible();
  await page
    .locator(".hero")
    .getByRole("button", { name: "Pausar visualização" })
    .click();
  await expect(
    page.locator(".hero").getByRole("button", { name: "Animar visualização" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.screenshot({ path: "artifacts/desktop-verified.png" });
  await page.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await page.locator(".project-archive input").fill("Chronos");
  await expect(page.locator(".archive-project")).toHaveCount(1);
  await page.locator(".archive-project summary").click();
  await expect(page.locator(".archive-detail")).toBeVisible();
  await page.locator(".project-archive input").fill("no-project-xyz");
  await expect(page.locator(".empty-state")).toBeVisible();
  await page.locator(".project-archive input").fill("");
  await page.getByRole("button", { name: "Mobile", exact: true }).click();
  await expect(page.locator(".archive-project")).toHaveCount(2);
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  await expect(page.locator(".archive-project")).toHaveCount(16);
  await page.locator(".certifications-disclosure > summary").click();
  await expect(page.locator(".certificates-grid article")).toHaveCount(68);
  await page
    .getByRole("searchbox", { name: "Buscar certificação ou instituição" })
    .fill("IBM");
  await expect(page.locator(".certificates-grid article")).toHaveCount(2);
  const agibank = page.locator(".experience-item").first();
  await expect(agibank).toContainText("Agosto de 2026 — Atualmente");
  await expect(agibank.locator(".experience-description, details")).toHaveCount(
    0,
  );
  for (const href of await page
    .locator("a[download]")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")!))) {
    const response = await request.get(href);
    expect(response.ok(), href).toBeTruthy();
  }
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute("href")!)
        .filter((href) => !document.getElementById(href.slice(1))),
    );
  expect(brokenAnchors).toEqual([]);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  expect(errors).toEqual([]);
});

test("responsive layouts, mobile navigation and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [360, 390, 768, 1024, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/pt");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `overflow at ${width}`,
    ).toBeTruthy();
    await expect(page.locator(".hero canvas")).toHaveCount(0);
    await expect(page.locator(".hero .surface-fallback")).toBeVisible();
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await expect(
    page.getByRole("link", { name: "Experiência", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Menu", exact: true }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page.getByRole("link", { name: "Experiência", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Menu", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
  await page.goto("/pt");
  await page.screenshot({
    path: "artifacts/mobile-verified.png",
    fullPage: true,
  });
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test("languages, no-WebGL fallback, metadata and missing routes", async ({
  page,
  request,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      ...args: Parameters<typeof original>
    ) {
      if (String(args[0]).startsWith("webgl")) return null;
      return original.apply(this, args);
    } as typeof original;
  });
  for (const [path, lang, heading] of [
    ["/pt", "pt-BR", "Software com"],
    ["/", "en", "Engineering"],
    ["/es", "es", "Software con"],
  ]) {
    await page.goto(path);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toContainText(heading);
    await expect(page.locator(".hero canvas")).toHaveCount(0);
    await expect(page.locator(".hero .surface-fallback")).toBeVisible();
    expect(
      await page.locator('meta[property="og:image"]').getAttribute("content"),
    ).toContain("opengraph-image");
  }
  expect((await request.get("/robots.txt")).ok()).toBeTruthy();
  expect((await request.get("/sitemap.xml")).ok()).toBeTruthy();
  const og = await request.get("/opengraph-image");
  expect(og.ok()).toBeTruthy();
  expect(og.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/not-a-route")).status()).toBe(404);
});

test("contact: validation, success and failure without sending real messages", async ({
  page,
}) => {
  await page.goto("/pt");
  await page.locator(".contact-form-disclosure > summary").click();
  await page
    .getByRole("button", { name: "Enviar mensagem", exact: true })
    .click();
  expect(
    await page
      .locator('input[name="name"]')
      .evaluate((input: HTMLInputElement) => input.validity.valueMissing),
  ).toBeTruthy();
  await page.route("https://formsubmit.co/ajax/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"success":"true"}',
    }),
  );
  await page.getByLabel("Nome", { exact: true }).fill("Teste automatizado");
  await page
    .getByRole("textbox", { name: "E-mail", exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Teste local interceptado.");
  await page
    .getByRole("button", { name: "Enviar mensagem", exact: true })
    .click();
  await expect(page.locator(".form-status")).toContainText("Mensagem enviada");
  await page.unroute("https://formsubmit.co/ajax/**");
  await page.route("https://formsubmit.co/ajax/**", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"success":false}',
    }),
  );
  await page.getByLabel("Nome", { exact: true }).fill("Teste automatizado");
  await page
    .getByRole("textbox", { name: "E-mail", exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Teste local interceptado.");
  await page
    .getByRole("button", { name: "Enviar mensagem", exact: true })
    .click();
  await expect(page.locator(".form-status")).toContainText(
    "Não foi possível enviar",
  );
});
