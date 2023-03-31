import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

  const {counter} = useCounter();

  return(
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />

      <button className="btn btn-primary">+1</button>
      <button className="btn btn-secondary">Reset</button>
      <button className="btn btn-danger">-1</button>
    </>
  );
}