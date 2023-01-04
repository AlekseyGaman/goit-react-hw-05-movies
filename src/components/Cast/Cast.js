import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetch } from '../../components/ApiFetch';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);

  const { id } = useParams();
  const imgLink = 'https://image.tmdb.org/t/p/w300';
  const defaultImg = `https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`;

  useEffect(() => {
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=977f926e593c9ca5548c1d2b3d2a0ca4&language=en-US`;

    const getCast = async () => {
      setLoader(true);
      try {
        const getFetch = await fetch(castUrl);
        setCast(getFetch.cast);
      } catch {
        toast.error('Oops something wrong - try again');
      } finally {
        setLoader(false);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      {loader && <Loader />}
      {cast.length === 0 && !loader ? (
        <h1>Sorry, we didn't find anything</h1>
      ) : (
        <ul>
          {cast.length === 0 && !loader ? (
            <h3>Sorry, we didn't find anything</h3>
          ) : (
            cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img
                  loading="lazy"
                  src={profile_path ? imgLink + profile_path : defaultImg}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character ? character : 'undefined'}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );
};
