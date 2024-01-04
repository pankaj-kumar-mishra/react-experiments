import React, { useEffect, useState } from "react";
import Box from "./Box";
import styles from "./ticTacToe.module.css";

const data = new Array(9).fill("");
const winningPatterns = [
  [0, 1, 2], // r1
  [3, 4, 5], // r2
  [6, 7, 8], // r3
  [0, 3, 6], // c1
  [1, 4, 7], // c2
  [2, 5, 8], // c3
  [0, 4, 8], // d1
  [2, 4, 6], // d2
];

const getWinner = (arr) => {
  for (const [x, y, z] of winningPatterns) {
    if (arr[x] && arr[x] === arr[y] && arr[y] === arr[z]) {
      return [x, y, z];
    }
  }

  return null;
};

const getWinnerLineCss = (arr) => {
  switch (arr.toString()) {
    case "0,1,2":
      return "r1";
    case "3,4,5":
      return "r2";
    case "6,7,8":
      return "r3";
    case "0,3,6":
      return "c1";
    case "1,4,7":
      return "c2";
    case "2,5,8":
      return "c3";
    case "0,4,8":
      return "d1";
    case "2,4,6":
      return "d2";

    default:
      return "";
  }
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(data);
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [winnerLineCss, setWinnerLineCss] = useState("");
  //   console.log("🚀 ~ file: TicTacToe.jsx:7 ~ squares:", squares);
  //   console.log("🚀 ~ file: TicTacToe.jsx:9 ~ isXTurn:", isXTurn);

  const handleClick = (idx) => {
    const tempSquares = [...squares];
    if (tempSquares[idx] || getWinner(tempSquares)) {
      return;
    }
    tempSquares[idx] = isXTurn ? "X" : "O";
    setIsXTurn((prev) => !prev);
    setSquares(tempSquares);
  };

  useEffect(() => {
    const winnerArr = getWinner(squares);
    if (!winnerArr && squares.every(Boolean)) {
      setStatus("Match Draw!, Please restart the game.");
    } else if (winnerArr) {
      setStatus(`Winner is ${squares[winnerArr[0]]}, Please restart the game.`);
      const lineCss = getWinnerLineCss(winnerArr);
      setWinnerLineCss(lineCss);
    } else {
      setStatus(`Now ${isXTurn ? "X" : "O"}'s turn.`);
    }
  }, [squares, isXTurn]);

  const handleRestart = () => {
    setIsXTurn(true);
    setSquares(data);
    setWinnerLineCss("");
  };

  return (
    <div>
      <h3 className={styles.title}>Tic Tac Toe</h3>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.line} ${styles?.[winnerLineCss]}`} />
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
        </div>
        <h5 className={styles.status}>Message: {status}</h5>
        <button onClick={handleRestart}>Restart the game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
