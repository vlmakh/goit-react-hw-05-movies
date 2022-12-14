import { Outlet } from 'react-router-dom';
import {
  Layout,
  Header,
  HeaderContainer,
  HeaderLink,
  Nav,
  NavMobile,
  LangBtn,
  Footer,
  MyMailLink,
} from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import logo from 'images/logo.png';
import { ThreeCircles } from 'react-loader-spinner';
import { HiSun, HiMoon } from 'react-icons/hi2';
import {
  MdMovie,
  MdMovieFilter,
  MdPhotoCameraFront,
  MdMonochromePhotos,
} from 'react-icons/md';
import { ThemeBtn } from 'components/Buttons/Buttons';
import PropTypes from 'prop-types';

export const SharedLayout = ({
  toggleTheme,
  currentTheme,
  currentLang,
  turnEnLang,
  turnUaLang,
}) => {
  return (
    <Layout>
      <Header>
        <HeaderContainer>
          <Nav>
            <HeaderLink to="/">
              <img src={logo} alt="logo" width="32" height="32" />
            </HeaderLink>
            <HeaderLink to="/movies">
              {currentLang === 'uk-UA' ? 'Фільми' : 'Movies'}
            </HeaderLink>
            <HeaderLink to="/actors">
              {currentLang === 'uk-UA' ? 'Актори' : 'Actors'}
            </HeaderLink>
            <HeaderLink to="/library">
              {currentLang === 'uk-UA' ? 'Бібліотека' : 'Library'}
            </HeaderLink>
            <HeaderLink to="/album">
              {currentLang === 'uk-UA' ? 'Фотоальбом' : 'Photoalbum'}
            </HeaderLink>
          </Nav>

          <NavMobile>
            <HeaderLink to="/">
              <img src={logo} alt="logo" width="32" height="32" />
            </HeaderLink>
            <HeaderLink to="/movies">
              <MdMovie size="24" />
            </HeaderLink>
            <HeaderLink to="/actors">
              <MdPhotoCameraFront size="24" />
            </HeaderLink>
            <HeaderLink to="/library">
              <MdMovieFilter size="24" />
            </HeaderLink>
            <HeaderLink to="/album">
              <MdMonochromePhotos size="24" />
            </HeaderLink>
          </NavMobile>

          <Box display="flex" alignItems="center">
            <Box display="flex" mr={3} height="48px">
              <LangBtn
                type="button"
                onClick={turnEnLang}
                disabled={currentLang === 'en-US' ? true : false}
              >
                EN
              </LangBtn>
              <LangBtn
                type="button"
                onClick={turnUaLang}
                disabled={currentLang === 'uk-UA' ? true : false}
              >
                UA
              </LangBtn>
            </Box>

            <ThemeBtn onClick={toggleTheme}>
              {currentTheme === 'darkTheme' ? (
                <HiMoon size="20" />
              ) : (
                <HiSun size="20" />
              )}
            </ThemeBtn>
          </Box>
        </HeaderContainer>
      </Header>

      <Suspense
        fallback={
          <Box width="100vw" display="flex" justifyContent="center" pt={7}>
            <ThreeCircles
              height="120"
              width="120"
              color="#bcc3ce"
              ariaLabel="Three-Circles-rotating"
              visible={true}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>

      <Footer>
        <p>Made by</p>
        <MyMailLink href="mailto:vlmakh@gmail.com">vlmakh@gmail.com</MyMailLink>
      </Footer>
    </Layout>
  );
};

SharedLayout.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
  currentLang: PropTypes.string.isRequired,
  turnEnLang: PropTypes.func.isRequired,
  turnUaLang: PropTypes.func.isRequired,
};
