import React from "react";

const Pagination = ({ paginate, postsPerPage, totalposts, currentPage }) => {
  const totalButtons = Math.ceil(totalposts / postsPerPage);
  let pageNumbers = [];

  for (let i = 1; i <= totalButtons; i++) {
    pageNumbers.push(i);
  }
  function handelNext() {
    if (currentPage !== totalButtons) {
      paginate(currentPage + 1);
    }
  }
  function handelPrev() {
    if (currentPage !== 1) {
      paginate(currentPage - 1);
    }
  }

  return (
    <>
      <button>
        <a href="!#" onClick={handelPrev}>
          Prev
        </a>
      </button>
      {pageNumbers.map((number) => {
        return (
          <button
            style={currentPage === number ? { backgroundColor: "blue" } : {}}
            key={number}
            onClick={(e) => {
              paginate(number);
            }}
          >
            <a href="!#"> {number}</a>
          </button>
        );
      })}
      <button>
        <a href="!#" onClick={handelNext}>
          Next
        </a>
      </button>
    </>
  );
};
export default Pagination;
