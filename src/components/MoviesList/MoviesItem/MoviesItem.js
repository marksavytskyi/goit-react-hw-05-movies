import { useLocation } from 'react-router-dom';
import { Link } from './MoviesItem.styled';
import PropTypes from 'prop-types';

const MoviesItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  );
};
export default MoviesItem;

MoviesItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
