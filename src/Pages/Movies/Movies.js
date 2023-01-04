import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { fetch } from '../../components/ApiFetch';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [totalMovies, setTotalMovies] = useState(0);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('search') ?? '';
  const { register, handleSubmit } = useForm();
  const location = useLocation();

  const onSubmit = value => {
    console.log(value.name);
    // console.log(value);
    if (query === value) {
      return;
    }
    setSearchParams({ search: value.name });
    setMovies([]);
    setCurrentPage(1);
    setQuery(value.name);
  };

  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=977f926e593c9ca5548c1d2b3d2a0ca4&language=en-US&query=${query}&page=${currentPage}&include_adult=false`;
    setQuery(searchName);
    if (!query) {
      return;
    }
    const getMovie = async () => {
      try {
        setLoader(true);
        const searchMovies = await fetch(searchUrl);
        setMovies(prevMovies => [...prevMovies, ...searchMovies.results]);
        setTotalMovies(searchMovies.total_results);
        if (currentPage === 1) {
          searchMovies.total_results === 0
            ? toast.error("Oops, we didn't find anything")
            : toast.success(
                `Great, we found ${searchMovies.total_results} movies`
              );
        }
      } catch {
        toast.error('Oops something wrong - try again');
      } finally {
        setLoader(false);
      }
    };
    getMovie();
  }, [currentPage, query, searchName]);

  const loadMoreMovies = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const totalPages = Math.round(totalMovies / movies.length);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name', { required: true })}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <button type="submit">
            <FaSearch size={20} />
          </button>
        </form>
      </div>
      <MovieList movies={movies} location={location} />
      {movies.length !== 0 && totalPages !== 1 && (
        <button onClick={loadMoreMovies} />
      )}

      {loader && <Loader />}
      <ToastContainer autoClose={2500} />
    </>
  );
};
