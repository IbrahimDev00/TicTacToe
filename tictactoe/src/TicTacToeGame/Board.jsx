import React from 'react';
import Square from './Square_temp';

export const Board = () => {
  return (
    <div>
      <div className='flex flex-row justify-evenly align-middle'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='flex flex-row justify-evenly align-middle'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='flex flex-row justify-evenly align-middle'>
        <Square />
        <Square />
        <Square />
      </div>

    </div>
  );
}

export default Board;
