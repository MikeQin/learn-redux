import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { login } from './actions/login';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>Click (below) to toggle:</h2>
      <div onClick={() => (dispatch(login()))}>
        {isLogged ? <h3>logged in</h3> : <h3>logged out</h3>}
      </div>
    </div>
  );
}

export default App;
