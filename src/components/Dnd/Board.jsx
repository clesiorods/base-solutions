import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { loadLists } from '../../services/apiKanban';
// import './App.css';
import styled from "styled-components"
import Card from './Card';
import { CardLight } from '../CardLight';

const dados = loadLists()[0];


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

  const [characters, updateCharacters] = useState(dados.cards);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <CardLight>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        
        <Droppable droppableId={dados.id_lista}>
          {(provided) => (
            <List className={`${dados.id_lista} droppable-area`} {...provided.droppableProps} ref={provided.innerRef}>
              <header>
                <h2>{dados.title}</h2>
                {
                  dados.creatable && (
                    <button className="btn">
                      <Icon style={{ fontSize: '20px' }} className="icon" icon="uil:ellipsis-v" />
                    </button>
                  )
                }
              </header>
              <ul>
                {characters.map((card, index) => {
                  return (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <li className='d-flex' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Card badgeColor={"red"} key={card.id} data={card} >
                            {card.content}
                          </Card>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </CardLight>
  );
}

export default Board;
