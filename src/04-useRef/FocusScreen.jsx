import { useRef } from 'react';


export const FocusScreen = () => {

  const inputRef = useRef();

  const onClickBtn = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" ref={inputRef} className="form-control" placeholder="Your name"  />

      <button className="btn btn-primary mt-2" onClick={onClickBtn}>Set focus</button>
    </>
  );
}