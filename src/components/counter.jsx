// components/counter.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../count';

const Counter = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
