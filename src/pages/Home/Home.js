// import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTrends } from 'services/api';
import css from './Home.module.css';
import imageplaceholder from 'images/noposter.jpg';

export const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrends().then(data => {
      // console.log(data.results);
      setTrends(data.results);
    });
  }, []);

  // console.log(location);

  return (
    <Box p={3} mt="48px" textAlign="center">
      <h2>Trending Today</h2>

      <ul className={css.trendList}>
        {trends.map(trend => (
          <li key={trend.id}>
            <Link to={`movies/${trend.id}`} state={{ from: location }}>
              <div className={css.trend__thumb}>
                <img
                  className={css.trend__img}
                  width="160"
                  src={
                    trend.poster_path
                      ? `https://image.tmdb.org/t/p/w200${trend.poster_path}`
                      : imageplaceholder
                  }
                  alt={trend.title ?? trend.name}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};