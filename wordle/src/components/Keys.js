import React, { useContext } from "react";
import { AppContext } from "../App";
/*this function uses props for the key values*/
function Key({ keyVal, bigKey, disabled }) {
/*this function uses the constants in the other js files using the AppContext call that 
was written out in the App js file while encompases the entirety of the code*/
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);
/*this constant selectLetter and adds value to the enter and delete buttons which also
gets called over to the gameOver function and their it is used ass a constant*/
  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  /*ends constant after the select is given value for enter and delete*/
  return (
    /*with the class name key I disabled the capital ket to make sure the user stays in 
    the keyboard with the values I allowed them to use*/
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;