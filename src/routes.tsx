import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './error-page';
import DashboardPage from './pages/dashboard/DashboardPage';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/login/LoginPage';
import CreatorPage from './pages/dashboard/pages/creator/CreatorPage';

export const routes = createBrowserRouter([
  { path: '/', errorElement: <ErrorPage />, element: <LandingPage /> },
  { path: '/login', errorElement: <ErrorPage />, element: <LoginPage /> },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: <DashboardPage />,
    children: [
      { index: true, path: '/dashboard/creator', element: <CreatorPage /> },
    ],
  },
]);
