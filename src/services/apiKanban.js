export function loadLists() {
    return [
      { 
        title: 'TODO', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/03.1c67b250.jpg'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: true,
        cards: [
          {
            id: 5,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          },
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: ''
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
            img: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/03.1c67b250.jpg'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
      { 
        title: 'Concluído 2', 
        creatable: true,
        done: true,
        cards: [
          {
            id: 14,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 15,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 16,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }