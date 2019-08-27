import React, { useState } from "react";
import Heading from "./Heading";
import Reset from "./Reset";

function App() {
  const [count, updateCount] = useState(40);

  return (
    <div>
      <Heading text={`Count: ${count}`} />

      <button onClick={() => updateCount(count + 1)}>Increment</button>
      <button onClick={() => updateCount(count - 1)}>Decrement</button>
      <Reset changeTheCountValue={updateCount} />

      {count === 42 && (
        <p>
          You have found the answer to the ultimate question of life, the
          universe, and everything.
        </p>
      )}
    </div>
  );
}

export default App;
