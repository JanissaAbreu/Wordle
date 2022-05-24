import React, { useContext } from "react";
import { AppContext } from "../App";
/*this function uses the constants in the other js files using the AppContext call that 
was written out in the App js file while encompases the entirety of the code*/
function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  /*outprints when the user correctly outprints the chosen word and if not 
  if they failed to guess it outprints that the user failed */
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;