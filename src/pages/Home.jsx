import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/features/counter';

export const Home = () => {
  const counter = useSelector((state) => state.counter);
  const { value } = counter;

  return (
    <div>
      Hey! I'm Home
      <br />
      <span>{value}</span>
    </div>
  );
};
