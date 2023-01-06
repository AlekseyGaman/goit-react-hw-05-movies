import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyled';
import Layout from './Layout/Layuot';
import Home from '../Pages/Home/Home';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { MovieDetails } from '../Pages/MovieDetails/MovieDetails';

const Movies = lazy(() => import('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
