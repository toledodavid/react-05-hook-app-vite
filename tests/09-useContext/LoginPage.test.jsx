import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Test for <LoginPage /> component', () => {

  test('Should show the component without user information', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );

    // screen.debug();
    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('Should call setUser when button is clicked', () => {
    const userInfo = {id: 12, name: 'Alex', email: 'alex@gmail.com'};
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonSetUser = screen.getByRole('button');

    fireEvent.click(buttonSetUser);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(userInfo);
  });

});