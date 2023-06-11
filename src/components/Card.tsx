import { useState, useEffect, SetStateAction } from 'react';
import { CardType } from '../@types/BoardTypes';

interface CardProps {
    cardInfo: CardType,
    setCardBeingMoved: React.Dispatch<SetStateAction<string>>,
    updateCard: (
        cardId: string,
        keyToUpdate: string,
        newValue: string | { x: number, y: number} | { top: number, left: number}
    ) => void,
}

const Card : React.FC<CardProps> = (props) => {
    const { cardInfo, setCardBeingMoved, updateCard } = props;
    const { cardName, cardId, cardPosition, mousePositionOnCard } = cardInfo;
    // Sets the inline style for the card position
    const [elementPos, setElementPos] = useState({ top: '0px', left: '0px'});
    
    const boardXOffset = 50;
    const boardYOffset = 100;

    useEffect(() => {
        // Actual position of the card is position of the top left corner
        const newCoordX = cardPosition.left - mousePositionOnCard.x;
        const newCoordY = cardPosition.top - mousePositionOnCard.y;
 
        setElementPos({
            top: `${newCoordY}px`,
            left: `${newCoordX}px`,
        })
    }, [cardPosition.left, cardPosition.top])

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const { top, left } = (event.target as HTMLElement).getBoundingClientRect();

        const mouseXPos = event.pageX - boardXOffset;
        const mouseYPos = event.pageY - boardYOffset;
        const elementTop = top - boardYOffset;
        const elementLeft = left - boardXOffset;
        // Get the difference between the topCorner and the mouse
        const differenceX = mouseXPos - elementLeft;
        const differenceY = mouseYPos - elementTop;

        setCardBeingMoved(cardId);
        updateCard(cardId, 'mousePositionOnCard', { x: differenceX, y: differenceY });
    }

    return (
        <div
            className='card-wrapper'
            draggable
            onDragStart={onDragStart}
            style={elementPos}
            data-cardid={cardId}
        >   
            name: {cardName}
        </div>
    )
}

export default Card;