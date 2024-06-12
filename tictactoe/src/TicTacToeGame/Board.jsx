import React, { useState, useEffect } from 'react';
import Square from './Square_temp';

export const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
    }
  }, [state]);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (state[index] !== null || winner) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O';
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center">
      {winner ? (
        <>
          <h2 className="text-white text-2xl font-bold mb-5">{winner} won the game!!</h2>
          <button
            onClick={handleReset}
            className="bg-gradient-to-r from-[#41295a] to-[#2F0743] text-white font-medium py-2 px-4 rounded-md"
          >
            Play again
          </button>
        </>
      ) : (
        <>
          <h4 className="text-white mb-5 text-xl">Player {isXTurn ? 'X' : 'O'}'s turn</h4>
          <div className="grid grid-cols-3 gap-2">
            {state.map((value, index) => (
              <Square key={index} onClick={() => handleClick(index)} value={value} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
