import { useState } from "react";

export default function State() {
  const [counter, setcounter] = useState(0);

  const increment = () => {
    setcounter(counter + 1);
  };

  const [name, setname] = useState("Ali");

  const nameChange = (event) => {
    let newName = event.target.value;
    setname(newName);
  };

  return (
    <div className="testState">
      <h1>UseState Ex</h1>
      <div className="Counter">
        <h3>Counter Ex</h3>
        <div className="Text">{counter}</div>
        <div className="incrementBtn">
          <button onClick={increment}>Increment by 1</button>
        </div>
      </div>
      <div className="name">
        <h3>Change Name Ex</h3>
        <div className="NameInput">
          <input
            type="text"
            placeholder="Enter name .. "
            onChange={nameChange}
          />
          <div className="name">{name}</div>
        </div>
      </div>
    </div>
  );
}
