import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counterSlice";
import { decrement } from "../features/counterSlice";

export default function Counter() {
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(number);

  return (
    <>
      <button
        onClick={() => {
          dispatch(decrement(1));
          console.log(number + "onClicked");
        }}
      >
        -
      </button>
      <p>{number}</p>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        +
      </button>
    </>
  );
}
