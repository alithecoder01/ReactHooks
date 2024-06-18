import { useRef } from "react";

export const Ref = () => {
  const first = useRef(null);

  const onClick = () => {
    first.current.focus();
    console.log(first.current.value);
    first.current.value = "";
  };

  return (
    <div>
      <h1>UseRef Ex</h1>
      <input type="text" placeholder="Enter anything.. " ref={first} />
      <button onClick={onClick}>Click to display</button>
    </div>
  );
};
