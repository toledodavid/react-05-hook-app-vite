import { useEffect } from "react";


export const Message = () => {

  useEffect(() => {
    // console.log('Message Mounted');

    const onMouseMove = ({x, y}) => {
      const coords = {x, y};
      console.log(coords);
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      // console.log('Message Unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []);


  return(
    <>
      <h3>User already exists</h3>
    </>
  );
}