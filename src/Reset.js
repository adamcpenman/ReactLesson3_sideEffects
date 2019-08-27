import React from "react";

export default function Reset(props) {
  return <button onClick={() => props.changeTheCountValue(1)}>Reset</button>;
}
