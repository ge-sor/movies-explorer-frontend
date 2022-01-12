import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateLoggedRoute = () => {
    return localStorage.getItem('token') ? <Navigate to="/" /> : <Outlet />;
}