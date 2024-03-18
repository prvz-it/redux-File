import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../slice/counterSlice';
import './Menu.css';

const Menu = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => state.counter.value)
  return (
    <>
        <div className="main">
            <button onClick={() => dispatch(increment())}>+</button>
            <div>
                <h1>{ data }</h1>
            </div>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    </>
  )
}

export default Menu