import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import LoaderComponenet from '../components/Loader'
const Login = lazy(() => import('../pages/LoginPage'));
const Signup = lazy(() => import('../pages/RegisterPage'));
const Dashboard = lazy(() => import('../pages/DashboardPage'));
const NotFound = lazy(() => import('../pages/404.js'));


const RouterSetup = () => {
  return (
    <Suspense fallback={<LoaderComponenet cls='h-screen' />}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
    </Suspense>
  );
};

export default RouterSetup;
