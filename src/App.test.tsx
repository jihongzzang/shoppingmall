import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

test('App', async () => {
  render(<App />);

  waitFor(() => {
    screen.getByText(/Shop/);
  });
});
