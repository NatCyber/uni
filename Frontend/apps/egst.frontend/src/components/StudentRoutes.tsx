import { IUser } from 'libs/shared/src/lib/types/types';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const StudentRoutes = () => {
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
  return user.role === 'Student' ? (
    <Outlet />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );

};

export default StudentRoutes;
