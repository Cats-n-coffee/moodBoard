interface CardProps {
    cardName: string,
}

const Card : React.FC<CardProps> = ({ cardName }) => {
    return <div className='card-wrapper'>name: {cardName}</div>
}

export default Card;