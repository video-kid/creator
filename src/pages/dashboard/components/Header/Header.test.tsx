import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders Header and checks account menu toggler button', () => {
  render(
    <Header
      user={{ name: 'a a', id: '1' }}
      logOut={() => null}
    />
  );
  const menuActionButton = screen.getByTestId('menu-button');
  expect(screen.getByText(/Creator/i)).toBeInTheDocument();
  expect(screen.getByTestId('avatar')).toBeInTheDocument();
  expect(screen.queryByTestId('menu-wrapper')).toBeNull();
  fireEvent.click(menuActionButton);
  expect(screen.getByTestId('menu-wrapper')).toBeInTheDocument();
  fireEvent.click(menuActionButton);
  expect(screen.queryByTestId('menu-wrapper')).toBeNull();
});
