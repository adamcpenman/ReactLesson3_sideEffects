import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import Reset from "./Reset";

function App() {
  const [count, updateCount] = useState(1);
  const [dogImages, updateDogImages] = useState([]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    if (count < 0) {
      updateDogImages(["http://placekitten.com/200/300"]);
    } else {
      axios
        .get(`https://dog.ceo/api/breeds/image/random/${count}`)
        .then(res => updateDogImages(res.data.message))
        .catch(err => console.log(err));
    }
  }, [count]);

  // useEffect (() => {
  //     setTimeout(() => {
  //       updateCount(5);
  //     }, 5000)
  // }, [])

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

      <div>
        {dogImages.map((dogImage, index) => (
          <img key={index} src={dogImage} alt="Random Dog" />
        ))}
        {/* <img src={dogImage} alt="Radomn Dog" /> */}
      </div>
    </div>
  );
}

export default App;
