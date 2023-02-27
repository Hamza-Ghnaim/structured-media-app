import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Albums = lazy(() => import('../pages/Loggedin/AlbumsRouter'));

export const MainRouter = [
    {
    path: '/albums/*',
    name: 'albums',
    component: Albums,
    }
];