# Validação

Registro do que foi verificado na migração para Next.js e como repetir os checks localmente. Nenhum teste envia mensagens reais de contato.

## Acabamento visual — 5 de outubro de 2026

Revisão distribuída entre três subagentes: cenas Three.js, seções de apoio e revisão independente. O acabamento unifica cabeçalhos, cartões, superfícies, ações e estados de foco; adapta formação e idiomas no tablet; corrige o arquivo de projetos no mobile. As cenas incorporam arcos orbitais, pontos luminosos e calibração, com SVG equivalente e seis chamadas de desenho.

Correções confirmadas: abertura desmontada ao terminar, pausa completa da cena, retorno ao WebGL após rolar no mobile e contraste do botão de currículo. O descarte de um canvas fora da tela não é tratado como falha da próxima cena.

Validação final em produção local na porta 3100: build, lint, TypeScript, seis testes de conteúdo e cinco testes de navegador aprovados. Os testes de navegador incluem acessibilidade automatizada, movimento reduzido, ausência de WebGL, recuperação de contexto, filtros, downloads, idiomas, formulário interceptado e larguras de 360 a 1920 pixels.

Composição inspecionada em capturas de desktop, projetos, formação, stack, contato e mobile em `artifacts/final-*.png`. Capturas são artefatos locais ignorados pelo Git.

## Comandos rápidos

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Produção local (porta 3100, igual ao Playwright):

```sh
npm run build
node node_modules/next/dist/bin/next start -p 3100
```

Navegador (Chromium):

```sh
npx playwright install chromium
npx playwright test
```

Artefatos opcionais: capturas em `artifacts/` quando os testes de desktop/mobile rodam com sucesso; relatório JSON em `artifacts/browser-results.json`.

## Preservação de conteúdo (`npm test`)

Para `pt`, `en` e `es`:

- 19 projetos com IDs únicos; título, descrição e imagens em `public/` alinhados a `docs/legacy/script.js` e links presentes em `docs/legacy/index.html`.
- 68 certificações, 3 formações, 5 reconhecimentos, 5 atividades, 3 idiomas, 21 outras habilidades.
- Experiências na ordem Agibank → Nola → Zara → Loja Escolha Correta → Saint Capri; Agibank sem descrição/contribuições/certificados extras; período atual conforme fonte.

## Testes de navegador (Playwright)

| Área | O que cobre |
|------|-------------|
| Idiomas | `/` (en), `/pt`, `/es`; `lang` no HTML; `/en` não é rota válida (404 via App Router). |
| Hero / WebGL | Desktop: canvas visível; pausa/retomada por botão. Mobile: SVG primeiro; ativação sob demanda; desmontagem fora do viewport; `data-scene-ready` no canvas; perda de contexto → fallback SVG. |
| Projetos | Busca, estado vazio, filtros (ex.: Mobile), detalhes expansíveis; contagem de arquivo conforme UI. |
| Certificações | Grade completa e busca por instituição. |
| Experiência | Agibank sem blocos extras de descrição. |
| Downloads | Todos os links `download` respondem HTTP OK. |
| Âncoras | Links `#` apontam para IDs existentes. |
| A11y | axe WCAG 2 A/AA/2.1 AA em PT (desktop e mobile). |
| SEO | `robots.txt`, `sitemap.xml`, `opengraph-image` (PNG). |
| Sem WebGL | Mock de `getContext` → fallback em todos os locales. |
| Contato | Validação HTML5; sucesso e erro FormSubmit interceptados (503/200). |
| Mobile | Menu, Escape, navegação; sem overflow horizontal em várias larguras. |
| Movimento reduzido | Sem canvas; fallback SVG. |

## Build e tipos

- `next build` gera rotas estáticas para `/`, `/pt`, `/es`, metadata, sitemap e robots.
- `tsc --noEmit` sem erros.

## Fora de escopo / observações

- **FormSubmit:** entrega real depende do serviço externo; e-mail e WhatsApp permanecem como alternativas.
- **Hydration no dev:** extensões do navegador (atributos injetados no `<body>`) podem gerar avisos; não reproduzidos nos testes headless.
- **`/sw.js`:** não há service worker neste projeto; pedidos 404 costumam vir de extensões ou cache antigo.
- **THREE.Clock:** aviso de depreciação vindo de dependências; sem impacto funcional conhecido na validação atual.

## Referências

- Inventário e decisões: [MIGRATION.md](./MIGRATION.md)
- Fonte estática preservada: [legacy/](./legacy/)
