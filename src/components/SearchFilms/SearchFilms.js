import { Form, Input, Button } from './SearchFilms.styled';
import PropTypes from 'prop-types';

const SearchFilms = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="search" name="quaryName"></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchFilms;

SearchFilms.propTypes = {
  onSubmit: PropTypes.func,
};
