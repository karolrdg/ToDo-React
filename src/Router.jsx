import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { QuemSou } from './pages/QuemSou';
import { PaginaErro } from './pages/PaginaErro';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/quemsou', element: <QuemSou /> },
      { path: '*', element: <PaginaErro /> }, // erro 404
    ],
  },
]);