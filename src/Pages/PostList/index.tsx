import React from 'react';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Title from "@components/Title";
import Setting from "@components/Setting";
import ListArticle from "@components/ListArticle";
import GalleryArticle from "@components/GalleryArticle";
import Pagination from "@components/Pagination";
import './index.css';

//TODO :: 
const PostList = () => {
  return (
    <div className="container">
        <Header></Header>
        <Title></Title>
        <Setting></Setting> 
        <ListArticle></ListArticle>
        <GalleryArticle></GalleryArticle>
        <Pagination></Pagination>
        <Footer></Footer>
    </div>
  );
}

export default PostList;