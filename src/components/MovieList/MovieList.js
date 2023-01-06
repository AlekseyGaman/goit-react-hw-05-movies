import { Link } from 'react-router-dom';
import { MovieUl, MovieItem } from './MovieList.styled';

const MovieList = ({ movies, location }) => {
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`;

  return (
    <>
      <MovieUl>
        {movies.map(
          ({
            id,
            name,
            title,
            poster_path,
            release_date = [],
            first_air_date = [],
          }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={poster_path ? imgLink + poster_path : defaultImg}
                  alt={name}
                />
                <p>
                  {title ?? name} (
                  {release_date !== ''
                    ? release_date.slice(0, 4)
                    : 'Year unknown'}
                  {first_air_date !== ''
                    ? first_air_date.slice(0, 4)
                    : 'Year unknown'}
                  )
                </p>
              </Link>
            </MovieItem>
          )
        )}
      </MovieUl>
    </>
  );
};

export default MovieList;
