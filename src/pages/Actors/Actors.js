import { SearchInput, Background, SearchForm } from './Actors.styled';
import { List, Item } from '../Home/Home.styled';
import { SearchBtn, ClearBtn } from 'components/Buttons/Buttons';
import { PaginationStyled } from 'components/Pagination/Pagination';
import { ActorCard } from 'components/ActorCard/ActorCard';
import 'index.css';
import { NavLink } from 'react-router-dom';
import { PageWrap, Box } from 'components/Box/Box';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchActors } from 'services/api';
import { IoIosCloseCircle } from 'react-icons/io';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export default function Actors({ currentLang }) {
  const [actorsFound, setActorsFound] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('search');
  const currentPage = searchQuery.get('page');
  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);
  const [input, setInput] = useState(query ? query : '');
  const location = useLocation();
  // console.log(location);
  const [totalPages, setTotalPages] = useState(1);
  const noResults =
    currentLang === 'uk-UA'
      ? 'Немає результатів за вашим пошуковим запитом'
      : 'No results found due to your search inquiry';
  const emptyQuery =
    currentLang === 'uk-UA'
      ? 'Порожній запит. Введіть щось для пошуку'
      : 'Empty query. Please input something for search';

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchActors(query, page, currentLang)
      .then(data => {
        if (!data.results.length) {
          return toast.error(noResults);
        } else {
          // console.log(data.results);
          // setTotalFound(data.total_results);
          setTotalPages(data.total_pages);
          setActorsFound([...data.results]);
        }
      })
      .catch(error => console.log(error));
  }, [currentLang, noResults, page, query]);

  const onSearchInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!input.trim()) {
      return toast.error(emptyQuery);
    }
    if (input.trim() !== query) {
      setPage(1);
      setActorsFound([]);
      setSearchQuery({ search: input.trim(), page: Number(page) });
    }
  };

  const clearAll = () => {
    setInput('');
    setActorsFound([]);
    setSearchQuery({ search: '', page: 0 });
    setTotalPages(0);
  };

  const handlePageClick = e => {
    // console.log(e);
    setPage(e.selected + 1);
    setSearchQuery({ search: input, page: e.selected + 1 });
  };

  return (
    <PageWrap>
      <SearchForm onSubmit={handleSubmit}>
        <Box position="relative" flexGrow="1">
          <SearchInput
            type="text"
            value={input}
            onChange={onSearchInput}
            placeholder={currentLang === 'uk-UA' ? "Ім'я" : 'Name'}
          />
          <ClearBtn type="button" onClick={clearAll}>
            <IoIosCloseCircle size="20" />
          </ClearBtn>
        </Box>
        <SearchBtn type="submit">
          {currentLang === 'uk-UA' ? 'Пошук' : 'Search'}
        </SearchBtn>
      </SearchForm>

      {!actorsFound.length && <Background />}

      <List>
        {actorsFound.map(actor => (
          <Item key={actor.id}>
            <NavLink to={`${actor.id}`} state={{ from: location }}>
              <ActorCard actor={actor} />
            </NavLink>
          </Item>
        ))}
      </List>

      {actorsFound.length > 0 && (
        <PaginationStyled
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          disabledLinkClassName="disabled"
          activeClassName="activePage"
          initialPage={page - 1}
        />
      )}
    </PageWrap>
  );
}

Actors.propTypes = {
  currentLang: PropTypes.string.isRequired,
};
