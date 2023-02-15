import { Link } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.string,
};
