import React, { useDebugValue } from 'react';
import Title from "@components/Title";
import Setting from "@components/Setting";
import ListArticle from "@components/ListArticle";
import GalleryArticle from "@components/GalleryArticle";
import Pagination from "@components/Pagination";

import Article from "@interfaces/article";
import './index.css';

//TODO :: 
const PostList = () => {
  return (
    <div className="container">
        <Title></Title>
        <Setting></Setting> 
        <ListArticle></ListArticle>
        <GalleryArticle></GalleryArticle>
        <Pagination></Pagination>
    </div>
  );
}

export default PostList;