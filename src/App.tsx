import React from 'react';
import { CssBaseline, ThemeProvider} from '@mui/material';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from  'react-router-dom';
import PokemonDetail from './components/PokemonDetail';
import Home from './pages/Home';
import theme from './theme';

//creates different pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Home />}/>
        <Route path="pokemon/:pokemonName" element={<PokemonDetail />} />
    </Route>
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
