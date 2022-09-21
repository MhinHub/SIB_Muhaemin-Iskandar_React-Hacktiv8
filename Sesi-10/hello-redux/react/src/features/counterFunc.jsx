import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function CounterFunc() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    return (
        <div className="demo">
            <h1>Functional Component Counter</h1>
            <h1 id="counter">{count}</h1>
            <button id="decrement" onClick={() => dispatch(decrement())}>-</button>
            {' '}
            <button id="increment" onClick={() => dispatch(increment())}>+</button>
            {' '}
            <input type="number" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
            <button id="incrementByAmount" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        </div>
    )



    // return (
    //     <div className="demo">
    //         <h1>Function Component Counter</h1>
    //         <h1 id="counter">{localCount}</h1>
    //         <button id="decrement" onClick={() => dispatch(decrement())}>-</button>
    //         {' '}
    //         <button id="increment" onClick={() => dispatch(increment())}>+</button>
    //         {' '}
    //         <input type="number" value={incrementAmount} onChange={e => setIncrementAmount(Number(e.target.value) || 0)} />
    //         <button id="incrementByAmount" onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add Amount</button>
    //     </div>
    // )

}

