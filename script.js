// Sistema de Tradução PT/EN
const translations = {
    pt: {
        'nav.logo': 'Pedro Soler',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.formation': 'Formação',
        'nav.certifications': 'Certificações',
        'nav.experience': 'Experiências',
        'nav.projects': 'Projetos',
        'nav.award': 'Prêmios',
        'nav.contact': 'Contato',
        'about.name': 'Pedro Henrique Contardi Soler',
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
        'experience.job1.title': 'Assistente de T.I',
        'experience.job1.company': 'Zara Multimarcas',
        'experience.job1.description': 'Empresa de veículos da família, onde atuo na área de tecnologia, responsável pelo desenvolvimento e gestão de sites, suporte técnico e manutenção das redes sociais e sistemas internos.',
        'experience.job2.title': 'Fundador',
        'experience.job2.company': 'Loja Escolha Correta',
        'experience.job2.description': 'Loja de dropshipping criada e administrada por mim, com foco em marketing digital, automação de vendas e otimização de campanhas online.',
        'experience.job3.title': 'Fundador',
        'experience.job3.company': 'Saint Capri',
        'experience.job3.description': 'Loja nichada premium de dropshipping desenvolvida por mim, com foco em design, identidade visual e estratégias de conversão e vendas.',
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
        'activities.title': 'Atividades Extracurriculares',
        'awards.title': 'Prêmios e Reconhecimentos',
        'education.title': 'Formação Acadêmica',
        'languages.title': 'Idiomas',
        // Soft skills
        'skills.soft': 'Outras Habilidades',
        'skills.soft.analytics-ecom': 'Análise de métricas para E-commerce',
        'skills.soft.arduino': 'Arduino',
        'skills.soft.branding': 'Branding e Definição de marca',
        'skills.soft.communication': 'Comunicação',
        'skills.soft.canva': 'Design Gráfico (Canva)',
        'skills.soft.design-thinking': 'Design Thinking',
        'skills.soft.software-dev': 'Desenvolvimento de Software',
        'skills.soft.ecommerce': 'E-commerce e Dropshipping',
        'skills.soft.video-editing': 'Edição de Vídeos',
        'skills.soft.entrepreneurship': 'Empreendedorismo',
        'skills.soft.finance': 'Finanças',
        'skills.soft.advanced-english': 'Inglês Avançado',
        'skills.soft.project-leadership': 'Liderança de Projetos',
        'skills.soft.digital-marketing': 'Marketing Digital',
        'skills.soft.meta-ads': 'Meta ADS e TikTok ADS',
        'skills.soft.ms-office': 'Microsoft Office',
        'skills.soft.organization': 'Organização e Planejamento',
        'skills.soft.strategy': 'Planejamento Estratégico',
        'skills.soft.programming': 'Programação (CSS, C, Firebase, HTML, MySQL, Python, JavaScript)',
        'skills.soft.social-media': 'Social Media',
        'skills.soft.problem-solving': 'Solução de Problemas',
        'skills.soft.storytelling': 'Storytelling',
        'skills.soft.traffic': 'Tráfego Pago e Tráfego Orgânico',
        'skills.soft.computer-vision': 'Visão Computacional',
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
        'projects.cardapioai.desc': 'Aplicação que cria cardápios personalizados com base em preferências, metas e restrições alimentares. Utiliza Groq LLM para gerar sugestões coerentes e estruturadas de refeições.Facilita o planejamento alimentar de forma prática, rápida e inteligente.',
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
        // Certificações (PT)
        'cert.1.title': 'Análise de métricas', 'cert.1.inst': 'Bequest Digital',
        'cert.2.title': 'Análise de métricas para e-commerce', 'cert.2.inst': 'Alura',
        'cert.3.title': 'Análise e Classificação de Faces', 'cert.3.inst': 'Alura',
        'cert.4.title': 'Aprendizagem com IA: ChatGPT', 'cert.4.inst': 'Alura',
        'cert.5.title': 'Assistente de Desenvolvimento de Aplicativos', 'cert.5.inst': 'Senac Campinas',
        'cert.6.title': 'Assistente de Operação de Redes', 'cert.6.inst': 'Senac Campinas',
        'cert.7.title': 'Assistente de Suporte e Manutenção', 'cert.7.inst': 'Senac Campinas',
        'cert.8.title': 'Aula Magna com Caito Maia - Branding', 'cert.8.inst': 'Belas Artes e Chilli Beans',
        'cert.9.title': 'Branding: criando uma marca forte', 'cert.9.inst': 'Alura',
        'cert.10.title': 'Básico Facebook ADS', 'cert.10.inst': 'Bequest Digital',
        'cert.11.title': 'Canva: criando apresentações comerciais', 'cert.11.inst': 'Alura',
        'cert.12.title': 'Canva: criando vídeos com motion graphics', 'cert.12.inst': 'Alura',
        'cert.13.title': 'Canva: designs digitais para redes sociais', 'cert.13.inst': 'Alura',
        'cert.14.title': 'Canva: crie um e-book com IA', 'cert.14.inst': 'Alura',
        'cert.15.title': 'CashFlow', 'cert.15.inst': 'Bequest Digital',
        'cert.16.title': 'ChatGPT: desvendando a IA', 'cert.16.inst': 'Alura',
        'cert.17.title': 'ChatGPT: otimizando resultados', 'cert.17.inst': 'Alura',
        'cert.18.title': 'Comunicação corporativa: PowerPoint', 'cert.18.inst': 'Alura',
        'cert.19.title': 'Construindo Lojas Profissionais', 'cert.19.inst': 'Bequest Digital',
        'cert.20.title': 'Copywriting e Persuasão', 'cert.20.inst': 'Bequest Digital',
        'cert.21.title': 'Copywriting: textos persuasivos com IA', 'cert.21.inst': 'Alura',
        'cert.22.title': 'Criativos que Vendem', 'cert.22.inst': 'Bequest Digital',
        'cert.23.title': 'Criação de conteúdo em vídeo', 'cert.23.inst': 'Alura',
        'cert.24.title': 'Desenvolva seu primeiro robô de bate-papo', 'cert.24.inst': 'IBM',
        'cert.25.title': 'Design de apresentações: PowerPoint', 'cert.25.inst': 'Alura',
        'cert.26.title': 'Design Thinking', 'cert.26.inst': 'Sebrae',
        'cert.27.title': 'Estratégia de crescimento para startups', 'cert.27.inst': 'SantaderX',
        'cert.28.title': 'Excel: domine o editor de planilhas', 'cert.28.inst': 'Alura',
        'cert.29.title': 'Facebook Ads: campanha de vídeo', 'cert.29.inst': 'Alura',
        'cert.30.title': 'Facebook Ads: campanhas de remarketing', 'cert.30.inst': 'Alura',
        'cert.31.title': 'Facebook Ads: campanhas para e-commerce', 'cert.31.inst': 'Alura',
        'cert.32.title': 'Facebook Ads: criando campanhas de sucesso', 'cert.32.inst': 'Alura',
        'cert.33.title': 'Funil de Vendas que mais Geram Resultados', 'cert.33.inst': 'Bequest Digital',
        'cert.34.title': 'Funções com Excel: operações matemáticas', 'cert.34.inst': 'Alura',
        'cert.35.title': 'Gestão do Conhecimento com IA', 'cert.35.inst': 'Alura',
        'cert.36.title': 'Gestão financeira', 'cert.36.inst': 'Sebrae',
        'cert.37.title': 'Gestão financeira: administre suas finanças', 'cert.37.inst': 'Alura',
        'cert.38.title': 'Inteligência Artificial: Marketing Digital', 'cert.38.inst': 'Alura',
        'cert.39.title': 'Inteligência Artificial: gestão de mídias sociais', 'cert.39.inst': 'Alura',
        'cert.40.title': 'Inteligência Artificial: estratégias de vendas', 'cert.40.inst': 'Alura',
        'cert.41.title': 'Inteligência artificial Generativa', 'cert.41.inst': 'Alura',
        'cert.42.title': 'Marketing Digital: explorando os conceitos', 'cert.42.inst': 'Alura',
        'cert.43.title': 'Marketing digital para sua empresa', 'cert.43.inst': 'Alura',
        'cert.44.title': 'Mídias Sociais: estratégias para engajar', 'cert.44.inst': 'Alura',
        'cert.45.title': 'Mudanças e Escolhas', 'cert.45.inst': 'Sebrae',
        'cert.46.title': 'O que é E-mail Marketing?', 'cert.46.inst': 'Bequest Digital',
        'cert.47.title': 'Oficina Se Liga no Empreendedorismo', 'cert.47.inst': 'PUC-Campinas',
        'cert.48.title': 'Planejamento Estratégico', 'cert.48.inst': 'G4 Educação',
        'cert.49.title': 'Plano de Marketing Digital', 'cert.49.inst': 'Alura',
        'cert.50.title': 'Produtos, Mineração e Fornecimento', 'cert.50.inst': 'Bequest Digital',
        'cert.51.title': 'Psicologia financeira', 'cert.51.inst': 'Alura',
        'cert.52.title': 'Python: começando com a linguagem', 'cert.52.inst': 'Alura',
        'cert.53.title': 'Página de Venda & Oferta', 'cert.53.inst': 'Bequest Digital',
        'cert.54.title': 'Recursos Visuais com Excel', 'cert.54.inst': 'Alura',
        'cert.55.title': 'Seminário A Universidade do Futuro', 'cert.55.inst': 'PUC-Campinas',
        'cert.56.title': 'Social Commerce', 'cert.56.inst': 'Alura',
        'cert.57.title': 'Storytelling Como Ferramenta de Negócios', 'cert.57.inst': 'Sebrae',
        'cert.58.title': 'Tecnologia da Informação', 'cert.58.inst': 'iEstudar',
        'cert.59.title': 'Testes Facebook ADS', 'cert.59.inst': 'Bequest Digital',
        'cert.60.title': 'TikTok Ads: funcionalidades e configurações', 'cert.60.inst': 'Alura',
        'cert.61.title': 'Tráfego Pago: Estratégias e Aplicações', 'cert.61.inst': 'Alura',
        'cert.62.title': 'Usar IA generativa para desenvolvimento', 'cert.62.inst': 'IBM',
        'cert.63.title': 'Visão Computacional: análise facial', 'cert.63.inst': 'Alura',
        'cert.64.title': 'Visão Computacional com Arduino', 'cert.64.inst': 'Hotmart - Dev Ideias',
        'cert.65.title': 'Workshop Se Liga na Argumentação', 'cert.65.inst': 'PUC-Campinas',
        'cert.66.title': 'Workshop de Modelagem de Negócios', 'cert.66.inst': 'Inova Unicamp',
        'cert.67.title': 'Workshop de Descoberta do Cliente Ideal', 'cert.67.inst': 'Inova Unicamp',
        'cert.68.title': 'Programa de Aceleração - Cria I', 'cert.68.inst': 'PUC Campinas',

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
        'nav.about': 'About Me',
        'nav.skills': 'Skills',
        'nav.formation':'Education',
        'nav.certifications': 'Certifications',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.award': 'Awards',
        'nav.contact': 'Contact',
        'about.name': 'Pedro Henrique Contardi Soler',
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
        'about.text3':'I am open to new opportunities in the technology market, where I can apply my knowledge, develop new skills, and contribute with innovative solutions to real-world challenges. I am eager to learn, collaborate with teams, and grow professionally in a dynamic and ever-evolving environment.',
        'skills.title': 'Skills',
        'skills.technical': 'Technical Skills',
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
        'experience.job1.title': 'IT Assistant',
        'experience.job1.company': 'Zara Multimarcas',
        'experience.job1.description': 'Family vehicle company, where I work in the technology area, responsible for developing and managing websites, technical support and maintaining social media and internal systems.',
        'experience.job2.title': 'Founder',
        'experience.job2.company': 'Loja Escolha Correta',
        'experience.job2.description': 'Dropshipping store created and managed by me, focused on digital marketing, sales automation and online campaign optimization.',
        'experience.job3.title': 'Founder',
        'experience.job3.company': 'Saint Capri',
        'experience.job3.description': 'Premium niche dropshipping store developed by me, focused on design, visual identity and conversion and sales strategies.',
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
        'activities.title': 'Extracurricular Activities',
        'awards.title': 'Awards & Recognitions',
        'education.title': 'Education',
        'languages.title': 'Languages',
        // Soft skills
        'skills.soft': 'Soft Skills',
        'skills.soft.analytics-ecom': 'E-commerce Metrics Analysis',
        'skills.soft.arduino': 'Arduino',
        'skills.soft.branding': 'Branding & Brand Definition',
        'skills.soft.communication': 'Communication',
        'skills.soft.canva': 'Graphic Design (Canva)',
        'skills.soft.design-thinking': 'Design Thinking',
        'skills.soft.software-dev': 'Software Development',
        'skills.soft.ecommerce': 'E-commerce & Dropshipping',
        'skills.soft.video-editing': 'Video Editing',
        'skills.soft.entrepreneurship': 'Entrepreneurship',
        'skills.soft.finance': 'Finance',
        'skills.soft.advanced-english': 'Advanced English',
        'skills.soft.project-leadership': 'Project Leadership',
        'skills.soft.digital-marketing': 'Digital Marketing',
        'skills.soft.meta-ads': 'Meta Ads & TikTok Ads',
        'skills.soft.ms-office': 'Microsoft Office',
        'skills.soft.organization': 'Organization & Planning',
        'skills.soft.strategy': 'Strategic Planning',
        'skills.soft.programming': 'Programming (CSS, C, Firebase, HTML, MySQL, Python, JavaScript)',
        'skills.soft.social-media': 'Social Media',
        'skills.soft.problem-solving': 'Problem Solving',
        'skills.soft.storytelling': 'Storytelling',
        'skills.soft.traffic': 'Paid & Organic Traffic',
        'skills.soft.computer-vision': 'Computer Vision',
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
        'cert.1.title': 'Metrics Analysis', 'cert.1.inst': 'Bequest Digital',
        'cert.2.title': 'E-commerce Metrics Analysis', 'cert.2.inst': 'Alura',
        'cert.3.title': 'Face Analysis and Classification', 'cert.3.inst': 'Alura',
        'cert.4.title': 'Learning with AI: ChatGPT', 'cert.4.inst': 'Alura',
        'cert.5.title': 'Application Development Assistant', 'cert.5.inst': 'Senac Campinas',
        'cert.6.title': 'Network Operations Assistant', 'cert.6.inst': 'Senac Campinas',
        'cert.7.title': 'Support and Maintenance Assistant', 'cert.7.inst': 'Senac Campinas',
        'cert.8.title': 'Guest Lecture with Caito Maia - Branding', 'cert.8.inst': 'Belas Artes & Chilli Beans',
        'cert.9.title': 'Branding: Creating a Strong Brand', 'cert.9.inst': 'Alura',
        'cert.10.title': 'Facebook Ads Basics', 'cert.10.inst': 'Bequest Digital',
        'cert.11.title': 'Canva: Creating Business Presentations', 'cert.11.inst': 'Alura',
        'cert.12.title': 'Canva: Creating Videos with Motion Graphics', 'cert.12.inst': 'Alura',
        'cert.13.title': 'Canva: Digital Designs for Social Media', 'cert.13.inst': 'Alura',
        'cert.14.title': 'Canva: Create an E-book with AI', 'cert.14.inst': 'Alura',
        'cert.15.title': 'CashFlow', 'cert.15.inst': 'Bequest Digital',
        'cert.16.title': 'ChatGPT: Unveiling AI', 'cert.16.inst': 'Alura',
        'cert.17.title': 'ChatGPT: Optimizing Results', 'cert.17.inst': 'Alura',
        'cert.18.title': 'Corporate Communication: PowerPoint', 'cert.18.inst': 'Alura',
        'cert.19.title': 'Building Professional Stores', 'cert.19.inst': 'Bequest Digital',
        'cert.20.title': 'Copywriting and Persuasion', 'cert.20.inst': 'Bequest Digital',
        'cert.21.title': 'Copywriting: Persuasive Texts with AI', 'cert.21.inst': 'Alura',
        'cert.22.title': 'High-Converting Creatives', 'cert.22.inst': 'Bequest Digital',
        'cert.23.title': 'Video Content Creation', 'cert.23.inst': 'Alura',
        'cert.24.title': 'Build Your First Chatbot', 'cert.24.inst': 'IBM',
        'cert.25.title': 'Presentation Design: PowerPoint', 'cert.25.inst': 'Alura',
        'cert.26.title': 'Design Thinking', 'cert.26.inst': 'Sebrae',
        'cert.27.title': 'Growth Strategy for Startups', 'cert.27.inst': 'SantaderX',
        'cert.28.title': 'Excel: Master the Spreadsheet Editor', 'cert.28.inst': 'Alura',
        'cert.29.title': 'Facebook Ads: Video Campaign', 'cert.29.inst': 'Alura',
        'cert.30.title': 'Facebook Ads: Remarketing Campaigns', 'cert.30.inst': 'Alura',
        'cert.31.title': 'Facebook Ads: Campaigns for E-commerce', 'cert.31.inst': 'Alura',
        'cert.32.title': 'Facebook Ads: Creating Successful Campaigns', 'cert.32.inst': 'Alura',
        'cert.33.title': 'Sales Funnels that Drive Results', 'cert.33.inst': 'Bequest Digital',
        'cert.34.title': 'Excel Functions: Math Operations', 'cert.34.inst': 'Alura',
        'cert.35.title': 'Knowledge Management with AI', 'cert.35.inst': 'Alura',
        'cert.36.title': 'Financial Management', 'cert.36.inst': 'Sebrae',
        'cert.37.title': 'Financial Management: Manage Your Finances', 'cert.37.inst': 'Alura',
        'cert.38.title': 'Artificial Intelligence: Digital Marketing', 'cert.38.inst': 'Alura',
        'cert.39.title': 'Artificial Intelligence: Social Media Management', 'cert.39.inst': 'Alura',
        'cert.40.title': 'Artificial Intelligence: Sales Strategies', 'cert.40.inst': 'Alura',
        'cert.41.title': 'Generative Artificial Intelligence', 'cert.41.inst': 'Alura',
        'cert.42.title': 'Digital Marketing: Exploring Concepts', 'cert.42.inst': 'Alura',
        'cert.43.title': 'Digital Marketing for Your Company', 'cert.43.inst': 'Alura',
        'cert.44.title': 'Social Media: Engagement Strategies', 'cert.44.inst': 'Alura',
        'cert.45.title': 'Changes and Choices', 'cert.45.inst': 'Sebrae',
        'cert.46.title': 'What is Email Marketing?', 'cert.46.inst': 'Bequest Digital',
        'cert.47.title': 'Entrepreneurship Workshop', 'cert.47.inst': 'PUC-Campinas',
        'cert.48.title': 'Strategic Planning', 'cert.48.inst': 'G4 Educação',
        'cert.49.title': 'Digital Marketing Plan', 'cert.49.inst': 'Alura',
        'cert.50.title': 'Products, Sourcing and Supply', 'cert.50.inst': 'Bequest Digital',
        'cert.51.title': 'Financial Psychology', 'cert.51.inst': 'Alura',
        'cert.52.title': 'Python: Getting Started with the Language', 'cert.52.inst': 'Alura',
        'cert.53.title': 'Sales Page & Offer', 'cert.53.inst': 'Bequest Digital',
        'cert.54.title': 'Excel Visual Resources', 'cert.54.inst': 'Alura',
        'cert.55.title': 'Seminar: The University of the Future', 'cert.55.inst': 'PUC-Campinas',
        'cert.56.title': 'Social Commerce', 'cert.56.inst': 'Alura',
        'cert.57.title': 'Storytelling as a Business Tool', 'cert.57.inst': 'Sebrae',
        'cert.58.title': 'Information Technology', 'cert.58.inst': 'iEstudar',
        'cert.59.title': 'Facebook Ads Testing', 'cert.59.inst': 'Bequest Digital',
        'cert.60.title': 'TikTok Ads: Features and Settings', 'cert.60.inst': 'Alura',
        'cert.61.title': 'Paid Traffic: Strategies and Applications', 'cert.61.inst': 'Alura',
        'cert.62.title': 'Using Generative AI for Development', 'cert.62.inst': 'IBM',
        'cert.63.title': 'Computer Vision: Facial Analysis', 'cert.63.inst': 'Alura',
        'cert.64.title': 'Computer Vision with Arduino', 'cert.64.inst': 'Hotmart - Dev Ideias',
        'cert.65.title': 'Argumentation Workshop', 'cert.65.inst': 'PUC-Campinas',
        'cert.66.title': 'Business Modeling Workshop', 'cert.66.inst': 'Inova Unicamp',
        'cert.67.title': 'Ideal Customer Discovery Workshop', 'cert.67.inst': 'Inova Unicamp',
        'cert.68.title': 'Acceleration Program – Cria I', 'cert.68.inst': 'PUC Campinas',

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
    }
};

// Estado atual do idioma
let currentLanguage = 'en';

// Função para traduzir elementos
function translatePage(language) {
    currentLanguage = language;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
    
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${language}"]`).classList.add('active');

    // Reordenar dinamicamente os certificados conforme o idioma
    sortCertifications(language);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Configurar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });

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

    // Efeito de scroll no navbar
    window.addEventListener('scroll', function() {
        // Navbar
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Skills
        const skillsSection = document.querySelector('.skills-content');
        const skillsPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // ajusta quando anima

        if (skillsPosition < screenPosition) {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }
    });

    // Animações de scroll - simplificado para garantir visibilidade
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animar barras de progresso das habilidades
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Garantir que todas as seções sejam visíveis
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('visible');
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });

    // Garantir que a seção de certificações seja visível
    const certificationsSection = document.getElementById('certifications');
    if (certificationsSection) {
        certificationsSection.style.display = 'block';
        certificationsSection.style.visibility = 'visible';
        certificationsSection.style.opacity = '1';
        certificationsSection.style.transform = 'translateY(0)';
    }

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = currentLanguage === 'pt' ? 'Enviando...' : 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = currentLanguage === 'pt' ? 'Mensagem Enviada!' : 'Message Sent!';
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

    // Inicializar tradução em inglês
    translatePage('en');
});

// Função para animar barras de progresso
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        bar.style.background = 'linear-gradient(90deg, #4a9eff, #0066cc)';
        bar.style.transition = 'width 1.5s ease';
    });
}

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

    // Efeito de digitação no nome
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        const text = profileName.textContent;
        profileName.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                profileName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Iniciar efeito de digitação após um delay
        setTimeout(typeWriter, 1000);
    }
});

// Função para adicionar animação de contador nas habilidades
function animateCounters() {
    const counters = document.querySelectorAll('.skill-percentage');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '%';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '%';
            }
        };
        
        updateCounter();
    });
}

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

// Inicializar efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    // Particles disabled for a cleaner, more minimal layout
    
    // Animar contadores quando a seção de habilidades for visível
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
});

// Função de loading removida para evitar tela branca

// Ordenação dinâmica dos certificados por idioma
function sortCertifications(language) {
    const grid = document.querySelector('#certifications .certifications-grid');
    if (!grid) return;
    const locale = language === 'pt' ? 'pt-BR' : 'en-US';
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
