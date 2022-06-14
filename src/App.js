import { useDispatch, useSelector } from "react-redux";
import { decrementVal, incrementVal } from "./redux/action-creator";
import "./styles.css";

export default function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(incrementVal());
  };
  const handleDec = () => {
    dispatch(decrementVal());
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleChange}>INCREMENT</button>

      <button onClick={handleDec}>DECREMENT</button>
    </div>
  );
}
