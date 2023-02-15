import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Oval } from 'react-loader-spinner';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={<Oval width={200} height={200} wrapperClass="oval-loader" />}
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
