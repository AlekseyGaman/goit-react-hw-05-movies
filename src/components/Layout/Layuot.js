import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Header, Nav, LinkNav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
