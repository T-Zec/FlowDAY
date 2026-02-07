import React from 'react';
import Router from './router';
import TaskProvider from './contexts/TaskContext';
import ThemeProvider from './contexts/ThemeContext';

export default function App() {
    return (
        <ThemeProvider>
            <TaskProvider>
                <Router />
            </TaskProvider>
        </ThemeProvider>
    );
}