import "./Gameboard.css";
import CardContainer from "../CardContainer/CardContainer";

const GameBoard = ({ cards }) => {
  const cardsArray = cards.map((card) => (
    <CardContainer>
      <img src={card.image} />
    </CardContainer>
  ));
  return <div className="gb-container">{cardsArray}</div>;
};

export default GameBoard;
