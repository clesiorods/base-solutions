import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { loadLists } from '../../services/apiKanban';
import './App.css';
import Card from './Card';

// const finalSpaceCharacters = [
//   {
//     id: 'gary',
//     name: 'Gary Goodspeed',
//     thumb: '/images/gary.png'
//   },
//   {
//     id: 'cato',
//     name: 'Little Cato',
//     thumb: '/images/cato.png'
//   },
//   {
//     id: 'kvn',
//     name: 'KVN',
//     thumb: '/images/kvn.png'
//   },
//   {
//     id: 'mooncake',
//     name: 'Mooncake',
//     thumb: '/images/mooncake.png'
//   },
//   {
//     id: 'quinn',
//     name: 'Quinn Ergon',
//     thumb: '/images/quinn.png'
//   }
// ]

const dados = loadLists()[0];

function Board() {
  const [characters, updateCharacters] = useState(dados.cards);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>


                {characters.map((card, index) => {
                  return (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
            )}
          </Droppable>
        </DragDropContext>
      </header>

    </div>
  );
}

export default Board;
