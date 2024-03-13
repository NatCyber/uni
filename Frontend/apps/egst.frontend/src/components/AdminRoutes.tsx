import { IUser } from 'libs/shared/src/lib/types/types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminRoutes = () => {
  const location = useLocation();
  const userlocal = localStorage.getItem('user');
  let user: IUser = {
    email: '',
    role: '',
    fullName: '',
    id: '',
    token: '',
  };
  if (userlocal != null) {
    user = JSON.parse(userlocal);
  }
  return user.role === 'Admin' ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default AdminRoutes;
