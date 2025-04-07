import { useState } from "react";

export const CounterApp = () => {

  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter(counter + 1);
    console.log("click!")
  }

  return <>
    <h2>El valor del counter es: {counter}</h2>
    <button onClick={() => counterIncrement()}  >incrementar contador + 1</button >
  </>
}
