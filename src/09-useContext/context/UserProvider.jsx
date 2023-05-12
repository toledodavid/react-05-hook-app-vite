import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: 123,
//   name: 'David Toledo',
//   email: 'david@gmail.com'
// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState();

  return(
    // <UserContext.Provider value={{hello: 'World', user}}>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}