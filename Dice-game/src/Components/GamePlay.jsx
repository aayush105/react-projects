import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import { useState } from "react"
import Button, { OutlineButton } from "../styled/Button"


const GamePlay = () => {
  
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const rollDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    
  }

  return (
    <MainContainer>
       <div className="top_section">
         <TotalScore
          score={score}
         />
         <NumberSelector 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
         />
       </div>
       <RollDice 
          currentDice={currentDice}
          rollDice={rollDice}
       />
       <div className="btns">
          <Button>Reset Score</Button>
          <OutlineButton>Show Rules</OutlineButton>
       </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 50px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

`;