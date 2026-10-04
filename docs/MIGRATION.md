# Inventário, decisões e migração

## Fontes e preservação

Auditoria inicial de `index.html`, `script.js`, `style.css`, `README.md`, `INSTRUÇÕES.md`, `demo.html`, referências de assets e links. Originais em `docs/legacy/`. Currículos, ZIP e imagens foram movidos para `public/`, conservando bytes e nomes. Os textos de tradução usados na página anterior foram extraídos sem completar lacunas.

- 19 projetos, todos preservados: Manual de Upgrade, Mapeamento de descarte, MaxWake, Guia de Investimentos, Safe Vision, FullControl, PDF Chatbot, GitHub Analyzer, Cardápio AI, CodeFix AI, Quantix AI, ViraTáxis, Mescla Invest, CodeGraph, EPL Express, ReuniAI, DriveFlow, Melo Music e Chronos.
- Experiências detalhadas: Nola, Zara Multimarcas e Loja Escolha Correta. Saint Capri era citado apenas no README como Fundador, portanto não recebeu datas ou atividades.
- Agibank adicionado exclusivamente com Estagiário de Tecnologia, Agosto de 2026 — Atualmente.
- 68 certificações, três formações, cinco reconhecimentos, cinco registros de atividades, três idiomas e 21 outras habilidades.
- GitHub, LinkedIn, Instagram, WhatsApp, e-mail, três PDFs, certificados ZIP e todos os destinos dos projetos preservados. ReuniAI mantém tanto aplicação quanto repositório.
- Tecnologias agrupadas somente a partir de habilidades, descrições e experiências existentes. Nenhum nível percentual atribuído.

## Problemas anteriores

HTML monolítico, textos e lógica de tradução acoplados ao DOM, ausência de tipagem e pipeline de build. Muitos painéis de editor, cards repetidos e ícones remotos. Conteúdo extenso com hierarquia uniforme; identidade visual pouco relacionada aos projetos. Manipulação manual de scroll, partículas e upload de imagens não eram necessários à visita de um recrutador.

## Arquitetura

Next.js App Router com rotas estáticas localizadas. Conteúdo separado em JSON tipado e dados compartilhados em TypeScript. Seções como Server Components; somente navegação, busca, formulário, Motion e WebGL são Client Components. Cena isolada em chunk dinâmico. Sem biblioteca de componentes, ícones remotos ou dependência de drei, pois a geometria usada não precisa dela.

## Design system

- Grafite `#141613`, superfícies `#1b1e19` e `#181b16`, texto `#f1f0e9`, texto secundário `#a3aa9e`, acento `#c5ef91`, bordas `#353b30`.
- Manrope variável para leitura e títulos; IBM Plex Mono para índices e metadados. Fontes via `next/font`, hospedadas pela aplicação.
- Container máximo 1280 px; margens desktop 56 px, tablet 32 px e mobile 20 px. Ritmo editorial com seções de 116/76 px e separadores finos.
- Escala de títulos fluida: Hero 44–84 px, títulos de seção 32–49 px, projetos 25–37 px. Corpo 13–16 px; metadados a partir de 10 px.
- Raio principal de 4 px. Sombras apenas na navegação mobile. Acento reservado a ações, texto principal e estados ativos.
- Foco visível de 2 px e offset 6 px. Botões com área mínima de 44 px. Links externos explicitamente rotulados, detalhes nativos e campo de busca com nome acessível.

## Narrativa e movimento

Hero → projetos em destaque → catálogo → trajetória → sobre/formação/skills → reconhecimentos → contato. CodeGraph, Safe Vision e DriveFlow destacam as áreas reais de arquitetura/IA, visão computacional e produto mobile. Safe Vision inverte a composição no desktop; mobile mantém leitura linear.

Motion revela os projetos e experiências apenas uma vez. Hover discreto em links e imagens. Scroll nativo, navegação fixa com indicação da seção ativa, coluna de trajetória sticky. Não há scroll hijacking. O conteúdo permanece visível sem JavaScript.

O Three.js compartilha geometria determinística com o fallback SVG e não representa dados ou métricas reais. Respeita redução de movimento, economia de dados, memória/concurrency quando disponíveis, viewport e visibilidade da aba. Pausa é controlável por teclado.

## Migração executada

1. Extração do conteúdo e inventário antes da substituição.
2. Arquivamento da fonte anterior e mudança dos assets para `public/`.
3. Setup de App Router, TypeScript, Tailwind, dados e componentes.
4. Implementação da composição editorial e interações.
5. Integração da cena e alternativas acessíveis.
6. SEO, imagens otimizadas, idiomas, verificação factual e funcional.
7. Segunda revisão visual em desktop/mobile; ajuste dos rótulos pequenos e alternância visual dos projetos.

Referências técnicas: [Next.js](https://nextjs.org/docs/app/getting-started/installation) e [React Three Fiber](https://r3f.docs.pmnd.rs/advanced/scaling-performance).


## Segunda direção criativa — dark blue

A segunda solicitação substitui a identidade grafite/verde acima. A implementação atual adota navy `#030711`, superfícies `#060c18` / `#080f1e`, azul `#1473ff`, highlights `#68b9ff` e texto `#f5f8ff`. O inglês é padrão na raiz; português foi movido para `/pt`; `/en` redireciona para `/`.

Hero de viewport inteira com headlines mascaradas, entrada não bloqueante por monograma, estrutura procedural em camadas e pontos iluminados por shader. Essa assinatura reaparece na passagem para experiência e no contato. Três draw calls por cena, sem bloom ou outros passes de pós-processamento; Float e PerformanceMonitor do Drei trazem movimento e adaptação de qualidade. O scroll move a câmera e a orientação do Hero. O shader propaga luz pelos nós; não representa inferência nem métricas reais.

Lenis mantém scroll nativo subjacente e só atua em desktop com movimento habilitado. Touch não recebe inércia artificial. Cursor auxiliar mantém o cursor nativo; botões magnéticos e tilt de previews só funcionam com mouse. Todos são desativados por reduced motion. Entrada CSS roda junto do carregamento, sem interceptar input ou usar porcentagem fictícia, e é omitida após a primeira visita da sessão.

Projetos receberam cabeçalhos amplos, índices, previews maiores, perspectiva discreta e máscaras de entrada ligadas ao scroll em navegadores compatíveis. Experiência usa composição editorial com destaque do vínculo atual e detalhes expansíveis. Nenhuma descrição profissional ou de projeto foi acrescentada ou alterada.

A performance mobile foi refinada: SVG da mesma geometria no primeiro carregamento e 3D ativável pelo controle da cena. Desktop continua animado por padrão. Cena fora do viewport é desmontada; context loss é tratado sem quebrar a página. Rotas, assets, dados tipados e componentes de conteúdo foram preservados.

Referências adicionais: [Lenis](https://github.com/darkroomengineering/lenis), [Drei Float](https://drei.docs.pmnd.rs/staging/float), [Drei PerformanceMonitor](https://drei.docs.pmnd.rs/performances/performance-monitor).
