import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Board from './components/Board';

import './App.css';

function App() {
  const [allCards, setAllCards] = useState<string[]>([]);

  function addCard() {
    const cardName = `card num ${allCards.length + 1}`;
    setAllCards((oldCards) => [...oldCards, cardName]);
  }

  return (
    <div className='container'>
      <Topbar />
      <Sidebar addCard={addCard} />
      <Board cards={allCards} />
    </div>
  )
}

export default App
