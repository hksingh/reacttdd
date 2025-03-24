import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders without crashing', () => {
  render(<Header />); 
});
