import React, { useEffect } from "react";

export default function() {
  useEffect(() => {
    const onMouseMove = event => {
      console.log(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div>Recording mouse movements...</div>;
}
