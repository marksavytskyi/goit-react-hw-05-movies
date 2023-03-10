import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { List, Item, Author, Content } from './MovieReviews.styled';

const MovieReviews = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const {
          data: { results },
        } = await getMovieReviews(id);
        setResults(results);
      } catch (error) {}
    }

    fetchMovieReviews();
  }, [id]);
  return (
    <>
      {results.length ? (
        <List>
          {results.map(({ author, content, id }) => {
            return (
              <Item key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </Item>
            );
          })}
        </List>
      ) : (
        <h2>Don`t have any reviews</h2>
      )}
    </>
  );
};

export default MovieReviews;
