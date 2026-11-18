

const trabalhos = [
    {
        id: "campus-campinas",
        titulo: "Campus Campinas: a expansão dos data centers em Barão Geraldo",
        tema: "O empreendimento em Campinas",
        modo: "grupo",
        autores: ["Lorenzo, Gabriel, Wilmar, Téo, Noah"],
        grupo: "Pesquisa 1",
        data: "2026-11-15",
        resumo: "Conheça o projeto de data center anunciado para a região de Barão Geraldo e suas dimensões, objetivos e possíveis consequências para Campinas.",
        texto: [
            "Os data centers são instalações que concentram servidores, equipamentos de armazenamento e sistemas de comunicação responsáveis por processar e guardar grandes quantidades de dados. Eles são fundamentais para serviços de internet, computação em nuvem e inteligência artificial. Apesar de sua aparência de grandes edifícios industriais, sua função está diretamente ligada à infraestrutura digital utilizada diariamente pela sociedade.",
            "Em 20 de agosto de 2026, a Prefeitura de Campinas anunciou o projeto Campus Campinas, da empresa Terranova, na região da Fazenda Pau D'Alho, em Barão Geraldo, dentro do Polo de Inovação para o Desenvolvimento Sustentável (PIDS). Segundo a Prefeitura, o empreendimento ocupará aproximadamente 944 mil metros quadrados, dos quais cerca de 115 mil metros quadrados serão destinados à área construída. O investimento inicial anunciado foi de aproximadamente R$ 5 bilhões, com possibilidade de chegar a R$ 20 bilhões nas diferentes fases de implantação.",
            "O projeto prevê uma capacidade inicial de 216 megawatts de tecnologia da informação, com possibilidade de expansão para 386 megawatts. Para atender à demanda elétrica, foi anunciada uma subestação com capacidade inicial de 300 megawatts, expansível até 1 gigawatt. Esses números mostram que não se trata apenas da construção de edifícios: a instalação depende de uma infraestrutura energética e urbana de grande escala.",
            "A Prefeitura informou que aproximadamente 285 mil metros quadrados da área serão preservados como áreas verdes ou destinados ao município. Também foi anunciada a adoção de resfriamento líquido em circuito fechado, com o objetivo de reduzir o consumo de água. Essas medidas são relevantes, mas precisam ser acompanhadas por dados de operação, monitoramento ambiental e transparência sobre os resultados efetivamente alcançados.",
            "O caso de Campinas permite discutir uma questão central: como conciliar o desenvolvimento tecnológico e econômico com a proteção dos recursos naturais e do espaço urbano? A resposta depende não apenas das tecnologias utilizadas, mas também do planejamento territorial, da fiscalização pública e da participação da população."
        ],
        imagem: {
            src: "img/Front_of_server_racks_at_NERSC.jpg",
            alt: "Corredor de um centro de processamento de dados com fileiras de servidores.",
            legenda: "Imagem ilustrativa de um data center. Não representa o empreendimento Campus Campinas."
        },
        video: null,
        links: [
            {
                nome: "Prefeitura de Campinas — anúncio do Campus Campinas",
                url: "https://www.campinas.sp.gov.br/noticias/campinas-tera-datacenter-de-r-5-bilhoes-voltado-a-inteligencia-artificial-147416"
            },
            {
                nome: "Câmara Municipal de Campinas — debate sobre os impactos do empreendimento",
                url: "https://www.campinas.sp.leg.br/comunicacao/noticias/2026/setembro/comissao-de-meio-ambiente-debate-impactos-ambientais-da-instalacao-de-data-center-em-campinas"
            }
        ]
    },

    {
        id: "energia-data-centers",
        titulo: "O consumo de energia dos data centers e a infraestrutura elétrica",
        tema: "Consumo de energia",
        modo: "grupo",
        autores: ["Lorenzo, Gabriel, Wilmar, Téo, Noah"],
        grupo: "Pesquisa 2",
        data: "2026-11-15",
        resumo: "Entenda por que os data centers consomem tanta eletricidade e quais são os desafios para o abastecimento energético de Campinas.",
        texto: [
            "Um data center precisa funcionar continuamente para manter serviços digitais disponíveis. Seus servidores processam informações durante todo o dia, enquanto sistemas de refrigeração, iluminação, segurança e equipamentos auxiliares também consomem energia. Por isso, essas instalações podem representar cargas elétricas muito elevadas e concentradas em uma única região.",
            "Segundo a Agência Internacional de Energia, os data centers consumiram aproximadamente 415 terawatts-hora de eletricidade em 2024, o equivalente a cerca de 1,5% do consumo mundial. O consumo global desse setor cresceu em média aproximadamente 12% ao ano desde 2017. A expansão da inteligência artificial contribui para esse crescimento, pois o treinamento e a execução de modelos exigem grande capacidade computacional.",
            "Em Campinas, o Campus Campinas foi anunciado com capacidade inicial de 216 megawatts de tecnologia da informação, podendo alcançar 386 megawatts. A subestação prevista para atender ao empreendimento terá capacidade inicial de 300 megawatts, com possibilidade de expansão. Esses valores indicam a necessidade de planejamento da geração e da transmissão de energia, além da avaliação dos efeitos sobre a infraestrutura elétrica regional.",
            "A Empresa de Pesquisa Energética destaca que a conexão de grandes data centers influencia diretamente o planejamento da expansão da transmissão de energia elétrica. Isso significa que a instalação de um empreendimento desse porte precisa ser analisada considerando não apenas o consumo de seus próprios equipamentos, mas também a capacidade da rede de atender à nova demanda com segurança.",
            "O impacto climático do consumo elétrico depende também da origem da eletricidade. Quando a demanda adicional é atendida por fontes de maior emissão de gases de efeito estufa, a pegada de carbono tende a aumentar. Por isso, é importante conhecer a matriz elétrica utilizada, os contratos de energia renovável e as medidas de eficiência energética adotadas pelo empreendimento."
        ],
        imagem: {
            src: "img/Electrical_Substation.jpg",
            alt: "Fileiras de equipamentos e servidores em um centro de processamento de dados.",
            legenda: "Servidores precisam de fornecimento contínuo de energia elétrica."
        },
        video: null,
        links: [
            {
                nome: "Agência Internacional de Energia — Energy and AI",
                url: "https://www.iea.org/reports/energy-and-ai/executive-summary"
            },
            {
                nome: "Empresa de Pesquisa Energética — Consumo de data centers",
                url: "https://www.epe.gov.br/pt/areas-de-atuacao/energia-eletrica/consumo-de-energia-eletrica/consumo-de-data-centers"
            },
            {
                nome: "Prefeitura de Campinas — características energéticas do Campus Campinas",
                url: "https://www.campinas.sp.gov.br/noticias/campinas-tera-datacenter-de-r-5-bilhoes-voltado-a-inteligencia-artificial-147416"
            }
        ]
    },

    {
        id: "agua-data-centers",
        titulo: "Consumo de água e segurança hídrica na região de Campinas",
        tema: "Consumo de água",
        modo: "grupo",
        autores: ["Lorenzo, Gabriel, Wilmar, Téo, Noah"],
        grupo: "Pesquisa 3",
        data: "2026-11-15",
        resumo: "Analise a relação entre os sistemas de refrigeração dos data centers, o Rio Atibaia e a disponibilidade de água nas Bacias PCJ.",
        texto: [
            "Os servidores de um data center produzem calor durante o processamento de informações. Para evitar o superaquecimento dos equipamentos, as instalações precisam de sistemas de refrigeração que transfiram esse calor para o ambiente externo. Dependendo da tecnologia empregada, esse processo pode utilizar água diretamente, especialmente em sistemas que dependem da evaporação para resfriar o ar.",
            "O consumo de água não é igual em todos os data centers. Ele varia conforme o clima, a eficiência dos equipamentos, a densidade dos servidores e a tecnologia de resfriamento. Sistemas de circuito fechado podem reduzir a necessidade de reposição de água, mas é importante conhecer o consumo efetivo da instalação, inclusive em períodos de temperaturas elevadas.",
            "Essa questão é especialmente relevante em Campinas. De acordo com o Relatório de Sustentabilidade de 2024 da Sanasa, o município está inserido na Bacia Hidrográfica dos rios Piracicaba, Capivari e Jundiaí, conhecida como Bacia PCJ, e tem o Rio Atibaia como principal fonte de abastecimento público. A empresa também registra a necessidade de monitorar continuamente a qualidade da água captada nesse manancial.",
            "O Relatório de Situação dos Recursos Hídricos 2025 dos Comitês PCJ apresenta indicadores sobre disponibilidade, demanda e qualidade da água na região. Esses dados são importantes porque a água utilizada por uma instalação industrial precisa ser considerada em conjunto com os demais usos urbanos, agrícolas e industriais da bacia.",
            "No Campus Campinas, a Prefeitura informou que o projeto prevê resfriamento líquido em circuito fechado, destinado a reduzir o consumo de água. Entretanto, a divulgação de uma tecnologia de menor consumo não substitui a publicação de dados sobre a demanda hídrica real, a origem da água, o volume de reposição e o comportamento do sistema durante períodos de estiagem.",
            "Portanto, a questão não é afirmar antecipadamente que o empreendimento causará falta de água, mas avaliar se sua demanda será compatível com a disponibilidade hídrica regional e se haverá monitoramento e transparência suficientes para proteger o abastecimento da população."
        ],
        imagem: {
            src: "img/Atibaia_River.jpg",
            alt: "Vegetação densa da Mata de Santa Genebra, em Campinas.",
            legenda: "A conservação dos recursos hídricos também depende da proteção dos ecossistemas e das áreas naturais."
        },
        video: null,
        links: [
            {
                nome: "Sanasa — Relatório de Sustentabilidade 2024",
                url: "https://www.sanasa.com.br/wp-content/uploads/2025/05/0-Relatorio-de-Sustentabilidade-2024-27032025-versao-final-v1.pdf"
            },
            {
                nome: "Comitês PCJ — Relatório de Situação dos Recursos Hídricos 2025",
                url: "https://www.comitespcj.org.br/wp-content/uploads/2026/01/Relatorio-de-Situacao-2025-Ano-Base-2024.pdf"
            },
            {
                nome: "Prefeitura de Campinas — características do sistema de resfriamento anunciado",
                url: "https://www.campinas.sp.gov.br/noticias/campinas-tera-datacenter-de-r-5-bilhoes-voltado-a-inteligencia-artificial-147416"
            }
        ]
    },

    {
        id: "territorio-biodiversidade",
        titulo: "Ocupação do solo, biodiversidade e impactos na paisagem urbana",
        tema: "Uso do solo e biodiversidade",
        modo: "grupo",
        autores: ["Lorenzo, Gabriel, Wilmar, Téo, Noah"],
        grupo: "Pesquisa 4",
        data: "2026-11-15",
        resumo: "Investigue como grandes empreendimentos alteram o território e por que a localização do Campus Campinas exige atenção ambiental e urbanística.",
        texto: [
            "A construção de um data center exige mais do que espaço para os edifícios que abrigam os servidores. O empreendimento também pode demandar subestações, linhas de transmissão, vias de acesso, sistemas de refrigeração, áreas técnicas e estruturas de apoio. Durante a implantação, atividades como terraplanagem, movimentação de veículos e impermeabilização do solo podem modificar a paisagem e a dinâmica ambiental local.",
            "O Campus Campinas foi anunciado para uma área de aproximadamente 944 mil metros quadrados na região da Fazenda Pau D'Alho, em Barão Geraldo. A dimensão territorial torna necessário avaliar o uso anterior do terreno, a drenagem das águas pluviais, a vegetação existente, as áreas de preservação e a relação do empreendimento com os bairros e equipamentos urbanos próximos.",
            "A Mata de Santa Genebra é uma importante área de vegetação nativa localizada em Campinas. Áreas naturais desse tipo contribuem para a conservação da biodiversidade, a regulação do microclima, a infiltração da água no solo e a manutenção de habitats. Por isso, a análise de grandes empreendimentos deve considerar não apenas a área diretamente ocupada, mas também seus possíveis efeitos sobre o entorno e a conectividade entre áreas verdes.",
            "Entre os impactos que precisam ser avaliados estão a supressão de vegetação, a fragmentação de habitats, o aumento do escoamento superficial, a alteração da paisagem e a geração de ruído. Grandes equipamentos também liberam calor para o ambiente, o que torna relevante estudar possíveis alterações microclimáticas, especialmente quando há concentração de estruturas industriais em uma mesma região.",
            "A Prefeitura informou que cerca de 285 mil metros quadrados da área do Campus Campinas serão preservados como áreas verdes ou destinados ao município. Essa previsão deve ser considerada na avaliação do projeto, mas não elimina a necessidade de conhecer a localização dessas áreas, sua vegetação, sua função ecológica e as medidas de compensação e monitoramento previstas.",
            "A análise territorial demonstra que o impacto ambiental de um data center não se limita ao consumo de energia e água. A escolha do local, a dimensão da ocupação e a relação com os ecossistemas e com a população também são elementos fundamentais para avaliar a sustentabilidade do empreendimento."
        ],
        imagem: {
            src: "img/Entrada_da_ARIE_Mata_Santa_Genebra.jpg",
            alt: "Trilha cercada pela vegetação da Mata de Santa Genebra, em Campinas.",
            legenda: "A Mata de Santa Genebra é uma referência de conservação ambiental no território campineiro."
        },
        video: null,
        links: [
            {
                nome: "Prefeitura de Campinas — Mata de Santa Genebra",
                url: "https://campinas.sp.gov.br/noticias/voce-sabia-a-mata-de-santa-genebra-e-a-segunda-maior-floresta-urbana-do-brasil-139654"
            },
            {
                nome: "Câmara Municipal de Campinas — debate sobre impactos ambientais do data center",
                url: "https://www.campinas.sp.leg.br/comunicacao/noticias/2026/setembro/comissao-de-meio-ambiente-debate-impactos-ambientais-da-instalacao-de-data-center-em-campinas"
            },
            {
                nome: "Prefeitura de Campinas — informações sobre a área do Campus Campinas",
                url: "https://www.campinas.sp.gov.br/noticias/campinas-tera-datacenter-de-r-5-bilhoes-voltado-a-inteligencia-artificial-147416"
            }
        ]
    },

    {
        id: "licenciamento-fiscalizacao",
        titulo: "Licenciamento ambiental e fiscalização dos data centers na Região Metropolitana de Campinas",
        tema: "Licenciamento e fiscalização",
        modo: "grupo",
        autores: ["Lorenzo, Gabriel, Wilmar, Téo, Noah"],
        grupo: "Pesquisa 5",
        data: "2026-11-15",
        resumo: "Conheça os questionamentos de órgãos públicos sobre o licenciamento de data centers em Campinas, Sumaré e Hortolândia.",
        texto: [
            "O licenciamento ambiental é um instrumento utilizado pelo poder público para avaliar a viabilidade de atividades e empreendimentos que possam causar impactos ao meio ambiente. Dependendo das características do projeto, a análise pode envolver estudos ambientais, avaliação de alternativas de localização, medidas de prevenção e compensação e acompanhamento das condições estabelecidas nas licenças.",
            "Em Campinas, o projeto Campus Campinas gerou questionamentos sobre a extensão das autorizações concedidas e a necessidade de avaliar conjuntamente o data center e sua infraestrutura elétrica. Em setembro de 2026, a TV Câmara Campinas noticiou a abertura de um inquérito civil pelo Ministério Público de São Paulo para investigar os impactos ambientais, urbanísticos e patrimoniais do empreendimento. Na mesma reportagem, a Prefeitura informou que as autorizações concedidas até aquele momento se referiam à subestação elétrica, e não ao data center propriamente dito.",
            "A investigação busca esclarecer questões como a regularidade do licenciamento, a avaliação dos impactos do conjunto do empreendimento e os possíveis efeitos sobre os recursos hídricos, a vizinhança e o patrimônio histórico. A abertura de um inquérito não significa que as irregularidades tenham sido comprovadas: trata-se de um procedimento de apuração, no qual documentos e informações técnicas devem ser analisados.",
            "A preocupação com o licenciamento também aparece em outros municípios da região. Em abril de 2026, o Ministério Público de Contas do Estado de São Paulo apresentou uma representação apontando possíveis irregularidades nos processos de licenciamento de data centers em Sumaré e Hortolândia. O órgão destacou a necessidade de avaliar os impactos de empreendimentos de grande porte voltados à computação em nuvem e à inteligência artificial.",
            "Esses casos mostram a importância de analisar os efeitos cumulativos da expansão dos data centers na Região Metropolitana de Campinas. A demanda por energia, água, infraestrutura e espaço urbano não se limita às fronteiras de um município. Por isso, o planejamento precisa considerar a escala regional e a capacidade dos órgãos públicos de fiscalizar os empreendimentos.",
            "A fiscalização ambiental não deve ser entendida como oposição automática ao desenvolvimento tecnológico. Seu objetivo é garantir que os investimentos ocorram de acordo com a legislação, com transparência, prevenção de danos e proteção dos interesses coletivos."
        ],
        imagem: {
            src: "img/62e464_8c71ab793c154069abee3b32a759ed83~mv2.avif",
            alt: "Técnico usando capacete e colete de segurança durante uma inspeção em uma instalação industrial.",
            legenda: "A fiscalização permite verificar se os empreendimentos cumprem as exigências ambientais."
        },
        video: null,
        links: [
            {
                nome: "TV Câmara Campinas — investigação do Ministério Público sobre o Campus Campinas",
                url: "https://www.tvcamaracampinas.com.br/noticias/2026/data-center-barao-geraldo-inquerito-mpsp-campinas"
            },
            {
                nome: "Ministério Público de Contas de São Paulo — representação sobre Sumaré e Hortolândia",
                url: "https://mpc.sp.gov.br/representacao-do-mpc-sp-aponta-possiveis-irregularidades-em-data-centers-no-interior-paulista"
            },
            {
                nome: "Câmara Municipal de Campinas — debate público sobre o empreendimento",
                url: "https://www.campinas.sp.leg.br/comunicacao/noticias/2026/setembro/comissao-de-meio-ambiente-debate-impactos-ambientais-da-instalacao-de-data-center-em-campinas"
            },
            {
                nome: "Correio da Manhã — abertura de inquérito civil em Campinas",
                url: "https://www.correiodamanha.com.br/nacional/sao-paulo/campinas/2026/09/319772-apos-representacao-mp-abre-inquerito-civil-contra-mega-data-center-de-rs-5-bilhoes-em-campinas.html"
            }
        ]
    }
];
