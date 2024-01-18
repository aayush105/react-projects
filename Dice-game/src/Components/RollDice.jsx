import { useState } from 'react';
import styled from 'styled-components';

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState();
    const generateRandomNumber = (min, max) => {
        return Math.random() * (max- min) - min;
    }
  return (
    <DiceContainer>
        <div 
            className='dice'
            onClick={() => generateRandomNumber(1,6)}
        >
            <img src="/images/dice/dice_1.png" alt="dice 1" />
        </div>
        <p>Click the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }

`;