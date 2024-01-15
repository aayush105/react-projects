import { useState } from "react";
import Front from "./Components/Front";
import GamePlay from "./Components/GamePlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  }
  
  return (
    <>
      { 
        isGameStarted ? 
        <GamePlay /> : 
        <Front 
          toggle={toggleGamePlay}
        />
      }
    </>
  )
}

export default App
