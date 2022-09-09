import React from "react";
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <h1>You clicked {count} times</h1>
      <button
        onClick={() =>
          // setCount(count + 1)
          setCount((prev) => prev + 1)
        }
      >
        Tambah
      </button>
    </>
  );
}

export default Example;
