import './Gameboard.css'

const GameBoard = ({cards}) => {
    const cardsArray = cards.map( card => <img src={card.image}/>)
    return (
        <div className="gb-container">
            {/* <h1>Game Board</h1> */}
            <div>
                {cardsArray}
            </div>

        </div>
    )
}

export default GameBoard;