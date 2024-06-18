import { useLayoutEffect, useRef, useEffect } from "react";

export const LayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    inputRef.current.value = "Hasan";
  });

  // The first value is printed first, then the second value
  // which means = useLayoutEffect Faster, update data  before the page render to the user

  return (
    <div className="app">
      <h1>UseLayoutEffect Ex</h1>
      <input type="text" value={"Ali"} ref={inputRef} />
    </div>
  );
};
