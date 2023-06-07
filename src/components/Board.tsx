import { useState, useRef } from 'react';
import * as _ from 'lodash-es';
import Card from './Card';

interface BoardProps {
    cards: string[],
}

const Board : React.FC<BoardProps> = ({ cards }) => {
    const board = useRef<HTMLDivElement>(null);
    // Initialize at drag start (start)
    const [mousePosOnElement, setMousePosOnElement] = useState({ x: 0, y: 0 });
    // Set position on drop (end)
    const [elementPos, setElementPos] = useState({ top: '0px', left: '0px'});

    const boardXOffset = 50;
    const boardYOffset = 100;

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const mouseXPos = event.pageX - boardXOffset;
        const mouseYPos = event.pageY - boardYOffset;

        const newCoordX = mouseXPos - mousePosOnElement.x;
        const newCoordY = mouseYPos - mousePosOnElement.y;
 
        setElementPos({
            top: `${newCoordY}px`,
            left: `${newCoordX}px`,
        })
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
                ref={board}
                onDragOver={onDragOver}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                {
                cards.map(
                    (card, idx) => (
                            <Card
                                cardName={card}
                                key={idx}
                                cardId={idx}
                                setMousePosOnElement={setMousePosOnElement}
                                elementPos={elementPos}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Board;