import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/features/counter';
import { FETCH_DATA } from 'store/features/effects';
import { GET_USER_ID, GET_UUID } from 'store/features/user';

export const Home = () => {
  const counter = useSelector((state) => state.counter);
  const effects = useSelector((state) => state.effects);
  const user = useSelector((state) => state.user);
  const { value } = counter;
  const { data } = effects;
  const { id, uuid, isLoading } = user;
  console.log(user);

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
  const handleGetId = () => {
    dispatch(GET_USER_ID());
  };
  const handleGetUuid = () => {
    dispatch(GET_UUID());
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
      <div>This is id</div>
      <div>isLoading={`${isLoading}`}</div>
      <button onClick={handleGetId}>拿取ID</button>
      <div>{id.origin}</div>
      <button onClick={handleGetUuid}>拿取uuid</button>
      {/* <div>{uuid}</div> */}
    </div>
  );
};
