import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { BREED_LIST_URL, SPECIAL_NEEDS_URL } from '../../utils/paths';
import MyCard from '../../components/MyCard/MyCard';
import '../../components/Pagination/Pagination.scss';
import './Dogs.scss';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 12,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Dogs = () => {
  const classes = useStyles();
  const [dogsList, setDogsList] = useState([]);
  const [specialNeeds, setspecialNeeds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const dogsPerPage = 12;
  const pagesVisited = pageNumber * dogsPerPage;

  const displayDogs = filteredData
    ? filteredData
        .slice(pagesVisited, pagesVisited + dogsPerPage)
        .map((dog, i) => {
          return <MyCard key={i} dog={dog} needs={specialNeeds} />;
        })
    : dogsList.slice(pagesVisited, pagesVisited + dogsPerPage).map((dog, i) => {
        return <MyCard key={i} dog={dog} needs={specialNeeds} />;
      });

  const pageCount = Math.ceil(dogsList.length / dogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleChange = (event) => {
    let term = event.target.value;
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchDogs = async () => {
      const { data } = await axios.get(BREED_LIST_URL);
      setDogsList(data);
    };

    const fetchSpecialNeeds = async () => {
      const { data } = await axios.get(SPECIAL_NEEDS_URL);
      setspecialNeeds(data);
    };

    fetchDogs();
    fetchSpecialNeeds();
  }, []);

  useEffect(() => {
    console.log(searchTerm);
    if (dogsList.length > 0) {
      const filteredDogs = dogsList.filter((dog, i) => {
        if (dog.name !== undefined)
          return dog.name.toLowerCase().indexOf(searchTerm) > -1;
      });
      setFilteredData(filteredDogs);
    }
  }, [searchTerm]);

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </div>
      <div className='dogs__row'>{displayDogs}</div>
      <div>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtn'}
          nextLinkClassName={'nextBtn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          marginPagesDisplayed={3}
        />
      </div>
    </div>
  );
};

export default Dogs;
