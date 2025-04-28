import React from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from  'react-router-dom';
import Home from './pages/Home';
import theme from './theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} />
  )
);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router}/>
        </ ThemeProvider>
    );
}

export default App;
