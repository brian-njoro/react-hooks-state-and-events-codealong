import React, { useState } from "react";
let color = "";
function Toggle() {
  const [isOn, setIsOn] = useState("OFF");
  const handleClick = () => {
    if (isOn === "OFF") {
      setIsOn("ON");
      color = "red";
    } else if (isOn === "ON") {
      setIsOn("OFF");
      color = "green";
    }
  };
  return (
    <button onClick={handleClick} style={{ background: color }}>
      {isOn}
    </button>
  );
}

/*
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
*/

export default Toggle;