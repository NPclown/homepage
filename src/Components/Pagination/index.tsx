import { copyFileSync } from "fs";
import React from "react";
import "./index.css";

//TODO:: paginatin 방법 변경
/*
선택한 페이지 번호가 가운데에 오도록 알고리즘 변경 필요
*/
const Pagination = () => {
    const currentPage = 10;
    const totalPage = 10;
    const pageNumber:number[]= [];

    const startPageNumber = Math.floor((currentPage-1)/5)*5+1;
    const endPageNumber = Math.ceil(currentPage/5)*5 >= totalPage ? totalPage : Math.ceil(currentPage/5)*5;

    for(let i= startPageNumber; i <= endPageNumber; i++){
      pageNumber.push(i);
    }

    return (
      <div className="pagination">
        <div className="pagination-box">
          <div className="pagination-arrow">
            {"<"}
          </div>
          {pageNumber.map((value) => {
            return (
                <div className={value==currentPage ? 'pagination-number pagination-number-select' : 'pagination-number'} key={value}>
                  {value}
                </div>
            )
          })}
          <div className="pagination-arrow">
            {">"}
          </div>
        </div>
      </div>
    );
  }
  
export default Pagination;