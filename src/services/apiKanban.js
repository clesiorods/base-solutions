export function apiKanban() {
  return {
    listas: [
      {
        title: 'TODO',
        id_lista: 'lista01',
        creatable: true,
        cards: ['1', '2', '3', '4']
      },
      {
        title: 'Fazendo',
        id_lista: 'lista02',
        creatable: true,
        cards: ['5', '6']
      },
      {
        title: 'Pausado',
        id_lista: 'lista03',
        creatable: false,
        cards: ['7', '8', '9']
      },
      {
        title: 'Concluído',
        id_lista: 'lista04',
        creatable: false,
        done: true,
        cards: ['10', '12', '13']
      },
      {
        title: 'Concluído 2',
        id_lista: 'lista05',
        creatable: true,
        done: true,
        cards: ['14', '15', '16']
      },
    ],
    tarefas: [
      {
        id: '1',
        content: 'Estudar módulo 01 de NodeJS',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '2',
        content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/03.1c67b250.jpg'
      },
      {
        id: '3',
        content: 'Estudar módulo 03 de React Native',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '4',
        content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '5',
        content: 'Gravar testes e deploy ReactJS',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '6',
        content: 'Recriando clone do Pipefy',
        labels: [],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '7',
        content: 'Gravar sobre Geolocalização e mapas com React Native',
        labels: ['#7159c1'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: ''
      },
      {
        id: '8',
        content: 'Gravar testes e deploy ReactJS',
        labels: ['#54e1f7'],
        user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
        img: 'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/static/media/03.1c67b250.jpg'
      },
      {
        id: '9',
        content: 'Ajustes na biblioteca unform',
        labels: [],
      },
      {
        id: '10',
        content: 'Gravar aula sobre deploy e CI com React Native',
        labels: [],
      },
      {
        id: '12',
        content: 'Gravar testes e deploy ReactJS',
        labels: ['#54e1f7'],
      },
      {
        id: '13',
        content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
        labels: ['#7159c1'],
      },
      {
        id: '14',
        content: 'Gravar aula sobre deploy e CI com React Native',
        labels: [],
      },
      {
        id: '15',
        content: 'Gravar testes e deploy ReactJS',
        labels: ['#54e1f7'],
      },
      {
        id: '16',
        content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
        labels: ['#7159c1'],
      }
    ]
  }
}