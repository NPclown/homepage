import React from "react";
import "./index.css";

//TODO:: paginatin 방법 변경
/*
선택한 페이지 번호가 가운데에 오도록 알고리즘 변경 필요
*/
interface paginationProps{
  page:number;
  totalPage: number;
  changePage: (currentPage:number) => void;
}

const Pagination = (props:paginationProps) => {
    const pageNumber:number[]= [];

    console.log(props);
    const startPageNumber = Math.floor((props.page-1)/5)*5+1;
    const endPageNumber = Math.ceil(props.page/5)*5 >= props.totalPage ? props.totalPage : Math.ceil(props.page/5)*5;

    for(let i= startPageNumber; i <= endPageNumber; i++){
      pageNumber.push(i);
    }

    return (
      <div className="pagination">
        <div className="pagination-box">
          <div className="pagination-arrow" onClick={e => props.changePage(props.page-5 <= 0 ? 1 : props.page-5)}>
            {"<"}
          </div>
          {pageNumber.map((value) => {
            return (
                <div className={value==props.page ? 'pagination-number pagination-number-select' : 'pagination-number'} key={value} onClick={e => props.changePage(value)}>
                  {value}
                </div>
            )
          })}
          <div className="pagination-arrow" onClick={e => props.changePage(props.page+5 > props.totalPage ? props.totalPage : props.page+5)}>
            {">"}
          </div>
        </div>
      </div>
    );
  }
  
export default Pagination;