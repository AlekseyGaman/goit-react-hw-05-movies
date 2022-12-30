import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>}>
          <Route path=":movieId" element={<div>movieId</div>}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2500} />
    </div>
  );
};
