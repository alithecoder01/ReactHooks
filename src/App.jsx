import { Effect } from "./component/Effect";
import { Reducer } from "./component/Reducer";
import { Ref } from "./component/Ref";
import State from "./component/State";

export default function App() {
  return (
    <div>
      {/* useState Ex */}
      <State />
      <hr />
      {/* useReducer Ex */}
      <Reducer />
      <hr />
      {/* useEffect Ex */}
      <Effect />
      <hr />
      {/* useRef Ex */}
      <Ref />
      <hr />
    </div>
  );
}
