import React from 'react';

export const Square = (props) => {
  return (
    <div
      className="border-2 rounded-md border-white flex items-center justify-center h-[100px] w-[100px] text-3xl text-white cursor-pointer"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
}

export default Square;
