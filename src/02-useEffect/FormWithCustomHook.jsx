import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });



  return(
  <>
    <h1>Form with custom Hook</h1>

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

        <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange} />

      </div>
    </div>


    { (username === 'dtoledoz2') && <Message /> }


  </>
  );
}