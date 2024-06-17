import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };

    case "ShowText":
      return { count: state.count, showText: !state.showText };

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
        {state.count}
        <br />
        <button onClick={()=>{
            dispatch({type:"Increment"})
            dispatch({type:"ShowText"})
        }}>Increment & Display</button>
        {state.showText && <p>Text is Shown</p>}
      </div>
    </div>
  );
}
