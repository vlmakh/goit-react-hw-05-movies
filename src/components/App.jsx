import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { ThemeProvider } from 'theme-ui';
import { darkTheme } from '../theme';
// import { lightTheme } from '../theme';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieItem = lazy(() => import('pages/MovieItem/MovieItem'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const PageError = lazy(() => import('pages/PageError/PageError'));



export const App = () => {
  return (
   <ThemeProvider theme={darkTheme}>   
      <Routes >
        <Route  path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            {/* <Route index element={<div>Overview</div>} /> */}
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<PageError />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
