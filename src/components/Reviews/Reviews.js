import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetch } from '../../components/ApiFetch';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=977f926e593c9ca5548c1d2b3d2a0ca4&language=en-US&page=1`;

    const getReviews = async () => {
      setLoader(true);
      try {
        const getApi = await fetch(reviewsUrl);
        setReviews(getApi.results);
      } catch {
        toast.error('Oops something wrong - try again');
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [id]);

  return (
    <div>
      {loader && <Loader />}
      {reviews.length === 0 && !loader ? (
        <h1>Sorry, we didn't find anything</h1>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
