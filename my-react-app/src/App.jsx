// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useCounter } from "./customHooks/customHooksCounter";
import { useForm } from "./customHooks/custonHookForm";
import { useLocalStorage } from "./customHooks/useLocalStorage";

function App() {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();


  const { form, handleChange } = useForm();

  const counter1 = useCounter();
  const counter2 = useCounter();

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    setLocalStorage('user', form.user)
  }

  return (
    <div>
      <h1> Local Storage </h1>
      <section> 
        <h4> {getLocalStorage('user')} </h4>
      </section>

      
      <h1> Form </h1>

      <form onSubmit={(e) => handleSubmit(e)} action="">
        <input type="text" placeholder="user" name="user" onChange={handleChange} />
        <input type="text" placeholder="Edad" name="age" onChange={handleChange} />

        <button> save </button>
      </form>

      <section>
        <h4> El usuario: {form.user} </h4>
        <h4> La edad: {form.age} </h4>
      </section>


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
