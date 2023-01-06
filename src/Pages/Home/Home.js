import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetch from '../../components/ApiFetch';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const trendingMovie =
      'https://api.themoviedb.org/3/trending/all/day?api_key=977f926e593c9ca5548c1d2b3d2a0ca4';
    const getTrending = async () => {
      setLoader(true);
      try {
        const getApi = await fetch(trendingMovie);
        setMovies(getApi.results);
      } catch {
        toast.error('Oops something wrong - try again');
      } finally {
        setLoader(false);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      {movies && <MovieList movies={movies} location={location} />}
      {loader && <Loader />}
    </>
  );
};

export default Home;
