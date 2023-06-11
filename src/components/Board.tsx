import { useState } from 'react';
import { CardType } from '../@types/BoardTypes';
import Card from './Card';

interface BoardProps {
    cards: CardType[],
    updateCard: (
        cardId: string, 
        keyToUpdate: string,
        newValue: string | { x: number, y: number} | { top: number, left: number}
    ) => void,
}

const Board : React.FC<BoardProps> = ({ cards, updateCard }) => {
    const [cardBeingMoved, setCardBeingMoved] = useState(''); // cardId

    const boardXOffset = 50;
    const boardYOffset = 100;

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const mouseXPos = event.pageX - boardXOffset;
        const mouseYPos = event.pageY - boardYOffset;

        updateCard(cardBeingMoved, 'cardPosition', { top: mouseYPos, left: mouseXPos});
    }

    const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    return (
        <div className='board-wrapper'>
            <h2>Board</h2>
            <div
                className='board-cards-area'
                onDragOver={onDragOver}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                {
                cards.map(
                    (card) => (
                            <Card
                                cardInfo={card}
                                key={card.cardId}
                                setCardBeingMoved={setCardBeingMoved}
                                updateCard={updateCard}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Board;