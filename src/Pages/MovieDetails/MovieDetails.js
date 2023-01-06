import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetch from '../../components/ApiFetch';
import Loader from 'components/Loader/Loader';
import {
  Main,
  BackLink,
  InfoContainer,
  MainInfo,
  AdditionalContainer,
  AdditionalInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const location = useLocation();
  const returnBack = location.state ? location.state.from : `/movies`;

  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://ranobehub.org/img/ranobe/posters/default.jpg`;

  useEffect(() => {
    const searchMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=977f926e593c9ca5548c1d2b3d2a0ca4&language=en-US`;
    setLoader(true);
    const getMovie = async () => {
      try {
        const getDescription = await fetch(searchMovie);
        setMovie(getDescription);
      } catch {
        toast.error('Oops something wrong - try again');
      } finally {
        setLoader(false);
      }
    };
    getMovie();
  }, [id]);

  const {
    name,
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  if (!release_date) {
    return;
  }

  return (
    <>
      {loader && <Loader />}
      <Main>
        <InfoContainer id={id}>
          <img
            src={poster_path ? imgLink + poster_path : defaultImg}
            alt={original_title ?? name}
          />
          <MainInfo>
            <h1>
              {original_title ?? name} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>
              {genres.length
                ? genres.map(({ name }) => name).join(', ')
                : 'Unknown genres'}
            </p>
            <BackLink to={returnBack}>Go back</BackLink>
          </MainInfo>
        </InfoContainer>

        <AdditionalContainer>
          <h4>Additional Information</h4>
          <AdditionalInfo>
            <NavLink to="cast" state={{ from: returnBack }}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={{ from: returnBack }}>
              Reviews
            </NavLink>
          </AdditionalInfo>
        </AdditionalContainer>
      </Main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
