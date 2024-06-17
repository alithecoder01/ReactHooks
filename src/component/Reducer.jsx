import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementAndDisplay":
      return { count: state.count + 1, showText: (state.showText=true) };
    default:
      state;
  }
};

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

  return (
    <div className="IncremenDisplay">
      <h1>UseReducer Ex</h1>
      <div className="count">
        {state.showText && <p>Count is : {state.count}</p>}
        <br />
        <button
          onClick={() => {
            dispatch({ type: "IncrementAndDisplay" });
          }}
        >
          Increment & Display
        </button>
      </div>
    </div>
  );
}
