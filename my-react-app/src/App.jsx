// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useCounter } from "./customHooks/customHooksCounter";

function App() {
  const counter1 = useCounter();
  const counter2 = useCounter();

  return (
    <div>
      <h1> Counter 1 </h1>

      <section> 
        <h4> { counter1.count } </h4>
        <button onClick={counter1.increase}> + </button>
        <button onClick={counter1.decrease}> - </button>
      </section>


      <h2> Counter 2 </h2>

      <section>
        <h4> {counter2.count} </h4>
        <button onClick={counter2.increase}> + </button>
        <button onClick={counter2.decrease}> - </button>
      </section>
    </div>
  );
}

export default App;
