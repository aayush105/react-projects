import styled from 'styled-components';

const RollDice = ({currentDice, rollDice}) => {
    
    return (
        <DiceContainer>
            <div
                className='dice'
                onClick={rollDice}
            >
                <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
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

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;
