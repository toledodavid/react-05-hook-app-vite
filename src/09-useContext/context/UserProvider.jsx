import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'David Toledo',
  email: 'david@gmail.com'
}

export const UserProvider = ({children}) => {
  return(
    <UserContext.Provider value={{hello: 'World', user}}>
      {children}
    </UserContext.Provider>
  );
}