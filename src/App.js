import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Reset from "./Reset";

function App() {
  const [count, updateCount] = useState(40);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

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
