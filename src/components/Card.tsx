interface CardProps {
    cardName: string,
    cardId: number,
    setMousePosOnElement: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>;
    elementPos: { top: string, left: string },
}

const Card : React.FC<CardProps> = (props) => {
    const { cardName, cardId, setMousePosOnElement, elementPos } = props;
    
    const boardXOffset = 50;
    const boardYOffset = 100;

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const { top, left } = (event.target as HTMLElement).getBoundingClientRect();

        const mouseXPos = event.pageX - boardXOffset;
        const mouseYPos = event.pageY - boardYOffset;
        const elementTop = top - boardYOffset;
        const elementLeft = left - boardXOffset;
        // Get the difference between the topCorner and the mouse
        const differenceX = mouseXPos - elementLeft;
        const differenceY = mouseYPos - elementTop;
        setMousePosOnElement({ x: differenceX, y: differenceY });
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