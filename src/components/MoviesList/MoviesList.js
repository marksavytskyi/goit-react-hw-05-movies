import MoviesItem from './MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';
const MoviesList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, title }) => (
        <MoviesItem key={id} id={id} title={title}></MoviesItem>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.array,
};
