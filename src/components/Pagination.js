import React from "react";

const Pagination = ({ paginate, postsPerPage, totalposts }) => {
  const totalButtons = Math.ceil(totalposts / postsPerPage);
  let pageNumbers = [];

  for (let i = 1; i <= totalButtons; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => {
        return (
          <button
            key={number}
            onClick={(e) => {
              paginate(number);
            }}
          >
            {number}
          </button>
        );
      })}
    </>
  );
};
export default Pagination;
