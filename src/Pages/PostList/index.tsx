import React, { useState } from 'react';
import Title from "@components/Title";
import Setting from "@components/Setting";
import ListArticle from "@components/ListArticle";
import GalleryArticle from "@components/GalleryArticle";
import Pagination from "@components/Pagination";

import './index.css';

//TODO :: setting 설정
//TODO :: 이미지 리스트 및 갤리러 형 변경
//TODO :: 정렬 구현
const PostList = () => {
  const [view, setView] = useState<boolean>(true);
  const [sort, setSort] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const totalPage:number = 11;
  
  const changeView = (viewType:boolean) => setView(viewType);
  const changeSort = (viewSort:number) => setSort(viewSort);
  const changePage = (currentPage:number) => setPage(currentPage);

  return (
    <div className="container">
        <Title></Title>
        <Setting changeView={changeView} changeSort={changeSort}></Setting> 
        {console.log({sort:sort, page:page})}
        {view ? <ListArticle></ListArticle> : <GalleryArticle></GalleryArticle>} 
        <Pagination page={page} totalPage={totalPage} changePage={changePage}></Pagination>
    </div>
  );
}

export default PostList;