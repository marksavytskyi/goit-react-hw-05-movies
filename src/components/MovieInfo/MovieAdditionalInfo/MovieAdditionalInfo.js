import { Wrapper, Title, List, Item, Link } from './MovieAdditionalInfo.styled';
export const MovieAdditionalInfo = () => {
  return (
    <Wrapper>
      <Title>Additional info</Title>
      <List>
        <Link to="cast">
          <Item>Cast</Item>
        </Link>

        <Link to="reviews">
          <Item>Reviews</Item>
        </Link>
      </List>
    </Wrapper>
  );
};
export default MovieAdditionalInfo;
