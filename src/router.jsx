import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import AllTasks from "./pages/AllTasks"
import Completed from "./pages/Completed"
import Settings from './pages/Settings';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='tasks' element={<AllTasks />} />
                <Route path='completed' element={<Completed />} />
                <Route path='settings' element={<Settings />} />
            </Route>
        </Routes>
    );
}