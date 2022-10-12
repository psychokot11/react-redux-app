import { useSelector } from "react-redux";

export default function Cat() {
  const number = useSelector((state) => state.counter.value);
  if (number === 17) {
    return (
      <>
        <div className="CounterApp_CatContainer">🙀{number}🙀</div>
      </>
    );
  } else {
    return null;
  }
}
