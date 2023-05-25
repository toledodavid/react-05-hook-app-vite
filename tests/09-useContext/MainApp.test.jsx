import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';


describe('Tests for <MainApp /> component', () => {

  test('Should show HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();

    const homeNavLinkTag = screen.getByRole('link', {current: 'page'});

    expect(screen.getByText('HomePage')).toBeTruthy();
    expect(homeNavLinkTag.className).toContain('active');
    expect(homeNavLinkTag.textContent).toBe('Home');
  });

  test('Should show AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();
    const aboutNavLinkTag = screen.getByRole('link', {current: 'page'});

    expect(screen.getByText('AboutPage')).toBeTruthy();
    expect(aboutNavLinkTag.className).toContain('active');
    expect(aboutNavLinkTag.textContent).toBe('About');
  });

  test('Should show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    const loginNavLinkTag = screen.getByRole('link', {current: 'page'});

    expect(screen.getByText('LoginPage')).toBeTruthy();
    expect(loginNavLinkTag.className).toContain('active');
    expect(loginNavLinkTag.textContent).toBe('Login');
  });


  test('Should show AboutPage for unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/asda']}>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();
    const aboutNavLinkTag = screen.getByRole('link', {current: 'page'});

    expect(screen.getByText('AboutPage')).toBeTruthy();
    expect(aboutNavLinkTag.className).toContain('active');
    expect(aboutNavLinkTag.textContent).toBe('About');
  });

});