// Sistema de Tradução PT / EN / ES
const translations = {
    pt: {
        'nav.logo': 'Pedro Soler',
        'nav.skip': 'Pular para o conteúdo',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.formation': 'Formação',
        'nav.certifications': 'Certificações',
        'nav.experience': 'Experiências',
        'nav.projects': 'Projetos',
        'nav.award': 'Prêmios',
        'nav.contact': 'Contato',
        'lang.switcher.trigger': 'Idioma',
        'lang.switcher.name.pt': 'Português (Brasil)',
        'lang.switcher.name.en': 'Inglês',
        'lang.switcher.name.es': 'Espanhol',
        'about.name': 'Pedro Henrique Contardi Soler',
        'about.hero.eyebrow': 'Olá — eu sou',
        'about.hero.pill': 'Eng. de Software · Campinas, BR',
        'about.title': 'Estudante de Engenharia de Software e Técnico em Informática',
        'about.description': 'Sou estudante de Engenharia de Software, focado em criar soluções inovadoras e eficientes. Busco constantemente aprender novas tecnologias e aplicar conhecimentos em projetos práticos.',
        'about.downloads': 'Baixar Currículo',
        'about.cv.general': 'Currículo Geral',
        'about.cv.tech-pt': 'Área de Tecnologia - PT',
        'about.cv.tech-en': 'Área de Tecnologia - ENG',
        'about.cv.certifications': 'Certificados (ZIP)',
        'about.me': 'Sobre Mim',
        'about.text1': 'Sou estudante de Engenharia de Software. Tenho experiência prática em diversas tecnologias e sempre busco me manter atualizado com as últimas tendências do mercado.',
        'about.text2': 'Meu interesse pela tecnologia me levou a criar e gerenciar projetos próprios, desenvolvendo habilidades em gestão, marketing digital e automação de processos. Sou proativo, comunicativo e sempre disposto a aprender e crescer profissionalmente.',
        'about.text3': 'Estou à disposição para novas oportunidades no mercado de tecnologia, onde eu possa aplicar meus conhecimentos, desenvolver novas habilidades e contribuir com soluções inovadoras para desafios reais. Estou aberto a aprender, colaborar em equipe e crescer profissionalmente em um ambiente dinâmico e em constante evolução.',
        'skills.title': 'Habilidades',
        'skills.technical': 'Habilidades Técnicas',
        'skills.tech.chrome': 'stack técnico',
        'skills.tech.cnn.sub': 'redes convolucionais',
        'skills.tech.generative': 'IA generativa',
        'skills.tech.mcp.sub': 'Model Context Protocol',
        'skills.soft': 'Soft Skills',
        'skills.communication': 'Comunicação',
        'skills.problem-solving': 'Resolução de Problemas',
        'skills.proactivity': 'Proatividade',
        'skills.teamwork': 'Trabalho em Equipe',
        'skills.time-management': 'Gestão de Tempo',
        'skills.learning': 'Aprendizado Contínuo',
        'certifications.title': 'Certificações',
        'certifications.cert1.title': 'Desenvolvimento Web Completo',
        'certifications.cert1.institution': 'Udemy',
        'certifications.cert2.title': 'Python para Iniciantes',
        'certifications.cert2.institution': 'Coursera',
        'certifications.cert3.title': 'JavaScript Moderno',
        'certifications.cert3.institution': 'Alura',
        'certifications.cert4.title': 'Banco de Dados SQL',
        'certifications.cert4.institution': 'Digital Innovation One',
        'experience.title': 'Experiências Profissionais',
        'experience.current': 'atual',
        'experience.job0.title': 'Estagiário de Engenharia de Software',
        'experience.job0.company': 'Nola',
        'experience.job0.description': 'Sou estagiário de Engenharia de Software, atuando no apoio ao desenvolvimento de sistemas e aplicações. Participo da criação e manutenção de códigos, correção de falhas e melhoria contínua das soluções. Auxilio na execução de testes para garantir qualidade, desempenho e confiabilidade. Trabalho em colaboração com a equipe técnica, seguindo boas práticas de desenvolvimento. Busco constantemente aprender e evoluir profissionalmente na área de tecnologia.',
        'experience.job1.title': 'Assistente de T.I',
        'experience.job1.company': 'Zara Multimarcas',
        'experience.job1.description': 'Empresa de veículos da família, onde atuo na área de tecnologia, responsável pelo desenvolvimento e gestão de sites, suporte técnico e manutenção das redes sociais e sistemas internos.',
        'experience.job2.title': 'Fundador',
        'experience.job2.company': 'Loja Escolha Correta',
        'experience.job2.description': 'Loja de dropshipping criada e administrada por mim, com foco em marketing digital, automação de vendas e otimização de campanhas online.',
        'projects.title': 'Projetos',
        'projects.upload': 'Upload Imagem',
        'projects.project1.title': 'Sistema de Gestão',
        'projects.project1.description': 'Sistema web desenvolvido para gestão de estoque e vendas, com interface responsiva e funcionalidades de relatórios em tempo real.',
        'projects.project2.title': 'E-commerce Platform',
        'projects.project2.description': 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo para gestão de produtos.',
        'projects.project3.title': 'App Mobile',
        'projects.project3.description': 'Aplicativo mobile desenvolvido em React Native para delivery de comida, com geolocalização e sistema de avaliações.',
        'contact.title': 'Contato',
        'contact.info': 'Informações de Contato',
        'contact.whatsapp': 'WhatsApp:',
        'contact.email': 'E-mail:',
        'contact.location': 'Localização:',
        'contact.location.value': 'Campinas-SP, Brasil',
        'contact.form.title': 'Envie uma Mensagem',
        'contact.form.name': 'Nome',
        'contact.form.email': 'E-mail',
        'contact.form.message': 'Mensagem',
        'contact.form.submit': 'Enviar Mensagem',
        'footer.rights': 'Todos os direitos reservados.',
        // Seções
        'certifications.title': 'Certificações',
        'certifications.filter.aria': 'Filtrar certificações por área',
        'certifications.filter.all': 'Geral',
        'certifications.filter.tech': 'Área de tecnologia',
        'certifications.filter.other': 'Outras áreas',
        'panel.about': 'perfil.md',
        'panel.skills': 'habilidades.workspace',
        'panel.soft_skills': 'outras_habilidades.yaml',
        'panel.certifications': 'certificados.grid',
        'panel.activities': 'atividades.log',
        'panel.experience': 'experiencia.yml',
        'panel.projects': 'projetos.workspace',
        'panel.awards': 'premiacoes.json',
        'panel.education': 'formacao.json',
        'panel.languages': 'idiomas.toml',
        'panel.contact': 'contato.md',
        'activities.title': 'Atividades Extracurriculares',
        'awards.title': 'Prêmios e Reconhecimentos',
        'education.title': 'Formação Acadêmica',
        'languages.title': 'Idiomas',
        // Soft skills (negócios / comunicação / gestão — stack técnico fica no painel ao lado)
        'skills.soft': 'Outras Habilidades',
        'skills.soft.communication': 'Comunicação',
        'skills.soft.problem-solving': 'Solução de Problemas',
        'skills.soft.organization': 'Organização e Planejamento',
        'skills.soft.project-leadership': 'Liderança de Projetos',
        'skills.soft.strategy': 'Planejamento Estratégico',
        'skills.soft.design-thinking': 'Design Thinking',
        'skills.soft.project-methods': 'Metodologias de gestão de projetos (Ágil, Scrum, Cascata, RUP, V, incremental, evolutivo)',
        'skills.soft.storytelling': 'Storytelling',
        'skills.soft.advanced-english': 'Inglês Avançado',
        'skills.soft.entrepreneurship': 'Empreendedorismo',
        'skills.soft.finance': 'Finanças',
        'skills.soft.branding': 'Branding e Definição de marca',
        'skills.soft.canva': 'Design Gráfico (Canva)',
        'skills.soft.video-editing': 'Edição de Vídeos',
        'skills.soft.digital-marketing': 'Marketing Digital',
        'skills.soft.social-media': 'Social Media',
        'skills.soft.meta-ads': 'Meta ADS e TikTok ADS',
        'skills.soft.traffic': 'Tráfego Pago e Tráfego Orgânico',
        'skills.soft.analytics-ecom': 'Análise de métricas para E-commerce',
        'skills.soft.ecommerce': 'E-commerce e Dropshipping',
        'skills.soft.ms-office': 'Microsoft Office (Excel, Word, PowerPoint)',
        // Projetos
        'projects.manual.title': 'Manual de Upgrade e Manutenção de Computadores',
        'projects.manual.desc': 'Manual completo desenvolvido em 2022 com instruções detalhadas para upgrade e manutenção de computadores, incluindo guias práticos e dicas técnicas.',
        'projects.lixo.title': 'Mapeamento de pontos de descarte de lixo em Campinas',
        'projects.lixo.desc': 'Projeto de 2022 que mapeou pontos de descarte de lixo em Campinas, contribuindo para a conscientização ambiental e melhoria da gestão de resíduos.',
        'projects.maxwake.title': 'MaxWake - Sensor de Segurança Automotiva',
        'projects.maxwake.desc': 'Projeto finalista na 11ª Mostra de Ciências e Tecnologia Instituto 3M (2023). Sistema de segurança automotiva que detecta sonolência do motorista.',
        'projects.guia.title': 'Guia de Investimentos para Jovens',
        'projects.guia.desc': 'Guia desenvolvido em 2023 para orientar jovens sobre investimentos, educação financeira e planejamento de futuro.',
        'projects.safevision.title': 'Safe Vision – Sistema de Segurança Rodoviária',
        'projects.safevision.desc': 'Projeto premiado que conquistou 3ª colocação na 14ª Bragantec e 12ª Mostra de Ciências e Tecnologia Instituto 3M (2024). Sistema de segurança rodoviária com visão computacional.',
        'projects.fullcontrol.title': 'FullControl',
        'projects.fullcontrol.desc': 'Projeto de 2025 focado em controle e automação de sistemas, desenvolvido durante a participação em eventos de inovação.',
        'projects.pdfchatbot.title': 'PDF Chatbot',
        'projects.pdfchatbot.desc': 'Ferramenta que interpreta PDFs e permite consultas inteligentes ao conteúdo utilizando Groq LLM.   Oferece respostas rápidas, contextuais e precisas para documentos extensos.Ideal para estudos, revisão técnica e análise documental automatizada.',
        'projects.githubanalyzer.title': 'GitHub Analyzer',
        'projects.githubanalyzer.desc': 'Sistema que analisa qualquer repositório público do GitHub utilizando dados da API oficial. Gera métricas claras sobre atividade, colaboradores, linguagens e qualidade do código. Auxilia estudantes, recrutadores e desenvolvedores a avaliarem projetos rapidamente.',
        'projects.cardapioai.title': 'Cardápio AI',
        'projects.cardapioai.desc': 'Aplicação que cria cardápios personalizados com base em preferências, metas e restrições alimentares. Utiliza Groq LLM para gerar sugestões coerentes e estruturadas de refeições. Facilita o planejamento alimentar de forma prática, rápida e inteligente.',
        'projects.codefix_ai.title': 'CodeFix AI',
        'projects.codefix_ai.desc': 'CodeFix AI é uma ferramenta baseada em IA que analisa trechos de código (Python, JS, C e dentre outras) para detectar bugs, falhas de performance e problemas de boas práticas.',
        'projects.quantix_ai.title': 'Quantix AI',
        'projects.quantix_ai.desc': 'QUANTIX AI é uma plataforma de inteligência financeira baseada em IA que analisa ativos de múltiplos mercados (B3, ações americanas e criptomoedas) em tempo real, fornecendo análise técnica automatizada, pontuações de tendência e recomendações de investimento.',
        'projects.virataxis.title': 'ViraTáxis — Landing page',
        'projects.virataxis.desc': 'Site para a ViraTáxis em Campinas: landing com cotação de viagens usando API de mapas, origem e destino, e envio da solicitação para o WhatsApp. Feito em HTML, CSS e JavaScript.',
        // Tags dos Projetos - Português
        'projects.tags.documentation': 'Documentação',
        'projects.tags.technical': 'Técnico',
        'projects.tags.hardware': 'Hardware',
        'projects.tags.mapping': 'Mapeamento',
        'projects.tags.sustainability': 'Sustentabilidade',
        'projects.tags.community': 'Comunidade',
        'projects.tags.arduino': 'Arduino',
        'projects.tags.sensors': 'Sensores',
        'projects.tags.security': 'Segurança',
        'projects.tags.iot': 'IoT',
        'projects.tags.financial-education': 'Educação Financeira',
        'projects.tags.planning': 'Planejamento',
        'projects.tags.youth': 'Jovens',
        'projects.tags.computer-vision': 'Visão Computacional',
        'projects.tags.python': 'Python',
        'projects.tags.opencv': 'OpenCV',
        'projects.tags.automation': 'Automação',
        'projects.tags.control': 'Controle',
        'projects.tags.systems': 'Sistemas',
        'projects.tags.llm': 'LLM',
        'projects.tags.ai': 'A.I',
        'projects.tags.web': 'Web',
        'projects.tags.landing': 'Landing page',
        'projects.tags.maps-api': 'API de mapas',
        'projects.tags.whatsapp': 'WhatsApp',
        'projects.tags.github': 'GitHub',
        'projects.tags.api': 'API',
        'projects.tags.nodejs': 'Node.js',
        'projects.tags.finance': 'Finanças',
        'projects.btn.view': 'Veja Mais',
        // Atividades
        'activities.item.2023-3m': '2023 – 11ª Mostra de Ciências e Tecnologia Instituto 3M',
        'activities.item.2024-events': '2024 – Expo Ecomm Campinas 2024, Startup Day 2024, Campinas Innovation Week 2024, Aula magna com Caito Maia - Branding e Marketing Digital',
        'activities.item.2024-bragantec': '2024 – 14ª Bragantec',
        'activities.item.2024-3m-senac': '2024 – 12ª Mostra de Ciências e Tecnologia Instituto 3M, 17ª Edição Empreenda Senac',
        'activities.item.2025-events': '2025 – Startup Day 2025, 12º Motiv.se PUC-Campinas, Campinas Innovation Week',
        // Formação
        'education.software-bachelor': 'Bacharelado em Engenharia de Software',
        'education.puc': 'PUC Campinas',
        'education.highschool-tech': 'Ensino Médio Integrado com Técnico em Informática',
        'education.senac': 'Senac Campinas',
        'education.english-classes': 'Aulas de Inglês',
        'education.english-course': 'Curso de Inglês',
        // Idiomas
        'languages.pt': 'Português',
        'languages.en': 'Inglês',
        'languages.es': 'Espanhol',
        'languages.level.native': 'Nativo (C2)',
        'languages.level.advanced': 'Avançado (C1)',
        'languages.level.basic': 'Básico (A2)',
        // Certificações (PT) — alinhado à lista oficial de certificados
        'cert.1.title': 'Análise de métricas', 'cert.1.inst': 'Bequest Digital',
        'cert.2.title': 'Análise de métricas para e-commerce: explorando conceitos', 'cert.2.inst': 'Alura',
        'cert.3.title': 'Análise e Classificação de Faces: Visão Computacional com OpenCV', 'cert.3.inst': 'Alura',
        'cert.4.title': 'Aprendizagem com IA: personalizando sua rotina com ChatGPT', 'cert.4.inst': 'Alura',
        'cert.5.title': 'Assistente de Desenvolvimento de Aplicativos Computacionais', 'cert.5.inst': 'Senac Campinas',
        'cert.6.title': 'Assistente de Operação de Redes de Computadores', 'cert.6.inst': 'Senac Campinas',
        'cert.7.title': 'Assistente de Suporte e Manutenção de Computadores', 'cert.7.inst': 'Senac Campinas',
        'cert.8.title': 'Aula Magna com Caito Maia - Branding e Marketing Digital', 'cert.8.inst': 'Belas Artes e Chilli Beans',
        'cert.9.title': 'Branding: criando uma marca forte', 'cert.9.inst': 'Alura',
        'cert.10.title': 'Básico Facebook ADS', 'cert.10.inst': 'Bequest Digital',
        'cert.11.title': 'Canva: criando apresentações comerciais', 'cert.11.inst': 'Alura',
        'cert.12.title': 'Canva: criando vídeos com motion graphics', 'cert.12.inst': 'Alura',
        'cert.13.title': 'Canva: crie designs digitais para redes sociais', 'cert.13.inst': 'Alura',
        'cert.14.title': 'Canva: crie um e-book com apoio da Inteligência Artificial', 'cert.14.inst': 'Alura',
        'cert.15.title': 'CashFlow', 'cert.15.inst': 'Bequest Digital',
        'cert.16.title': 'ChatGPT: desvendando a IA em conversas e suas aplicações', 'cert.16.inst': 'Alura',
        'cert.17.title': 'ChatGPT: otimizando a qualidade dos resultados', 'cert.17.inst': 'Alura',
        'cert.18.title': 'Comunicação corporativa: usando PowerPoint de forma efetiva', 'cert.18.inst': 'Alura',
        'cert.19.title': 'Construindo Lojas Profissionais', 'cert.19.inst': 'Bequest Digital',
        'cert.20.title': 'Copywriting e Persuasão, a Arte da Venda', 'cert.20.inst': 'Bequest Digital',
        'cert.21.title': 'Copywriting: criando textos persuasivos com Inteligência Artificial', 'cert.21.inst': 'Alura',
        'cert.22.title': 'Criativos que Vendem', 'cert.22.inst': 'Bequest Digital',
        'cert.23.title': 'Criação de conteúdo em vídeo: estratégias e otimizações', 'cert.23.inst': 'Alura',
        'cert.24.title': 'Desenvolva seu primeiro robô de bate-papo', 'cert.24.inst': 'IBM',
        'cert.25.title': 'Design de apresentações: trabalhando com o PowerPoint', 'cert.25.inst': 'Alura',
        'cert.26.title': 'Design Thinking', 'cert.26.inst': 'Sebrae',
        'cert.27.title': 'Estratégia de crescimento para startups', 'cert.27.inst': 'Santander X',
        'cert.28.title': 'Excel: domine o editor de planilhas', 'cert.28.inst': 'Alura',
        'cert.29.title': 'Facebook Ads: campanha de vídeo e mensagem', 'cert.29.inst': 'Alura',
        'cert.30.title': 'Facebook Ads: campanhas de remarketing', 'cert.30.inst': 'Alura',
        'cert.31.title': 'Facebook Ads: campanhas para e-commerce', 'cert.31.inst': 'Alura',
        'cert.32.title': 'Facebook Ads: criando campanhas de sucesso', 'cert.32.inst': 'Alura',
        'cert.33.title': 'Funis de Vendas que mais Geram Resultados', 'cert.33.inst': 'Bequest Digital',
        'cert.34.title': 'Funções com Excel: operações matemáticas e filtros', 'cert.34.inst': 'Alura',
        'cert.35.title': 'Gestão do Conhecimento: otimize a busca e a organização de informações com IA', 'cert.35.inst': 'Alura',
        'cert.36.title': 'Gestão financeira', 'cert.36.inst': 'Sebrae',
        'cert.37.title': 'Gestão financeira: administre suas finanças na prática', 'cert.37.inst': 'Alura',
        'cert.38.title': 'Inteligência Artificial: campanhas de Marketing Digital', 'cert.38.inst': 'Alura',
        'cert.39.title': 'Inteligência Artificial: gestão de mídias sociais', 'cert.39.inst': 'Alura',
        'cert.40.title': 'Inteligência Artificial: personalize estratégias de vendas com ChatGPT', 'cert.40.inst': 'Alura',
        'cert.41.title': 'Inteligência artificial Generativa: Midjourney e ChatGPT', 'cert.41.inst': 'Alura',
        'cert.42.title': 'Marketing Digital: explorando os conceitos', 'cert.42.inst': 'Alura',
        'cert.43.title': 'Marketing digital para sua empresa: equipe comercial', 'cert.43.inst': 'Alura',
        'cert.44.title': 'Mídias Sociais: estratégias para engajar o público', 'cert.44.inst': 'Alura',
        'cert.45.title': 'Mudanças e Escolhas - Caminhos e possibilidades para fazer escolhas e decidir', 'cert.45.inst': 'Sebrae',
        'cert.46.title': 'O que é E-mail Marketing?', 'cert.46.inst': 'Bequest Digital',
        'cert.47.title': 'Oficina Se Liga no Empreendedorismo', 'cert.47.inst': 'PUC-Campinas',
        'cert.48.title': 'Planejamento Estratégico', 'cert.48.inst': 'G4 Educação',
        'cert.49.title': 'Plano de Marketing Digital: como criar e coordenar estratégias', 'cert.49.inst': 'Alura',
        'cert.50.title': 'Produtos, Mineração e Fornecimento', 'cert.50.inst': 'Bequest Digital',
        'cert.51.title': 'Psicologia financeira: maximizando o potencial financeiro', 'cert.51.inst': 'Alura',
        'cert.52.title': 'Python: começando com a linguagem', 'cert.52.inst': 'Alura',
        'cert.53.title': 'Página de Venda & Oferta', 'cert.53.inst': 'Bequest Digital',
        'cert.54.title': 'Recursos Visuais com Excel: explorando gráficos e formatos', 'cert.54.inst': 'Alura',
        'cert.55.title': 'Seminário A Universidade do Futuro e o Futuro da Universidade', 'cert.55.inst': 'PUC-Campinas',
        'cert.56.title': 'Social Commerce: como alavancar suas vendas nas redes sociais', 'cert.56.inst': 'Alura',
        'cert.57.title': 'Storytelling Como Ferramenta de Negócios', 'cert.57.inst': 'Sebrae',
        'cert.58.title': 'Tecnologia da Informação', 'cert.58.inst': 'iEstudar',
        'cert.59.title': 'Testes Facebook ADS', 'cert.59.inst': 'Bequest Digital',
        'cert.60.title': 'TikTok Ads: funcionalidades e configurações para criar campanhas', 'cert.60.inst': 'Alura',
        'cert.61.title': 'Tráfego Pago: Estratégias e Aplicações', 'cert.61.inst': 'Alura',
        'cert.62.title': 'Usar IA generativa para desenvolvimento de software', 'cert.62.inst': 'IBM',
        'cert.63.title': 'Visão Computacional: análise facial', 'cert.63.inst': 'Alura',
        'cert.64.title': 'Visão Computacional com Arduino', 'cert.64.inst': 'Hotmart - Dev Ideias',
        'cert.65.title': 'Workshop Se Liga na Argumentação', 'cert.65.inst': 'PUC-Campinas',
        'cert.66.title': 'Workshop de Modelagem de Negócios', 'cert.66.inst': 'Inova Unicamp',
        'cert.67.title': 'Workshop de Descoberta do Cliente Ideal e Negócios de Impacto Socioambiental', 'cert.67.inst': 'Inova Unicamp',
        'cert.68.title': 'Programa de Aceleração - CRIA I', 'cert.68.inst': 'PUC Campinas',

        // Prêmios (PT)
        'awards.1.title': 'Projeto Finalista - MaxWake',
        'awards.1.event': '11ª Mostra de Ciências e Tecnologia - Instituto 3M',
        'awards.2.title': '3ª Colocação - Safe Vision',
        'awards.2.event': 'Categoria: Informática - 14ª Bragantec (Instituto Federal de São Paulo)',
        'awards.3.title': '3ª Colocação - Safe Vision',
        'awards.3.event': 'Categoria: Engenharia - 12ª Mostra de Ciências e Tecnologia - Instituto 3M',
        'awards.4.title': 'Projeto Semifinalista - Safe Vision',
        'awards.4.event': '17ª Edição Empreenda Senac',
        'awards.5.title': '2ª Colocação - Safe Vision',
        'awards.5.event': '12º Motiv.se PUC-Campinas - Mostra de Empreendedorismo e Inovação'
    },
    en: {
        'nav.logo': 'Pedro Soler',
        'nav.skip': 'Skip to content',
        'nav.about': 'About Me',
        'nav.skills': 'Skills',
        'nav.formation':'Education',
        'nav.certifications': 'Certifications',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.award': 'Awards',
        'nav.contact': 'Contact',
        'lang.switcher.trigger': 'Language',
        'lang.switcher.name.pt': 'Portuguese (Brazil)',
        'lang.switcher.name.en': 'English',
        'lang.switcher.name.es': 'Spanish',
        'about.name': 'Pedro Henrique Contardi Soler',
        "about.hero.eyebrow": "Hi — I'm",
        'about.hero.pill': 'Software Engineering · Campinas, BR',
        'about.title': 'Software Engineering Student and IT Technician',
        'about.description': 'I am a Software Engineering student focused on creating innovative and efficient solutions. I am constantly seeking to learn new technologies and apply my knowledge in practical projects.',
        'about.downloads': 'Download Resume',
        'about.cv.general': 'General Resume',
        'about.cv.tech-pt': 'Technology Field - PT',
        'about.cv.tech-en': 'Technology Field - ENG',
        'about.cv.certifications': 'Certifications (ZIP)',
        'about.me': 'About Me',
        'about.text1': 'I am a Software Engineering student with hands-on experience in various technologies and a constant drive to stay up to date with the latest market trends.',
        'about.text2': 'My interest in technology has led me to create and manage my own projects, developing skills in management, digital marketing, and process automation. I am proactive, communicative, and always eager to learn and grow professionally.',
        'about.text3': 'I am open to new opportunities in the technology market, where I can apply my knowledge, develop new skills, and contribute with innovative solutions to real-world challenges. I am eager to learn, collaborate with teams, and grow professionally in a dynamic and ever-evolving environment.',
        'skills.title': 'Skills',
        'skills.technical': 'Technical Skills',
        'skills.tech.chrome': 'dev stack',
        'skills.tech.cnn.sub': 'convolutional nets',
        'skills.tech.generative': 'Generative AI',
        'skills.tech.mcp.sub': 'Model Context Protocol',
        'skills.soft': 'Soft Skills',
        'skills.communication': 'Communication',
        'skills.problem-solving': 'Problem Solving',
        'skills.proactivity': 'Proactivity',
        'skills.teamwork': 'Teamwork',
        'skills.time-management': 'Time Management',
        'skills.learning': 'Continuous Learning',
        'certifications.title': 'Certifications',
        'certifications.cert1.title': 'Complete Web Development',
        'certifications.cert1.institution': 'Udemy',
        'certifications.cert2.title': 'Python for Beginners',
        'certifications.cert2.institution': 'Coursera',
        'certifications.cert3.title': 'Modern JavaScript',
        'certifications.cert3.institution': 'Alura',
        'certifications.cert4.title': 'SQL Database',
        'certifications.cert4.institution': 'Digital Innovation One',
        'experience.title': 'Professional Experience',
        'experience.current': 'current',
        'experience.job0.title': 'Software Engineering Intern',
        'experience.job0.company': 'Nola',
        'experience.job0.description': 'I am a Software Engineering intern, supporting the development of systems and applications. I work on code implementation, maintenance, and bug fixing. I assist in testing processes to ensure quality, performance, and reliability. I collaborate closely with the technical team, following software development best practices. I am constantly seeking to learn and grow professionally in the technology field.',
        'experience.job1.title': 'IT Assistant',
        'experience.job1.company': 'Zara Multimarcas',
        'experience.job1.description': 'Family vehicle company, where I work in the technology area, responsible for developing and managing websites, technical support and maintaining social media and internal systems.',
        'experience.job2.title': 'Founder',
        'experience.job2.company': 'Loja Escolha Correta',
        'experience.job2.description': 'Dropshipping store created and managed by me, focused on digital marketing, sales automation and online campaign optimization.',
        'projects.title': 'Projects',
        'projects.upload': 'Upload Image',
        'projects.project1.title': 'Management System',
        'projects.project1.description': 'Web system developed for inventory and sales management, with responsive interface and real-time reporting features.',
        'projects.project2.title': 'E-commerce Platform',
        'projects.project2.description': 'Complete e-commerce platform with shopping cart, payment system and administrative panel for product management.',
        'projects.project3.title': 'Mobile App',
        'projects.project3.description': 'Mobile application developed in React Native for food delivery, with geolocation and rating system.',
        'contact.title': 'Contact',
        'contact.info': 'Contact Information',
        'contact.whatsapp': 'WhatsApp:',
        'contact.email': 'Email:',
        'contact.location': 'Location:',
        'contact.location.value': 'Campinas, SP, Brazil',
        'contact.form.title': 'Send a Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        'footer.rights': 'All rights reserved.',
        // Sections
        'certifications.title': 'Certifications',
        'certifications.filter.aria': 'Filter certifications by area',
        'certifications.filter.all': 'All',
        'certifications.filter.tech': 'Technology',
        'certifications.filter.other': 'Other fields',
        'panel.about': 'profile.md',
        'panel.skills': 'skills.workspace',
        'panel.soft_skills': 'other_skills.yaml',
        'panel.certifications': 'certifications.grid',
        'panel.activities': 'activities.log',
        'panel.experience': 'experience.yml',
        'panel.projects': 'projects.workspace',
        'panel.awards': 'awards.json',
        'panel.education': 'education.json',
        'panel.languages': 'locales.toml',
        'panel.contact': 'contact.md',
        'activities.title': 'Extracurricular Activities',
        'awards.title': 'Awards & Recognitions',
        'education.title': 'Education',
        'languages.title': 'Languages',
        // Soft skills (business / communication / management — technical stack is in the other panel)
        'skills.soft': 'Soft Skills',
        'skills.soft.communication': 'Communication',
        'skills.soft.problem-solving': 'Problem Solving',
        'skills.soft.organization': 'Organization & Planning',
        'skills.soft.project-leadership': 'Project Leadership',
        'skills.soft.strategy': 'Strategic Planning',
        'skills.soft.design-thinking': 'Design Thinking',
        'skills.soft.project-methods': 'Project management methodologies (Agile, Scrum, Waterfall, RUP, V-model, incremental, evolutionary)',
        'skills.soft.storytelling': 'Storytelling',
        'skills.soft.advanced-english': 'Advanced English',
        'skills.soft.entrepreneurship': 'Entrepreneurship',
        'skills.soft.finance': 'Finance',
        'skills.soft.branding': 'Branding & Brand Definition',
        'skills.soft.canva': 'Graphic Design (Canva)',
        'skills.soft.video-editing': 'Video Editing',
        'skills.soft.digital-marketing': 'Digital Marketing',
        'skills.soft.social-media': 'Social Media',
        'skills.soft.meta-ads': 'Meta Ads & TikTok Ads',
        'skills.soft.traffic': 'Paid & Organic Traffic',
        'skills.soft.analytics-ecom': 'E-commerce Metrics Analysis',
        'skills.soft.ecommerce': 'E-commerce & Dropshipping',
        'skills.soft.ms-office': 'Microsoft Office (Excel, Word, PowerPoint)',
        // Projects
        'projects.manual.title': 'Computer Upgrade & Maintenance Manual',
        'projects.manual.desc': 'Comprehensive manual developed in 2022 with detailed instructions for computer upgrades and maintenance, including practical guides and technical tips.',
        'projects.lixo.title': 'Mapping Waste Disposal Points in Campinas',
        'projects.lixo.desc': '2022 project mapping waste disposal points in Campinas, contributing to environmental awareness and improved waste management.',
        'projects.maxwake.title': 'MaxWake - Automotive Safety Sensor',
        'projects.maxwake.desc': 'Finalist project at the 11th 3M Institute Science and Technology Fair (2023). Automotive safety system that detects driver drowsiness.',
        'projects.guia.title': 'Investment Guide for Young People',
        'projects.guia.desc': 'Guide developed in 2023 to help young people with investments, financial education, and future planning.',
        'projects.safevision.title': 'Safe Vision – Road Safety System',
        'projects.safevision.desc': 'Award-winning project: 3rd place at the 14th Bragantec and 12th 3M Institute Science and Technology Fair (2024). Road safety system using computer vision.',
        'projects.fullcontrol.title': 'FullControl',
        'projects.fullcontrol.desc': '2025 project focused on system control and automation, developed during participation in innovation events.',
        'projects.pdfchatbot.title': 'PDF Chatbot',
        'projects.pdfchatbot.desc': 'A tool that interprets PDFs and enables intelligent queries using Groq LLM. Delivers fast, contextual, and accurate answers from long documents. Designed for study, technical review, and automated document analysis.',
        'projects.githubanalyzer.title': 'GitHub Analyzer',
        'projects.githubanalyzer.desc': 'A system that analyzes any public GitHub repository using data from the official API. Provides clear metrics on activity, contributors, languages, and code quality. Helps students, recruiters, and developers evaluate projects efficiently.',
        'projects.cardapioai.title': 'Cardápio AI',
        'projects.cardapioai.desc': 'An application that generates personalized meal plans based on preferences, goals, and dietary restrictions. Uses Groq LLM to produce structured and consistent meal suggestions. Simplifies meal planning in a practical, fast, and intelligent way.',
        'projects.codefix_ai.title': 'CodeFix AI',
        'projects.codefix_ai.desc': 'CodeFix AI is an AI-based tool that analyzes code snippets (Python, JS, C, and others) to detect bugs, performance issues, and bad practice problems.',
        'projects.quantix_ai.title': 'Quantix AI',
        'projects.quantix_ai.desc': 'QUANTIX AI is an AI-powered financial intelligence platform that analyzes assets across multiple markets (B3, US stocks, and cryptocurrencies) in real time, delivering automated technical analysis, trend-based scoring, and investment recommendations.',
        'projects.virataxis.title': 'ViraTáxis — Landing page',
        'projects.virataxis.desc': 'Client site for ViraTáxis in Campinas: a landing page with trip quotes using a maps API, origin and destination, and routing the request to WhatsApp. Built with HTML, CSS, and JavaScript.',
        // Tags dos Projetos - English
        'projects.tags.documentation': 'Documentation',
        'projects.tags.technical': 'Technical',
        'projects.tags.hardware': 'Hardware',
        'projects.tags.mapping': 'Mapping',
        'projects.tags.sustainability': 'Sustainability',
        'projects.tags.community': 'Community',
        'projects.tags.arduino': 'Arduino',
        'projects.tags.sensors': 'Sensors',
        'projects.tags.security': 'Security',
        'projects.tags.iot': 'IoT',
        'projects.tags.financial-education': 'Financial Education',
        'projects.tags.planning': 'Planning',
        'projects.tags.youth': 'Youth',
        'projects.tags.computer-vision': 'Computer Vision',
        'projects.tags.python': 'Python',
        'projects.tags.opencv': 'OpenCV',
        'projects.tags.automation': 'Automation',
        'projects.tags.control': 'Control',
        'projects.tags.systems': 'Systems',
        'projects.tags.llm': 'LLM',
        'projects.tags.ai': 'A.I',
        'projects.tags.web': 'Web',
        'projects.tags.landing': 'Landing page',
        'projects.tags.maps-api': 'Maps API',
        'projects.tags.whatsapp': 'WhatsApp',
        'projects.tags.github': 'GitHub',
        'projects.tags.api': 'API',
        'projects.tags.nodejs': 'Node.js',
        'projects.tags.finance': 'Finance',
        'projects.btn.view': 'See More',
        // Activities
        'activities.item.2023-3m': '2023 – 11th 3M Institute Science and Technology Fair',
        'activities.item.2024-events': '2024 – Expo Ecomm Campinas 2024, Startup Day 2024, Campinas Innovation Week 2024, Guest Lecture with Caito Maia - Branding & Digital Marketing',
        'activities.item.2024-bragantec': '2024 – 14th Bragantec',
        'activities.item.2024-3m-senac': '2024 – 12th 3M Institute Science and Technology Fair, 17th Empreenda Senac Edition',
        'activities.item.2025-events': '2025 – Startup Day 2025, 12th Motiv.se PUC-Campinas, Campinas Innovation Week',
        // Education
        'education.software-bachelor': 'Bachelor in Software Engineering',
        'education.puc': 'PUC Campinas',
        'education.highschool-tech': 'High School Integrated with IT Technician',
        'education.senac': 'Senac Campinas',
        'education.english-classes': 'English Classes',
        'education.english-course': 'English Course',
        // Languages
        'languages.pt': 'Portuguese',
        'languages.en': 'English',
        'languages.es': 'Spanish',
        'languages.level.native': 'Native (C2)',
        'languages.level.advanced': 'Advanced (C1)',
        'languages.level.basic': 'Basic (A2)',
        // Certifications (EN)
        'cert.1.title': 'Metrics analysis', 'cert.1.inst': 'Bequest Digital',
        'cert.2.title': 'E-commerce metrics analysis: exploring concepts', 'cert.2.inst': 'Alura',
        'cert.3.title': 'Face analysis and classification: computer vision with OpenCV', 'cert.3.inst': 'Alura',
        'cert.4.title': 'Learning with AI: personalizing your routine with ChatGPT', 'cert.4.inst': 'Alura',
        'cert.5.title': 'Assistant in development of computational applications', 'cert.5.inst': 'Senac Campinas',
        'cert.6.title': 'Assistant in computer network operations', 'cert.6.inst': 'Senac Campinas',
        'cert.7.title': 'Assistant in computer support and maintenance', 'cert.7.inst': 'Senac Campinas',
        'cert.8.title': 'Keynote with Caito Maia - branding and digital marketing', 'cert.8.inst': 'Belas Artes & Chilli Beans',
        'cert.9.title': 'Branding: building a strong brand', 'cert.9.inst': 'Alura',
        'cert.10.title': 'Facebook Ads basics', 'cert.10.inst': 'Bequest Digital',
        'cert.11.title': 'Canva: creating business presentations', 'cert.11.inst': 'Alura',
        'cert.12.title': 'Canva: creating videos with motion graphics', 'cert.12.inst': 'Alura',
        'cert.13.title': 'Canva: digital designs for social media', 'cert.13.inst': 'Alura',
        'cert.14.title': 'Canva: create an e-book with artificial intelligence', 'cert.14.inst': 'Alura',
        'cert.15.title': 'CashFlow', 'cert.15.inst': 'Bequest Digital',
        'cert.16.title': 'ChatGPT: understanding AI in conversations and applications', 'cert.16.inst': 'Alura',
        'cert.17.title': 'ChatGPT: improving the quality of outputs', 'cert.17.inst': 'Alura',
        'cert.18.title': 'Corporate communication: using PowerPoint effectively', 'cert.18.inst': 'Alura',
        'cert.19.title': 'Building professional stores', 'cert.19.inst': 'Bequest Digital',
        'cert.20.title': 'Copywriting and persuasion: the art of selling', 'cert.20.inst': 'Bequest Digital',
        'cert.21.title': 'Copywriting: persuasive writing with artificial intelligence', 'cert.21.inst': 'Alura',
        'cert.22.title': 'Creatives that sell', 'cert.22.inst': 'Bequest Digital',
        'cert.23.title': 'Video content creation: strategies and optimizations', 'cert.23.inst': 'Alura',
        'cert.24.title': 'Build your first chatbot', 'cert.24.inst': 'IBM',
        'cert.25.title': 'Presentation design: working with PowerPoint', 'cert.25.inst': 'Alura',
        'cert.26.title': 'Design Thinking', 'cert.26.inst': 'Sebrae',
        'cert.27.title': 'Growth strategy for startups', 'cert.27.inst': 'Santander X',
        'cert.28.title': 'Excel: master the spreadsheet editor', 'cert.28.inst': 'Alura',
        'cert.29.title': 'Facebook Ads: video and messaging campaigns', 'cert.29.inst': 'Alura',
        'cert.30.title': 'Facebook Ads: remarketing campaigns', 'cert.30.inst': 'Alura',
        'cert.31.title': 'Facebook Ads: e-commerce campaigns', 'cert.31.inst': 'Alura',
        'cert.32.title': 'Facebook Ads: creating successful campaigns', 'cert.32.inst': 'Alura',
        'cert.33.title': 'Sales funnels that drive the best results', 'cert.33.inst': 'Bequest Digital',
        'cert.34.title': 'Excel functions: math operations and filters', 'cert.34.inst': 'Alura',
        'cert.35.title': 'Knowledge management: optimize search and organization of information with AI', 'cert.35.inst': 'Alura',
        'cert.36.title': 'Financial management', 'cert.36.inst': 'Sebrae',
        'cert.37.title': 'Financial management: handle your finances in practice', 'cert.37.inst': 'Alura',
        'cert.38.title': 'Artificial intelligence: digital marketing campaigns', 'cert.38.inst': 'Alura',
        'cert.39.title': 'Artificial intelligence: social media management', 'cert.39.inst': 'Alura',
        'cert.40.title': 'Artificial intelligence: personalize sales strategies with ChatGPT', 'cert.40.inst': 'Alura',
        'cert.41.title': 'Generative AI: Midjourney and ChatGPT', 'cert.41.inst': 'Alura',
        'cert.42.title': 'Digital marketing: exploring concepts', 'cert.42.inst': 'Alura',
        'cert.43.title': 'Digital marketing for your company: sales team', 'cert.43.inst': 'Alura',
        'cert.44.title': 'Social media: strategies to engage your audience', 'cert.44.inst': 'Alura',
        'cert.45.title': 'Changes and choices - paths and possibilities for deciding', 'cert.45.inst': 'Sebrae',
        'cert.46.title': 'What is email marketing?', 'cert.46.inst': 'Bequest Digital',
        'cert.47.title': '“Se Liga” entrepreneurship workshop', 'cert.47.inst': 'PUC-Campinas',
        'cert.48.title': 'Strategic planning', 'cert.48.inst': 'G4 Educação',
        'cert.49.title': 'Digital marketing plan: how to create and coordinate strategies', 'cert.49.inst': 'Alura',
        'cert.50.title': 'Products, sourcing and supply', 'cert.50.inst': 'Bequest Digital',
        'cert.51.title': 'Financial psychology: maximizing financial potential', 'cert.51.inst': 'Alura',
        'cert.52.title': 'Python: getting started with the language', 'cert.52.inst': 'Alura',
        'cert.53.title': 'Sales page & offer', 'cert.53.inst': 'Bequest Digital',
        'cert.54.title': 'Excel visual features: exploring charts and formats', 'cert.54.inst': 'Alura',
        'cert.55.title': 'Seminar: the university of the future and the future of the university', 'cert.55.inst': 'PUC-Campinas',
        'cert.56.title': 'Social commerce: boosting sales on social networks', 'cert.56.inst': 'Alura',
        'cert.57.title': 'Storytelling as a business tool', 'cert.57.inst': 'Sebrae',
        'cert.58.title': 'Information technology', 'cert.58.inst': 'iEstudar',
        'cert.59.title': 'Facebook Ads testing', 'cert.59.inst': 'Bequest Digital',
        'cert.60.title': 'TikTok Ads: features and settings to create campaigns', 'cert.60.inst': 'Alura',
        'cert.61.title': 'Paid traffic: strategies and applications', 'cert.61.inst': 'Alura',
        'cert.62.title': 'Using generative AI for software development', 'cert.62.inst': 'IBM',
        'cert.63.title': 'Computer vision: facial analysis', 'cert.63.inst': 'Alura',
        'cert.64.title': 'Computer vision with Arduino', 'cert.64.inst': 'Hotmart - Dev Ideias',
        'cert.65.title': '“Se Liga” argumentation workshop', 'cert.65.inst': 'PUC-Campinas',
        'cert.66.title': 'Business modeling workshop', 'cert.66.inst': 'Inova Unicamp',
        'cert.67.title': 'Ideal customer discovery and social-environmental impact business workshop', 'cert.67.inst': 'Inova Unicamp',
        'cert.68.title': 'Acceleration program - CRIA I', 'cert.68.inst': 'PUC Campinas',

        // Awards (EN)
        'awards.1.title': 'Finalist Project - MaxWake',
        'awards.1.event': '11th Science and Technology Fair - 3M Institute',
        'awards.2.title': '3rd Place - Safe Vision',
        'awards.2.event': 'Category: Computer Science - 14th Bragantec (Federal Institute of São Paulo)',
        'awards.3.title': '3rd Place - Safe Vision',
        'awards.3.event': 'Category: Engineering - 12th Science and Technology Fair - 3M Institute',
        'awards.4.title': 'Semifinalist Project - Safe Vision',
        'awards.4.event': '17th Empreenda Senac Edition',
        'awards.5.title': '2nd Place - Safe Vision',
        'awards.5.event': '12th Motiv.se PUC-Campinas - Entrepreneurship and Innovation Showcase'
    },
    es: {
        'nav.logo': 'Pedro Soler',
        'nav.skip': 'Ir al contenido',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.formation': 'Formación',
        'nav.certifications': 'Certificaciones',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.award': 'Premios',
        'nav.contact': 'Contacto',
        'lang.switcher.trigger': 'Idioma',
        'lang.switcher.name.pt': 'Portugués (Brasil)',
        'lang.switcher.name.en': 'Inglés',
        'lang.switcher.name.es': 'Español',
        'about.name': 'Pedro Henrique Contardi Soler',
        'about.hero.eyebrow': 'Hola — soy',
        'about.hero.pill': 'Ing. de Software · Campinas, BR',
        'about.title': 'Estudiante de Ingeniería de Software y Técnico en Informática',
        'about.description': 'Soy estudiante de Ingeniería de Software, enfocado en crear soluciones innovadoras y eficientes. Busco aprender constantemente nuevas tecnologías y aplicar conocimientos en proyectos prácticos.',
        'about.downloads': 'Descargar currículum',
        'about.cv.general': 'Currículum general',
        'about.cv.tech-pt': 'Área de tecnología - PT',
        'about.cv.tech-en': 'Área de tecnología - ING',
        'about.cv.certifications': 'Certificaciones (ZIP)',
        'about.me': 'Sobre mí',
        'about.text1': 'Soy estudiante de Ingeniería de Software con experiencia práctica en diversas tecnologías y una motivación constante por mantenerme al día con las últimas tendencias del mercado.',
        'about.text2': 'Mi interés por la tecnología me llevó a crear y gestionar proyectos propios, desarrollando habilidades en gestión, marketing digital y automatización de procesos. Soy proactivo, comunicativo y siempre dispuesto a aprender y crecer profesionalmente.',
        'about.text3': 'Estoy abierto a nuevas oportunidades en el mercado tecnológico, donde pueda aplicar mis conocimientos, desarrollar nuevas habilidades y aportar soluciones innovadoras a retos reales. Me interesa aprender, colaborar en equipo y crecer profesionalmente en un entorno dinámico y en constante evolución.',
        'skills.title': 'Habilidades',
        'skills.technical': 'Habilidades técnicas',
        'skills.tech.chrome': 'stack técnico',
        'skills.tech.cnn.sub': 'redes convolucionales',
        'skills.tech.generative': 'IA generativa',
        'skills.tech.mcp.sub': 'Model Context Protocol',
        'skills.soft': 'Otras habilidades',
        'skills.communication': 'Comunicación',
        'skills.problem-solving': 'Resolución de problemas',
        'skills.proactivity': 'Proactividad',
        'skills.teamwork': 'Trabajo en equipo',
        'skills.time-management': 'Gestión del tiempo',
        'skills.learning': 'Aprendizaje continuo',
        'certifications.title': 'Certificaciones',
        'certifications.filter.aria': 'Filtrar certificaciones por área',
        'certifications.filter.all': 'General',
        'certifications.filter.tech': 'Tecnología',
        'certifications.filter.other': 'Otras áreas',
        'panel.about': 'perfil.md',
        'panel.skills': 'habilidades.workspace',
        'panel.soft_skills': 'otras_habilidades.yaml',
        'panel.certifications': 'certificaciones.grid',
        'panel.activities': 'actividades.log',
        'panel.experience': 'experiencia.yml',
        'panel.projects': 'proyectos.workspace',
        'panel.awards': 'premios.json',
        'panel.education': 'formacion.json',
        'panel.languages': 'idiomas.toml',
        'panel.contact': 'contacto.md',
        'certifications.cert1.title': 'Desarrollo web completo',
        'certifications.cert1.institution': 'Udemy',
        'certifications.cert2.title': 'Python para principiantes',
        'certifications.cert2.institution': 'Coursera',
        'certifications.cert3.title': 'JavaScript moderno',
        'certifications.cert3.institution': 'Alura',
        'certifications.cert4.title': 'Base de datos SQL',
        'certifications.cert4.institution': 'Digital Innovation One',
        'experience.title': 'Experiencia profesional',
        'experience.current': 'actual',
        'experience.job0.title': 'Pasante de Ingeniería de Software',
        'experience.job0.company': 'Nola',
        'experience.job0.description': 'Soy pasante de Ingeniería de Software y apoyo el desarrollo de sistemas y aplicaciones. Participo en la implementación y el mantenimiento del código y en la corrección de errores. Colaboro en pruebas para asegurar calidad, rendimiento y confiabilidad. Trabajo con el equipo técnico siguiendo buenas prácticas de desarrollo. Busco aprender y crecer profesionalmente en tecnología.',
        'experience.job1.title': 'Asistente de TI',
        'experience.job1.company': 'Zara Multimarcas',
        'experience.job1.description': 'Empresa familiar del sector de vehículos, donde trabajo en el área de tecnología: desarrollo y gestión de sitios web, soporte técnico y mantenimiento de redes sociales y sistemas internos.',
        'experience.job2.title': 'Fundador',
        'experience.job2.company': 'Loja Escolha Correta',
        'experience.job2.description': 'Tienda de dropshipping creada y gestionada por mí, enfocada en marketing digital, automatización de ventas y optimización de campañas en línea.',
        'projects.title': 'Proyectos',
        'projects.upload': 'Subir imagen',
        'projects.project1.title': 'Sistema de gestión',
        'projects.project1.description': 'Sistema web para gestión de inventario y ventas, con interfaz responsiva e informes en tiempo real.',
        'projects.project2.title': 'Plataforma de comercio electrónico',
        'projects.project2.description': 'Plataforma de e-commerce con carrito, pagos y panel administrativo para la gestión de productos.',
        'projects.project3.title': 'Aplicación móvil',
        'projects.project3.description': 'Aplicación móvil en React Native para delivery de comida, con geolocalización y sistema de valoraciones.',
        'contact.title': 'Contacto',
        'contact.info': 'Información de contacto',
        'contact.whatsapp': 'WhatsApp:',
        'contact.email': 'Correo electrónico:',
        'contact.location': 'Ubicación:',
        'contact.location.value': 'Campinas, SP, Brasil',
        'contact.form.title': 'Enviar un mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Correo electrónico',
        'contact.form.message': 'Mensaje',
        'contact.form.submit': 'Enviar mensaje',
        'footer.rights': 'Todos los derechos reservados.',
        'activities.title': 'Actividades extracurriculares',
        'awards.title': 'Premios y reconocimientos',
        'education.title': 'Formación académica',
        'languages.title': 'Idiomas',
        'skills.soft.communication': 'Comunicación',
        'skills.soft.problem-solving': 'Resolución de problemas',
        'skills.soft.organization': 'Organización y planificación',
        'skills.soft.project-leadership': 'Liderazgo de proyectos',
        'skills.soft.strategy': 'Planificación estratégica',
        'skills.soft.design-thinking': 'Design Thinking',
        'skills.soft.project-methods': 'Metodologías de gestión de proyectos (Ágil, Scrum, en cascada, RUP, V, incremental, evolutivo)',
        'skills.soft.storytelling': 'Storytelling',
        'skills.soft.advanced-english': 'Inglés avanzado',
        'skills.soft.entrepreneurship': 'Emprendimiento',
        'skills.soft.finance': 'Finanzas',
        'skills.soft.branding': 'Branding y definición de marca',
        'skills.soft.canva': 'Diseño gráfico (Canva)',
        'skills.soft.video-editing': 'Edición de video',
        'skills.soft.digital-marketing': 'Marketing digital',
        'skills.soft.social-media': 'Redes sociales',
        'skills.soft.meta-ads': 'Meta Ads y TikTok Ads',
        'skills.soft.traffic': 'Tráfico pago y tráfico orgánico',
        'skills.soft.analytics-ecom': 'Análisis de métricas para comercio electrónico',
        'skills.soft.ecommerce': 'Comercio electrónico y dropshipping',
        'skills.soft.ms-office': 'Microsoft Office (Excel, Word, PowerPoint)',
        'projects.manual.title': 'Manual de actualización y mantenimiento de computadoras',
        'projects.manual.desc': 'Manual integral desarrollado en 2022 con instrucciones detalladas para actualización y mantenimiento de equipos, guías prácticas y consejos técnicos.',
        'projects.lixo.title': 'Mapeo de puntos de descarte de residuos en Campinas',
        'projects.lixo.desc': 'Proyecto de 2022 que mapeó puntos de descarte en Campinas, contribuyendo a la conciencia ambiental y a una mejor gestión de residuos.',
        'projects.maxwake.title': 'MaxWake - Sensor de seguridad automotriz',
        'projects.maxwake.desc': 'Proyecto finalista en la 11.ª Feria de Ciencia y Tecnología del Instituto 3M (2023). Sistema de seguridad que detecta somnolencia del conductor.',
        'projects.guia.title': 'Guía de inversiones para jóvenes',
        'projects.guia.desc': 'Guía desarrollada en 2023 para orientar a jóvenes en inversiones, educación financiera y planificación del futuro.',
        'projects.safevision.title': 'Safe Vision – Sistema de seguridad vial',
        'projects.safevision.desc': 'Proyecto premiado: 3.er lugar en la 14.ª Bragantec y en la 12.ª Feria de Ciencia y Tecnología del Instituto 3M (2024). Sistema de seguridad vial con visión por computadora.',
        'projects.fullcontrol.title': 'FullControl',
        'projects.fullcontrol.desc': 'Proyecto de 2025 centrado en control y automatización de sistemas, desarrollado durante la participación en eventos de innovación.',
        'projects.pdfchatbot.title': 'PDF Chatbot',
        'projects.pdfchatbot.desc': 'Herramienta que interpreta archivos PDF y permite consultas inteligentes al contenido con Groq LLM. Ofrece respuestas rápidas, contextuales y precisas en documentos extensos. Ideal para estudio, revisión técnica y análisis documental automatizado.',
        'projects.githubanalyzer.title': 'GitHub Analyzer',
        'projects.githubanalyzer.desc': 'Sistema que analiza cualquier repositorio público de GitHub con datos de la API oficial. Genera métricas claras sobre actividad, colaboradores, lenguajes y calidad del código. Ayuda a estudiantes, reclutadores y desarrolladores a evaluar proyectos con rapidez.',
        'projects.cardapioai.title': 'Cardápio AI',
        'projects.cardapioai.desc': 'Aplicación que genera menús personalizados según preferencias, objetivos y restricciones alimentarias. Utiliza Groq LLM para sugerencias de comidas coherentes y estructuradas. Facilita la planificación de comidas de forma práctica, rápida e inteligente.',
        'projects.codefix_ai.title': 'CodeFix AI',
        'projects.codefix_ai.desc': 'CodeFix AI es una herramienta basada en IA que analiza fragmentos de código (Python, JS, C y otros) para detectar errores, problemas de rendimiento y malas prácticas.',
        'projects.quantix_ai.title': 'Quantix AI',
        'projects.quantix_ai.desc': 'QUANTIX AI es una plataforma de inteligencia financiera basada en IA que analiza activos en varios mercados (B3, acciones estadounidenses y criptomonedas) en tiempo real, ofreciendo análisis técnico automatizado, puntuaciones de tendencia y recomendaciones de inversión.',
        'projects.virataxis.title': 'ViraTáxis — Landing page',
        'projects.virataxis.desc': 'Sitio para ViraTáxis en Campinas: landing con cotización de viajes mediante API de mapas, origen y destino, y envío de la solicitud a WhatsApp. Desarrollado en HTML, CSS y JavaScript.',
        'projects.tags.documentation': 'Documentación',
        'projects.tags.technical': 'Técnico',
        'projects.tags.hardware': 'Hardware',
        'projects.tags.mapping': 'Mapeo',
        'projects.tags.sustainability': 'Sostenibilidad',
        'projects.tags.community': 'Comunidad',
        'projects.tags.arduino': 'Arduino',
        'projects.tags.sensors': 'Sensores',
        'projects.tags.iot': 'IoT',
        'projects.tags.security': 'Seguridad',
        'projects.tags.financial-education': 'Educación financiera',
        'projects.tags.planning': 'Planificación',
        'projects.tags.youth': 'Jóvenes',
        'projects.tags.computer-vision': 'Visión por computadora',
        'projects.tags.python': 'Python',
        'projects.tags.opencv': 'OpenCV',
        'projects.tags.automation': 'Automatización',
        'projects.tags.control': 'Control',
        'projects.tags.systems': 'Sistemas',
        'projects.tags.llm': 'LLM',
        'projects.tags.ai': 'I.A.',
        'projects.tags.web': 'Web',
        'projects.tags.landing': 'Landing page',
        'projects.tags.maps-api': 'API de mapas',
        'projects.tags.whatsapp': 'WhatsApp',
        'projects.tags.github': 'GitHub',
        'projects.tags.api': 'API',
        'projects.tags.nodejs': 'Node.js',
        'projects.tags.finance': 'Finanzas',
        'projects.btn.view': 'Ver más',
        'activities.item.2023-3m': '2023 – 11.ª Feria de Ciencia y Tecnología Instituto 3M',
        'activities.item.2024-events': '2024 – Expo Ecomm Campinas 2024, Startup Day 2024, Campinas Innovation Week 2024, clase magistral con Caito Maia - Branding y marketing digital',
        'activities.item.2024-bragantec': '2024 – 14.ª Bragantec',
        'activities.item.2024-3m-senac': '2024 – 12.ª Feria de Ciencia y Tecnología Instituto 3M, 17.ª edición Empreenda Senac',
        'activities.item.2025-events': '2025 – Startup Day 2025, 12.º Motiv.se PUC-Campinas, Campinas Innovation Week',
        'education.software-bachelor': 'Grado en Ingeniería de Software',
        'education.puc': 'PUC Campinas',
        'education.highschool-tech': 'Bachillerato integrado con técnico en informática',
        'education.senac': 'Senac Campinas',
        'education.english-classes': 'Clases de inglés',
        'education.english-course': 'Curso de inglés',
        'languages.pt': 'Portugués',
        'languages.en': 'Inglés',
        'languages.es': 'Español',
        'languages.level.native': 'Nativo (C2)',
        'languages.level.advanced': 'Avanzado (C1)',
        'languages.level.basic': 'Básico (A2)',
        'cert.1.title': 'Análisis de métricas', 'cert.1.inst': 'Bequest Digital',
        'cert.2.title': 'Análisis de métricas para comercio electrónico: explorando conceptos', 'cert.2.inst': 'Alura',
        'cert.3.title': 'Análisis y clasificación de rostros: visión por computadora con OpenCV', 'cert.3.inst': 'Alura',
        'cert.4.title': 'Aprendizaje con IA: personalizando tu rutina con ChatGPT', 'cert.4.inst': 'Alura',
        'cert.5.title': 'Asistente en desarrollo de aplicaciones computacionales', 'cert.5.inst': 'Senac Campinas',
        'cert.6.title': 'Asistente en operación de redes de computadoras', 'cert.6.inst': 'Senac Campinas',
        'cert.7.title': 'Asistente en soporte y mantenimiento de computadoras', 'cert.7.inst': 'Senac Campinas',
        'cert.8.title': 'Clase magistral con Caito Maia - branding y marketing digital', 'cert.8.inst': 'Belas Artes y Chilli Beans',
        'cert.9.title': 'Branding: creando una marca fuerte', 'cert.9.inst': 'Alura',
        'cert.10.title': 'Facebook Ads básico', 'cert.10.inst': 'Bequest Digital',
        'cert.11.title': 'Canva: creando presentaciones comerciales', 'cert.11.inst': 'Alura',
        'cert.12.title': 'Canva: creando videos con motion graphics', 'cert.12.inst': 'Alura',
        'cert.13.title': 'Canva: diseños digitales para redes sociales', 'cert.13.inst': 'Alura',
        'cert.14.title': 'Canva: crea un e-book con apoyo de la inteligencia artificial', 'cert.14.inst': 'Alura',
        'cert.15.title': 'CashFlow', 'cert.15.inst': 'Bequest Digital',
        'cert.16.title': 'ChatGPT: la IA en conversaciones y sus aplicaciones', 'cert.16.inst': 'Alura',
        'cert.17.title': 'ChatGPT: optimizando la calidad de los resultados', 'cert.17.inst': 'Alura',
        'cert.18.title': 'Comunicación corporativa: usando PowerPoint de forma efectiva', 'cert.18.inst': 'Alura',
        'cert.19.title': 'Construyendo tiendas profesionales', 'cert.19.inst': 'Bequest Digital',
        'cert.20.title': 'Copywriting y persuasión: el arte de vender', 'cert.20.inst': 'Bequest Digital',
        'cert.21.title': 'Copywriting: textos persuasivos con inteligencia artificial', 'cert.21.inst': 'Alura',
        'cert.22.title': 'Creatividades que venden', 'cert.22.inst': 'Bequest Digital',
        'cert.23.title': 'Creación de contenido en video: estrategias y optimizaciones', 'cert.23.inst': 'Alura',
        'cert.24.title': 'Desarrolla tu primer chatbot', 'cert.24.inst': 'IBM',
        'cert.25.title': 'Diseño de presentaciones: trabajando con PowerPoint', 'cert.25.inst': 'Alura',
        'cert.26.title': 'Design Thinking', 'cert.26.inst': 'Sebrae',
        'cert.27.title': 'Estrategia de crecimiento para startups', 'cert.27.inst': 'Santander X',
        'cert.28.title': 'Excel: domina el editor de hojas de cálculo', 'cert.28.inst': 'Alura',
        'cert.29.title': 'Facebook Ads: campaña de video y mensajes', 'cert.29.inst': 'Alura',
        'cert.30.title': 'Facebook Ads: campañas de remarketing', 'cert.30.inst': 'Alura',
        'cert.31.title': 'Facebook Ads: campañas para comercio electrónico', 'cert.31.inst': 'Alura',
        'cert.32.title': 'Facebook Ads: creando campañas exitosas', 'cert.32.inst': 'Alura',
        'cert.33.title': 'Embudos de ventas que más generan resultados', 'cert.33.inst': 'Bequest Digital',
        'cert.34.title': 'Funciones con Excel: operaciones matemáticas y filtros', 'cert.34.inst': 'Alura',
        'cert.35.title': 'Gestión del conocimiento: optimiza la búsqueda y organización de información con IA', 'cert.35.inst': 'Alura',
        'cert.36.title': 'Gestión financiera', 'cert.36.inst': 'Sebrae',
        'cert.37.title': 'Gestión financiera: administra tus finanzas en la práctica', 'cert.37.inst': 'Alura',
        'cert.38.title': 'Inteligencia artificial: campañas de marketing digital', 'cert.38.inst': 'Alura',
        'cert.39.title': 'Inteligencia artificial: gestión de redes sociales', 'cert.39.inst': 'Alura',
        'cert.40.title': 'Inteligencia artificial: personaliza estrategias de ventas con ChatGPT', 'cert.40.inst': 'Alura',
        'cert.41.title': 'Inteligencia artificial generativa: Midjourney y ChatGPT', 'cert.41.inst': 'Alura',
        'cert.42.title': 'Marketing digital: explorando conceptos', 'cert.42.inst': 'Alura',
        'cert.43.title': 'Marketing digital para tu empresa: equipo comercial', 'cert.43.inst': 'Alura',
        'cert.44.title': 'Redes sociales: estrategias para engajar al público', 'cert.44.inst': 'Alura',
        'cert.45.title': 'Cambios y decisiones - caminos y posibilidades para decidir', 'cert.45.inst': 'Sebrae',
        'cert.46.title': '¿Qué es el email marketing?', 'cert.46.inst': 'Bequest Digital',
        'cert.47.title': 'Oficina Se Liga en el emprendimiento', 'cert.47.inst': 'PUC-Campinas',
        'cert.48.title': 'Planificación estratégica', 'cert.48.inst': 'G4 Educação',
        'cert.49.title': 'Plan de marketing digital: cómo crear y coordinar estrategias', 'cert.49.inst': 'Alura',
        'cert.50.title': 'Productos, minería y abastecimiento', 'cert.50.inst': 'Bequest Digital',
        'cert.51.title': 'Psicología financiera: maximizando el potencial financiero', 'cert.51.inst': 'Alura',
        'cert.52.title': 'Python: empezando con el lenguaje', 'cert.52.inst': 'Alura',
        'cert.53.title': 'Página de venta y oferta', 'cert.53.inst': 'Bequest Digital',
        'cert.54.title': 'Recursos visuales con Excel: explorando gráficos y formatos', 'cert.54.inst': 'Alura',
        'cert.55.title': 'Seminario La universidad del futuro y el futuro de la universidad', 'cert.55.inst': 'PUC-Campinas',
        'cert.56.title': 'Social commerce: impulsa tus ventas en redes sociales', 'cert.56.inst': 'Alura',
        'cert.57.title': 'Storytelling como herramienta de negocios', 'cert.57.inst': 'Sebrae',
        'cert.58.title': 'Tecnología de la información', 'cert.58.inst': 'iEstudar',
        'cert.59.title': 'Pruebas en Facebook Ads', 'cert.59.inst': 'Bequest Digital',
        'cert.60.title': 'TikTok Ads: funcionalidades y configuración para crear campañas', 'cert.60.inst': 'Alura',
        'cert.61.title': 'Tráfico de pago: estrategias y aplicaciones', 'cert.61.inst': 'Alura',
        'cert.62.title': 'Usar IA generativa para desarrollo de software', 'cert.62.inst': 'IBM',
        'cert.63.title': 'Visión por computadora: análisis facial', 'cert.63.inst': 'Alura',
        'cert.64.title': 'Visión por computadora con Arduino', 'cert.64.inst': 'Hotmart - Dev Ideias',
        'cert.65.title': 'Taller Se Liga en la argumentación', 'cert.65.inst': 'PUC-Campinas',
        'cert.66.title': 'Taller de modelado de negocios', 'cert.66.inst': 'Inova Unicamp',
        'cert.67.title': 'Taller de descubrimiento del cliente ideal y negocios de impacto socioambiental', 'cert.67.inst': 'Inova Unicamp',
        'cert.68.title': 'Programa de aceleración - CRIA I', 'cert.68.inst': 'PUC Campinas',
        'awards.1.title': 'Proyecto finalista - MaxWake',
        'awards.1.event': '11.ª Feria de Ciencia y Tecnología - Instituto 3M',
        'awards.2.title': '3.er lugar - Safe Vision',
        'awards.2.event': 'Categoría: Informática - 14.ª Bragantec (Instituto Federal de São Paulo)',
        'awards.3.title': '3.er lugar - Safe Vision',
        'awards.3.event': 'Categoría: Ingeniería - 12.ª Feria de Ciencia y Tecnología - Instituto 3M',
        'awards.4.title': 'Proyecto semifinalista - Safe Vision',
        'awards.4.event': '17.ª edición Empreenda Senac',
        'awards.5.title': '2.º lugar - Safe Vision',
        'awards.5.event': '12.º Motiv.se PUC-Campinas - Muestra de emprendimiento e innovación'
    }
};

const LANG_FLAG_SRC = { pt: 'img/brazil.png', en: 'img/usa.png', es: 'img/spain.png' };
const HTML_LANG = { pt: 'pt-BR', en: 'en-US', es: 'es-419' };

// Estado atual do idioma
let currentLanguage = 'en';

function setLangMenuOpen(open) {
    const switcher = document.getElementById('lang-switcher');
    const trigger = document.getElementById('lang-switcher-trigger');
    const menu = document.getElementById('lang-switcher-menu');
    if (!switcher || !trigger || !menu) return;
    switcher.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.hidden = !open;
}

function syncLanguageSwitcher(language) {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;
    const flagEl = switcher.querySelector('.lang-switcher-flag');
    if (flagEl && flagEl.tagName === 'IMG') {
        flagEl.src = LANG_FLAG_SRC[language] || LANG_FLAG_SRC.en;
    }
    switcher.querySelectorAll('.lang-option').forEach(opt => {
        const selected = opt.getAttribute('data-lang') === language;
        opt.classList.toggle('is-selected', selected);
        opt.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
}

// Função para traduzir elementos
function translatePage(language) {
    if (!translations[language]) {
        language = 'en';
    }
    currentLanguage = language;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    document.querySelectorAll('[data-translate-aria]').forEach(element => {
        const key = element.getAttribute('data-translate-aria');
        if (translations[language] && translations[language][key]) {
            element.setAttribute('aria-label', translations[language][key]);
        }
    });
    
    document.documentElement.lang = HTML_LANG[language] || 'en-US';

    syncLanguageSwitcher(language);

    // Reordenar dinamicamente os certificados conforme o idioma
    sortCertifications(language);
    applyCertificationFilter(currentCertFilter);
}

function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal-section');
    if (!targets.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach(el => el.classList.add('reveal-visible'));
        return;
    }

    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('reveal-visible');
                io.unobserve(entry.target);
            });
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.07 }
    );
    targets.forEach(el => io.observe(el));
}

/** Destaca o link da seção visível na navbar (scroll spy). */
function updateNavFromScroll() {
    const links = document.querySelectorAll('.nav-menu .nav-link[href^="#"]');
    const sections = [...document.querySelectorAll('main section[id]')];
    if (!sections.length || !links.length) return;

    const navOffset = 72;
    const marker = navOffset + window.innerHeight * 0.14;
    let currentId = sections[0].id;
    const docEl = document.documentElement;
    const atBottom = window.innerHeight + window.scrollY >= docEl.scrollHeight - 96;

    if (atBottom) {
        currentId = sections[sections.length - 1].id;
    } else {
        for (const sec of sections) {
            const r = sec.getBoundingClientRect();
            if (r.top <= marker && r.bottom > navOffset + 32) currentId = sec.id;
        }
    }

    links.forEach(link => {
        const active = link.getAttribute('href') === '#' + currentId;
        link.classList.toggle('nav-link--active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('lang-switcher');
    const langTrigger = document.getElementById('lang-switcher-trigger');
    const langMenu = document.getElementById('lang-switcher-menu');

    if (langTrigger && langMenu && langSwitcher) {
        langTrigger.addEventListener('click', function() {
            const willOpen = langMenu.hidden;
            setLangMenuOpen(willOpen);
        });

        langSwitcher.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                translatePage(lang);
                setLangMenuOpen(false);
            });
        });

        document.addEventListener('click', function(e) {
            if (!langSwitcher.contains(e.target)) {
                setLangMenuOpen(false);
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                setLangMenuOpen(false);
            }
        });
    }

    // Menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll para links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar + scroll spy (uma única leitura por frame de scroll)
    const navbar = document.querySelector('.navbar');
    window.addEventListener(
        'scroll',
        function() {
            if (navbar) {
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            }
            updateNavFromScroll();
        },
        { passive: true }
    );
    window.addEventListener('resize', updateNavFromScroll, { passive: true });
    updateNavFromScroll();

    initScrollReveal();

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent =
                currentLanguage === 'pt' ? 'Enviando...' :
                currentLanguage === 'es' ? 'Enviando...' :
                'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent =
                    currentLanguage === 'pt' ? 'Mensagem enviada!' :
                    currentLanguage === 'es' ? '¡Mensaje enviado!' :
                    'Message sent!';
                submitBtn.style.background = '#27ae60';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Efeito parallax no navbar
    // Keep navbar styling consistent and minimal (no light parallax switch)

    document.querySelectorAll('.cert-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const f = this.getAttribute('data-cert-filter');
            if (f) applyCertificationFilter(f);
        });
    });

    // Inicializar tradução em inglês
    translatePage('en');
});

// Função para upload de imagem nos projetos
function handleImageUpload(input, imgId) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById(imgId) || input.parentElement.parentElement.querySelector('.project-img');
            if (img) {
                img.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}

// Função para adicionar efeitos de hover nos cards
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos cards de certificação
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de hover nos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito de digitação no nome (desativado com prefers-reduced-motion)
    const profileName = document.querySelector('.profile-name');
    if (profileName && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const text = profileName.textContent;
        profileName.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                profileName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 55);
            }
        }

        setTimeout(typeWriter, 680);
    }
});

// Função para adicionar efeito de partículas no fundo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(52, 152, 219, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Adicionar CSS para animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Função de loading removida para evitar tela branca

/** IDs dos cursos classificados como área de tecnologia (TI, dev, redes, Python, visão computacional, IA aplicada a software). */
const CERT_TECH_IDS = new Set([3, 5, 6, 7, 24, 52, 58, 62, 63, 64]);

let currentCertFilter = 'all';

function getCertIdFromCard(card) {
    const el = card.querySelector('.cert-content h3[data-translate]');
    if (!el) return null;
    const key = el.getAttribute('data-translate');
    const m = key && key.match(/^cert\.(\d+)\.title$/);
    return m ? parseInt(m[1], 10) : null;
}

function applyCertificationFilter(filter) {
    if (filter !== 'all' && filter !== 'tech' && filter !== 'other') return;
    currentCertFilter = filter;
    const grid = document.querySelector('#certifications .certifications-grid');
    if (!grid) return;
    grid.querySelectorAll('.certification-card').forEach(card => {
        const id = getCertIdFromCard(card);
        const isTech = id !== null && CERT_TECH_IDS.has(id);
        const show =
            filter === 'all' ||
            (filter === 'tech' && isTech) ||
            (filter === 'other' && id !== null && !isTech);
        card.classList.toggle('certification-card--hidden', !show);
        card.hidden = !show;
    });

    document.querySelectorAll('.cert-filter-btn').forEach(btn => {
        const active = btn.getAttribute('data-cert-filter') === filter;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
}

// Ordenação dinâmica dos certificados por idioma
function sortCertifications(language) {
    const grid = document.querySelector('#certifications .certifications-grid');
    if (!grid) return;
    const locale = language === 'pt' ? 'pt-BR' : language === 'es' ? 'es-419' : 'en-US';
    const cards = Array.from(grid.querySelectorAll('.certification-card'));

    const entries = cards.map(card => {
        const titleEl = card.querySelector('.cert-content h3');
        if (!titleEl) return { card, title: '' };
        const key = titleEl.getAttribute('data-translate');
        const title = (key && translations[language] && translations[language][key])
            ? translations[language][key]
            : titleEl.textContent || '';
        return { card, title };
    });

    entries.sort((a, b) => a.title.localeCompare(b.title, locale, { sensitivity: 'base' }));

    // Reapendar na nova ordem
    entries.forEach(({ card }) => grid.appendChild(card));
}
