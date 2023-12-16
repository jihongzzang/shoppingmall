import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Theme as RadixThemeProvider } from '@radix-ui/themes';

import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';

import DefaultTheme from './styles/defaultTheme';

import '@radix-ui/themes/styles.css';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <RadixThemeProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RadixThemeProvider>
    </ThemeProvider>
  );
}
