import Card from './Card';

interface BoardProps {
    cards: string[],
}

const Board : React.FC<BoardProps> = ({ cards }) => {
    return <div className='board-wrapper'>
        <h2>Board</h2>
        {cards.map((card, idx) => <Card cardName={card} key={idx} />)}
    </div>
}

export default Board;