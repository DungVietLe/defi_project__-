import cityApi from 'api/cityApi';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addUser } from 'store/userReducer/userReducer';
export function HomePage() {
  useEffect(() => {
    cityApi.getAll().then(res => {
      res.data.map(x => console.log(x));
    });
  }, []);
  const [user, setUser] = useState({
    name: '',
  });
  const data = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const renderUser = data.map(item => {
    return <li key={item.id}>{item.name}</li>;
  });
  const handleValue = (e: object | any) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleClick = () => {
    dispatch(addUser(user));
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <input type="text" onChange={handleValue} />
      <button onClick={handleClick}>Add</button>
      <h1>List user</h1>
      <ul>{renderUser}</ul>
    </>
  );
}
