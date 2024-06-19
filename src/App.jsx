import { Effect } from "./component/Effect";
import { LayoutEffect } from "./component/LayoutEffect";
import { Reducer } from "./component/Reducer";
import { Ref } from "./component/Ref";
import State from "./component/State";
import { Context } from "./component/useContext/Context";
import { Zustand } from "./stateManagement/zustand";

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
      {/* useLayoutEffect Ex */}
      <LayoutEffect/>
      <hr />
      {/* useContext Ex */}
      <Context/>
      <hr />
      {/* zustand Ex*/}
      <Zustand/>
    </div>
  );
}
