import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { fetch } from '../ApiFetch';

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const trendingMovie =
    'https://api.themoviedb.org/3/trending/all/day?api_key=977f926e593c9ca5548c1d2b3d2a0ca4';
  const imgLink = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const getTrending = async () => {
      setLoader(true);
      try {
        const getApi = await fetch(trendingMovie);
        setTopMovies(getApi.results);
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
      <ul>
        {topMovies.map(
          ({
            id,
            name,
            title,
            poster_path,
            release_date = [],
            first_air_date = [],
          }) => (
            <li key={id} id={id}>
              <img src={imgLink + poster_path} alt={name} />
              <p>
                {title ?? name}(
                {release_date !== ''
                  ? release_date.slice(0, 4)
                  : 'Year unknown'}
                {first_air_date !== ''
                  ? first_air_date.slice(0, 4)
                  : 'Year unknown'}
                )
              </p>
            </li>
          )
        )}
      </ul>
      {loader && (
        <ThreeDots
          color="#212121"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
        />
      )}
    </>
  );
};
