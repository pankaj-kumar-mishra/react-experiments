import React, { useCallback, useEffect, useState } from "react";
import Box from "./Box";
import styles from "./ticTacToe.module.css";

const data = new Array(9).fill("");
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
];

const TicTacToe = () => {
  const [squares, setSquares] = useState(data);
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  //   console.log("🚀 ~ file: TicTacToe.jsx:7 ~ squares:", squares);
  //   console.log("🚀 ~ file: TicTacToe.jsx:9 ~ isXTurn:", isXTurn);

  const getWinner = useCallback(() => {
    for (const [x, y, z] of winningPatterns) {
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x]; // return 'X' or 'O'
      }
    }

    return null;
  }, [squares]);

  const handleClick = (idx) => {
    const tempSquares = [...squares];
    if (tempSquares[idx] || getWinner()) {
      return;
    }
    tempSquares[idx] = isXTurn ? "X" : "O";
    setIsXTurn((prev) => !prev);
    setSquares(tempSquares);
  };

  useEffect(() => {
    if (!getWinner() && squares.every(Boolean)) {
      setStatus("Match Draw!, Please restart the game.");
    } else if (getWinner()) {
      setStatus(`Winner is ${getWinner()}, Please restart the game.`);
    } else {
      setStatus(`Now ${isXTurn ? "X" : "O"}'s turn.`);
    }
  }, [squares, isXTurn, getWinner]);

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(data);
  };

  return (
    <div>
      <h3 className={styles.title}>Tic Tac Toe</h3>
      <div className={styles.container}>
        <div className={styles.row}>
          <Box value={squares[0]} onClick={() => handleClick(0)} />
          <Box value={squares[1]} onClick={() => handleClick(1)} />
          <Box value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.row}>
          <Box value={squares[3]} onClick={() => handleClick(3)} />
          <Box value={squares[4]} onClick={() => handleClick(4)} />
          <Box value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.row}>
          <Box value={squares[6]} onClick={() => handleClick(6)} />
          <Box value={squares[7]} onClick={() => handleClick(7)} />
          <Box value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <h5 className={styles.status}>Message: {status}</h5>
        <button onClick={handleRestart}>Restart the game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
