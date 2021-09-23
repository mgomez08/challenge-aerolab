import React from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
export const ProductsNav = () => {
  return (
    <nav className="navbar__products container">
      <div className="info__products">
        <p>16 of 32 products</p>
        <hr />
        <div className="filter__products">
          <p>Sort by:</p>
          <div className="filter__options">
            <button className="btn btn-primary">Most recent</button>
            <button className="btn btn-gray">Lowest price</button>
            <button className="btn btn-gray">Highest price</button>
          </div>
        </div>
      </div>
      <div className="pagination__products">
        <button className="btn-pagination">
          <img src={arrowLeft} alt="" />
        </button>
        <button className="btn-pagination">
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </nav>
  );
};
