import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import { GlobalStyle } from './GlobalStyled';
import { Layout } from './Layout/Layuot';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { MovieDetails } from '../Pages/MovieDetails/MovieDetails';
import { Movies } from '../Pages/Movies/Movies';

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
