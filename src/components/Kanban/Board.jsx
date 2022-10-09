import { useState } from 'react';
import { Icon } from "@iconify/react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components"
import Task from './Task';
import { ContentWrapper } from '../ContentWrapper';
import { apiKanban } from '../../services/ApiKanban';

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
    if(indexListaOrigem < indexListaDestino) {
      ajuste = -1;
    }

    const items = Array.from(tafetaState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index+ajuste, 0, reorderedItem);

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
                        if(lista.cards.includes(card.id)) {
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
                          return('');
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

export default Board;
