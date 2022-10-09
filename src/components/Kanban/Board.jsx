import { useState } from 'react';
import { Icon } from "@iconify/react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components"
import Task from './Task';
import { ContentWrapper } from '../ContentWrapper';
// import { apiKanban } from '../../services/ApiKanban';

const listas = apiKanban().listas;
const tarefas = apiKanban().tarefas;


function Board() {

  const List = styled.div`
    padding:  0px 30px 0px 0px;
    height: 100%;
    flex: 0 0 290px;
    width: 320px;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        color: white;
        padding-top: 2px;
        h2 {
            font-size: 16px;
            font-weight: 500;
            padding: 0 10px;
            padding-top: 12px;
        }
        button {
            color: #696a6e;
            width: 20px;
            padding-left: 0px;
            :hover {
                color: white;
            }
        }
    }
    ul {
        padding-left: 0px;
        margin-top: 12px;
    }
  `;

  const [tafetaState, setTafetaState] = useState(tarefas);

  function handleOnDragEnd(result) {

    if (!result.destination) return;

    let listaOrigem = listas.find(el => el.id_lista === result.source.droppableId);
    let indexListaOrigem = listas.findIndex((list) => list.id_lista === result.source.droppableId);
    let listaDestino = listas.find(el => el.id_lista === result.destination.droppableId);
    let indexListaDestino = listas.findIndex((list) => list.id_lista === result.destination.droppableId);

    listaDestino.cards.push(result.draggableId);
    listaOrigem.cards.splice(listaOrigem.cards.indexOf(result.draggableId), 1);

    let ajuste = 0;
    if (indexListaOrigem < indexListaDestino) {
      ajuste = -1;
    }

    const items = Array.from(tafetaState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index + ajuste, 0, reorderedItem);

    setTafetaState(items);
  }

  return (
    <ContentWrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className='d-flex mt-1'>
          {listas.map((lista, index) => {
            return (
              <Droppable droppableId={lista.id_lista}>
                {(provided) => (
                  <List className={`${lista.id_lista} droppable-area`} {...provided.droppableProps} ref={provided.innerRef}>
                    <header>
                      <h2>{lista.title}</h2>
                      {
                        lista.creatable && (
                          <button className="btn">
                            <Icon style={{ fontSize: '20px' }} className="icon" icon="uil:ellipsis-v" />
                          </button>
                        )
                      }
                    </header>
                    <ul>
                      {tafetaState.map((card, index) => {
                        if (lista.cards.includes(card.id)) {
                          return (
                            <Draggable key={card.id} draggableId={card.id} index={index}>
                              {(provided) => (
                                <li className='d-flex' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <Task badgeColor={"red"} key={card.id} data={card} >
                                    {card.content}
                                  </Task>
                                </li>
                              )}
                            </Draggable>
                          );
                        } else {
                          return ('');
                        }
                      })}
                      {provided.placeholder}
                    </ul>
                  </List>
                )}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </ContentWrapper>
  );
}


function apiKanban() {
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

export default Board;
