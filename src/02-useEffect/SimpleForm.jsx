import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({username: 'dtoledoz', email: 'david@ucol.mx'});

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return(
  <>
    <h1>Simple Form</h1>

    <div className="card" style={{width: '20rem'}}>
      <div className="card-body">
        <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

        <input type="email"
                className="form-control mt-2"
                placeholder="david@ucol.mx"
                name="email"
                value={email}
                onChange={onInputChange} />
      </div>
    </div>


    { (username === 'dtoledoz2') && <Message /> }


  </>
  );
}