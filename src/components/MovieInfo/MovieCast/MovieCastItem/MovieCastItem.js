import { Item, Image, Name, Character } from './MovieCastItem.styled';

import PropTypes from 'prop-types';
const MovieCastItem = ({ cast: { name, character, profile_path } }) => {
  return (
    profile_path && (
      <Item>
        <Image
          src={`http://image.tmdb.org/t/p/w185${profile_path}`}
          alt={name}
        ></Image>
        <Name>{name}</Name>
        <Character>Character: {character}</Character>
      </Item>
    )
  );
};

export default MovieCastItem;

MovieCastItem.propTypes = {
  cast: PropTypes.object,
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};
