import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/features/counter';

export const Home = () => {
  const counter = useSelector((state) => state.counter);
  const { value } = counter;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Hey! I'm Home
      <br />
      <span>{value}</span>
      <button onClick={handleIncrement}>增加</button>
      <button onClick={handleDecrement}>減少</button>
    </div>
  );
};
