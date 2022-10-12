import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/CounterComponent";
import Cat from "./components/CatComponent";
import { switchTheme } from "./features/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className={`CounterApp_Container CounterApp_Container--${theme}`}>
      <h1>Counter App</h1>
      <Counter />
      <Cat />
      <button
        className={`CounterApp_ThemeButton CounterApp_ThemeButton--${theme}`}
        onClick={() => {
          if (theme === "light") {
            dispatch(switchTheme("dark"));
          } else {
            dispatch(switchTheme("light"));
          }
        }}
      >
        DARK / LIGHT
      </button>
    </div>
  );
}

export default App;
