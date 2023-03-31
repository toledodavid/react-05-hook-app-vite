import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

  return(
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>+</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
      <button className="btn btn-danger" onClick={() => decrement(2)}>-</button>
    </>
  );
}