import React from "react";

export default function Reset(props) {
  return <button onClick={() => props.changeTheCountValue(40)}>Reset</button>;
}
