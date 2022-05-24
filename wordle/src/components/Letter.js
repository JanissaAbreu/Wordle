import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
/*this function calls two props that are used in the Board funtion 
the letterPos symbolizes the position the letter is in in the board and 
the attemptVal is where the letter that is outprinted is displayed in the array*/
function Letter({ letterPos, attemptVal }) {
/*this function uses the constants in the other js files using the AppContext call that 
was written out in the App js file while encompases the entirety of the code*/
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext);
    /*below constant varibales give value when the user gets the letter in the word
    either correct, almost, or completely wrong*/
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
    /*this uses the Disabled letters function made in the Keyboard */
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;