import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "../../features/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  return (
    <>
      <h1 className="counterValue">Count: {count}</h1>
      <div className="counterContainer">
        <div>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter count to increase"
            value={val === 0 ? "" : val}
            onChange={(event) => setVal(event.target.value || 0)}
          />
          <button
            onClick={() => {
              dispatch(incrementByValue(Number(val)));
              setVal(0);
            }}
          >
            Increase by count: {val}
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(reset());
            setVal(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
export default Counter;
