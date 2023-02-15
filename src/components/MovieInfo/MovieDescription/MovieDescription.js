import PropTypes from 'prop-types';

import {
  Wrapper,
  Image,
  Description,
  Title,
  Popular,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresText,
} from './MovieDescription.styled';

const MovieDescription = ({
  film: { title, poster_path, overview, vote_average, genres },
}) => {
  return (
    <Wrapper>
      <Image
        src={`http://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      ></Image>
      <Description>
        <Title>{title}</Title>
        <Popular>User Score: {Math.round(vote_average * 10)}%</Popular>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewText>{overview}</OverviewText>
        <GenresTitle>Genres:</GenresTitle>
        <GenresText>
          {genres
            .reduce((acc, el) => {
              acc.push(el.name);
              return acc;
            }, [])
            .join(', ')}
        </GenresText>
      </Description>
    </Wrapper>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
