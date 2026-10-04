import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";
const source = readFileSync("docs/legacy/script.js", "utf8").split(
  "const LANG_FLAG_SRC",
)[0];
const translations = vm.runInNewContext(`${source}\ntranslations`);
const originalHtml = readFileSync("docs/legacy/index.html", "utf8");
for (const locale of ["pt", "en", "es"]) {
  const content = JSON.parse(readFileSync(`data/${locale}.json`, "utf8"));
  test(`${locale}: every original project, description, link and asset is preserved`, () => {
    assert.equal(content.projects.length, 19);
    assert.equal(new Set(content.projects.map((p) => p.id)).size, 19);
    for (const project of content.projects) {
      assert.equal(
        project.name,
        translations[locale][`projects.${project.id}.title`],
      );
      assert.equal(
        project.description,
        translations[locale][`projects.${project.id}.desc`],
      );
      assert.ok(existsSync(`public${project.image}`));
      for (const link of project.links)
        assert.ok(originalHtml.includes(link), link);
    }
  });
  test(`${locale}: credentials and career stay grounded in source content`, () => {
    assert.equal(content.certifications.length, 68);
    for (const cert of content.certifications) {
      assert.equal(cert.title, translations[locale][`cert.${cert.id}.title`]);
      assert.equal(
        cert.institution,
        translations[locale][`cert.${cert.id}.inst`],
      );
    }
    assert.equal(content.education.length, 3);
    assert.equal(content.awards.length, 5);
    assert.equal(content.languages.length, 3);
    assert.equal(content.activities.length, 5);
    assert.equal(content.otherSkills.length, 21);
    assert.deepEqual(
      content.experiences.map((e) => e.company),
      [
        "Agibank",
        "Nola",
        "Zara Multimarcas",
        "Loja Escolha Correta",
        "Saint Capri",
      ],
    );
    const current = content.experiences[0];
    assert.equal(current.description, "");
    assert.deepEqual(current.contributions, []);
    assert.deepEqual(current.certificates, []);
    if (locale === "pt") {
      assert.equal(current.role, "Estagiário de Tecnologia");
      assert.equal(current.period, "Agosto de 2026 — Atualmente");
    }
  });
}
