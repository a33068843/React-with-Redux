import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/features/counter';
import { FETCH_DATA } from 'store/features/effects';

export const Home = () => {
  const counter = useSelector((state) => state.counter);
  const effects = useSelector((state) => state.effects);
  const { value } = counter;
  const { data } = effects;

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleFetchData = () => {
    dispatch(FETCH_DATA());
    console.log(data);
  };

  return (
    <div>
      Hey! I'm Home
      <br />
      <span>{value}</span>
      <button onClick={handleIncrement}>增加</button>
      <button onClick={handleDecrement}>減少</button>
      <div>Get the Data</div>
      {/* <div>{data}</div> */}
      <button onClick={handleFetchData}>拿取資料</button>
    </div>
  );
};
