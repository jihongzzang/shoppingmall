// eslint-disable-next-line import/no-extraneous-dependencies
import { render as originalRender } from '@testing-library/react';

import React from 'react';

import {
  MemoryRouter,
  RouterProvider,
  createMemoryRouter,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Theme as RadixThemeProvider } from '@radix-ui/themes';

import defaultTheme from './styles/defaultTheme';

import routes from './routes';

type Option = {
  path?: string;
};

export function render(
  element: React.ReactElement,
  { path = '/' }: Option = {},
) {
  return originalRender(
    <MemoryRouter initialEntries={[path]}>
      <ThemeProvider theme={defaultTheme}>
        <RadixThemeProvider>{element}</RadixThemeProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );
}

export function renderRouter(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });

  return originalRender(
    <ThemeProvider theme={defaultTheme}>
      <RadixThemeProvider>
        <RouterProvider router={router} />
      </RadixThemeProvider>
    </ThemeProvider>,
  );
}
