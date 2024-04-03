import { render, screen } from '@testing-library/react';
import CreatorPage from './CreatorPage';

test('renders Creator Page', () => {
  render(<CreatorPage />);
  const heeaderText = screen.getByText(/Create Preview/i);
  expect(heeaderText).toBeInTheDocument();
});
