import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";
/*this function is technically an Array of Arrays so like [["h"] ["i"]["m"] ["y"]]
although it works with 5 letters for each thing since that's how big the board
will be/is for the game wordle*/
function Board() {
  /*this shows it's initial value will be the board default of the matrix we made in 
  words because it initializes a bunch of empty letters*/
  return (
    /*we have a div that holds the entire board and we have divs that represents the 
    dofferent rows and positioons.
    there will be a total of 6 rows and 5 columns */

    /*the Letter class is called into this array since it's what fills the spots of the 
    array with the users inputs */
    <div className="board">
      {" "}
      <div className="row">
        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
      </div>
      <div className="row">
        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}
/*the whole board is 6x5 and outprinted correctly*/
export default Board;