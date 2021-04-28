import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import { BREED_LIST_URL } from "../../utils/paths";
import MyCard from "../../components/MyCard/MyCard";
import "../../components/Pagination/Pagination.scss";
import "./Dogs.scss";
import MyModal from "../../components/MyModal/MyModal";

const Dogs = () => {
  const [dogsList, setDogsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const dogsPerPage = 10;
  const pagesVisited = pageNumber * dogsPerPage;

  const displayDogs = dogsList
    .slice(pagesVisited, pagesVisited + dogsPerPage)
    .map((dog, i) => {
      return <MyCard key={i} dog={dog} />;
    });

  const pageCount = Math.ceil(dogsList.length / dogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchDogs = async () => {
      const { data } = await axios.get(`${BREED_LIST_URL}?limit=10`);
      setDogsList(data);
    };
    fetchDogs();
  }, []);

  return (
    <div>
      <div className='dogs__row'>{displayDogs}</div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          marginPagesDisplayed={3}
        />
      </div>
    </div>
  );
};

export default Dogs;
