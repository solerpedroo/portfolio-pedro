# Pedro Soler — Portfólio

Portfólio em Next.js App Router, TypeScript, Tailwind CSS, Motion, Lenis e Three.js com React Three Fiber e Drei. Conteúdo pré-renderizado em inglês por padrão (`/`), português (`/pt`) e espanhol (`/es`). A rota anterior `/en` redireciona para `/`.

## Executar

Requer Node.js 22 ou mais recente.

```sh
npm ci
npm run dev
```

Abra `http://localhost:3000`. Para validar a versão de produção:

```sh
npm run build
npm start
```

## Verificar

```sh
npm run lint
npm run typecheck
npm test
npx playwright install chromium
```

Com a aplicação de produção em outra janela de terminal:

```sh
node node_modules/next/dist/bin/next start -p 3100
npx playwright test
```

Os testes de conteúdo confrontam os dados com a versão original. Os testes de navegador cobrem idiomas, filtros, downloads, formulário com respostas interceptadas, navegação mobile, acessibilidade automatizada, WebGL e fallback. Nenhum teste envia mensagens reais.

## Estrutura

```text
app/                  Rotas, metadata, SEO e estilos do design system
components/layout/    Composição da página e navegação
components/sections/  Seções e interações locais
components/three/     Cena, geometria procedural e fallback SVG
components/ui/        Primitivos visuais e Motion
data/                 Conteúdo PT/EN/ES, textos de interface, skills e links
lib/                  Resolução de conteúdo, idioma e URL canônica
types/                Contratos de conteúdo
public/               Imagens originais, currículos e certificados
tests/                Preservação factual e testes de navegador
docs/legacy/          Fonte original preservada para auditoria
```

## Editar conteúdo

Atualize `data/pt.json`, `data/en.json` e `data/es.json` para projetos, experiências, formação, certificações e reconhecimentos. Links sociais e currículos ficam em `data/socials.ts`; habilidades em `data/skills.ts`; textos de interface em `data/interface.ts`.

Não acrescente métricas, responsabilidades ou tecnologias sem fonte. Agibank contém somente empresa, cargo e período fornecidos. Saint Capri conserva apenas empresa e cargo mencionados no README original. Os PDFs originais foram preservados sem alterações e podem ter informações anteriores à atualização do site.

## Three.js e movimento

Malha procedural inspirada em relações espaciais e visão computacional. Três chamadas de desenho por cena (conexões, nós com shader e pontos de fundo), sem texturas ou pós-processamento. Importação dinâmica somente quando uma cena está visível. A estrutura aparece no Hero, na transição para a trajetória e no contato. No mobile, a primeira renderização usa SVG; o controle da cena ativa WebGL sob demanda. Limite de aproximadamente 30 quadros/s no desktop e 15 em dispositivos compactos/fracos; DPR limitado a 1,5 e 1, respectivamente. Cena desmontada fora de vista, atualização suspensa em aba oculta, botão de pausa, fallback SVG sem WebGL e para `prefers-reduced-motion` ou economia de dados. A cena não bloqueia o conteúdo. Drei PerformanceMonitor reduz a qualidade quando a taxa de quadros cai. Lenis suaviza a rolagem somente em desktop com ponteiro preciso; touch e movimento reduzido mantêm scroll nativo. A entrada dura aproximadamente 1,25 s, não bloqueia cliques e não impõe espera ao carregamento.

## Deploy na Vercel

Importe o repositório e selecione o preset Next.js. Build: `npm run build`; saída e instalação: padrões da Vercel. Não há banco nem credenciais necessários.

Defina `NEXT_PUBLIC_SITE_URL` com a URL pública definitiva, copiando `.env.example` e substituindo o valor. Na Vercel, quando ausente, usa-se `VERCEL_PROJECT_PRODUCTION_URL`. Localmente o fallback é `http://localhost:3000`. Metadata, canonical, sitemap e robots usam a mesma configuração. Não foi presumido um domínio pessoal.

O formulário preserva o serviço FormSubmit do site original. A entrega real depende da ativação/disponibilidade desse serviço; os links diretos de e-mail e WhatsApp continuam disponíveis. Não houve envio real durante a validação.

Consulte [migração e design](docs/MIGRATION.md) e [validação](docs/VALIDATION.md).
