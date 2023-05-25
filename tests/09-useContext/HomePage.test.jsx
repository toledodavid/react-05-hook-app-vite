import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe('Tests for <HomePage /> component', () => {

  const userInfo = {
    id: 1,
    name: 'David',
    email: 'david@ucol.mx'
  };

  test('Should show the component without user information', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );

    // screen.debug();

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should show thw component with user information', () => {
    render(
      <UserContext.Provider value={{user: userInfo}}>
        <HomePage />
      </UserContext.Provider>
    );

    // screen.debug();
    const h1Tag = screen.getByRole('heading', {level: 1});
    const preTag = screen.getByLabelText('pre');

    expect(h1Tag.textContent).toContain(userInfo.name);
    expect(JSON.stringify(JSON.parse(preTag.innerHTML))).toBe(JSON.stringify(userInfo));
  });

});