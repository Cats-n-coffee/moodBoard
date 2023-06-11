import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Board from './components/Board';
import { CardType } from './@types/BoardTypes';

import './App.css';

function App() {
  const [allCards, setAllCards] = useState<CardType[]>([]);

  const addCard = () => {
    const newCard = {
      cardName: `card num ${allCards.length + 1}`,
      cardId: `${allCards.length + 1}`,
      cardPosition: { top: 0, left: 0 },
      mousePositionOnCard: { x: 0, y: 0 },
    };
    setAllCards((oldCards) => [...oldCards, newCard]);
  }

  const updateCard = (
    cardId: string,
    keyToUpdate: string,
    newValue: string | { x: number, y: number} | { top: number, left: number}
  ) => {
    setAllCards((oldCards) => 
    oldCards.map((card) => {
      if (card.cardId === cardId) {
        return { ... card, [keyToUpdate]: newValue };
      }
      return card;
    }))
  }

  return (
    <div className='container'>
      <Topbar />
      <Sidebar addCard={addCard} />
      <Board cards={allCards} updateCard={updateCard} />
    </div>
  )
}

export default App
