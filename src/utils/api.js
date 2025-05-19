const ufprSectors = [
  /* ——————————————————————————————— PALOTINA ——————————————————————————————— */
  {
    name: 'PALOTINA',
    courses: [
      {
        name: 'Agronomia',
        modality: 'Presencial',
        campus: 'Palotina',
        disciplines: [
          {
            code: 'DCA0105',
            name: 'Ecologia e Agroecossistemas',
            nature: 'Obrigatória',
            syllabus:
              'Fundamentos ecológicos aplicados a sistemas agrícolas. Ciclagem de nutrientes, energia e sucessão.',
            bibliography: null,
            extraBibliography: [
              'https://www.agencia.cnptia.embrapa.br/recursos/AgroCap01D-Simo29XUSRA.pdf',
              'https://www.stantandfe.gov.br/pesquisa/ebooks/342993.pdf'
            ],
            workload: 60,
            offers: ['2023/2']
          },
          {
            code: 'DCA0108',
            name: 'Sistemática de Plantas Cultivadas',
            nature: 'Optativa',
            syllabus:
              'Origem e domesticação de espécies agrícolas. Taxonomia e identificação botânica.',
            workload: 45,
            offers: ['2024/1']
          }
        ]
      },
      {
        name: 'Medicina Veterinária',
        modality: 'Presencial',
        campus: 'Palotina',
        disciplines: [
          {
            code: 'VET0202',
            name: 'Anatomia dos Animais Domésticos I',
            nature: 'Obrigatória',
            syllabus:
              'Estudo macroscópico dos sistemas ósseo, articular e muscular em mamíferos domésticos.',
            workload: 75,
            offers: ['2023/2']
          }
        ]
      }
    ]
  },

  /* ——————————————————————————— CENTRO POLITÉCNICO —————————————————————————— */
  {
    name: 'POLITÉCNICO',
    courses: [
      {
        name: 'Engenharia de Produção',
        modality: 'Presencial',
        campus: 'Curitiba (CP)',
        disciplines: [
          {
            code: 'EPG1001',
            name: 'Introdução à Engenharia de Produção',
            nature: 'Obrigatória',
            syllabus:
              'Histórico, áreas de atuação, papel do engenheiro de produção na indústria 4.0.',
            workload: 60,
            offers: ['2023/1', '2023/2']
          },
          {
            code: 'EPG2004',
            name: 'Logística e Cadeia de Suprimentos',
            nature: 'Obrigatória',
            syllabus:
              'Gestão de estoques, transporte, armazenagem e redes logísticas sustentáveis.',
            workload: 60,
            offers: ['2024/1']
          }
        ]
      },
      {
        name: 'Sistemas de Informação',
        modality: 'EaD',
        campus: 'Curitiba (CP)',
        disciplines: [
          {
            code: 'INF1200',
            name: 'Estruturas de Dados',
            nature: 'Obrigatória',
            syllabus:
              'Listas, filas, pilhas, árvores e grafos. Análise de complexidade.',
            bibliography:
              'CORMEN, T. Algoritmos. 3. ed. MIT Press, 2009.',
            workload: 60,
            offers: ['2023/2']
          }
        ]
      }
    ]
  },

  /* ————————————————————————— SETOR DE SAÚDE —————————————————————————— */
  {
    name: 'CIÊNCIAS DA SAÚDE',
    courses: [
      {
        name: 'Medicina',
        modality: 'Presencial',
        campus: 'Curitiba (HC)',
        disciplines: [
          {
            code: 'MED1105',
            name: 'Anatomia Humana I',
            nature: 'Obrigatória',
            syllabus:
              'Estudo anatômico de sistemas locomotor e respiratório. Abordagem clínica-cirúrgica.',
            workload: 120,
            offers: ['2023/2']
          },
          {
            code: 'MED2207',
            name: 'Farmacologia Básica',
            nature: 'Obrigatória',
            syllabus:
              'Fármacos que atuam no sistema nervoso autônomo, cardiovascular e respiratório.',
            workload: 75,
            offers: ['2024/1']
          }
        ]
      },
      {
        name: 'Enfermagem',
        modality: 'Presencial',
        campus: 'Curitiba (HC)',
        disciplines: [
          {
            code: 'ENF1301',
            name: 'Fundamentos de Enfermagem',
            nature: 'Obrigatória',
            syllabus:
              'Processo de cuidar, ética profissional e comunicação terapêutica.',
            workload: 60,
            offers: ['2023/1']
          }
        ]
      }
    ]
  },

  /* ————————————————————————————— SETOR LITORAL ———————————————————————————— */
  {
    name: 'LITORAL',
    courses: [
      {
        name: 'Gestão Ambiental',
        modality: 'Presencial',
        campus: 'Matinhos',
        disciplines: [
          {
            code: 'GAM1402',
            name: 'Ecologia Costeira',
            nature: 'Obrigatória',
            syllabus:
              'Dinâmica de ecossistemas marinhos e estuarinos. Impactos antrópicos no litoral.',
            workload: 60,
            offers: ['2023/2']
          }
        ]
      }
    ]
  }
];

export default ufprSectors;


