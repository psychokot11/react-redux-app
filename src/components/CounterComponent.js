import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";
import { decrement } from "../features/counterSlice";

export default function Counter() {
  const number = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`CounterApp_CounterButton CounterApp_CounterButton--${theme}`}
        onClick={() => {
          dispatch(decrement(1));
        }}
      >
        -
      </button>
      <span className="CounterApp_TextContainer">{number}</span>
      <button
        className={`CounterApp_CounterButton CounterApp_CounterButton--${theme}`}
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        +
      </button>
    </>
  );
}
