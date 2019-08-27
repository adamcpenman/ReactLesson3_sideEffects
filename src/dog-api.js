import axios from "axios";

export function getDogImages(count, setter) {
  if (count < 0) {
    setter(["https://placekitten.com/200/100"]);
  } else {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${count}`)
      .then(res => setter(res.data.message))
      .catch(err => console.log(err));
  }
}
