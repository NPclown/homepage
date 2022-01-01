import React, { useDebugValue } from 'react';
import Header from "@components/Header";
import Footer from "@components/Footer";
import Title from "@components/Title";
import Setting from "@components/Setting";
import ListArticle from "@components/ListArticle";
import GalleryArticle from "@components/GalleryArticle";
import Pagination from "@components/Pagination";

import Article from "@interfaces/article";
import './index.css';

const dummy:Article[] =[{
  tag : ["#tag1", "#tag2"],
  title : "제목이예요1",
  cont : "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  date : "2020-12-12",
  view : 10,
  comment : 5
},{
  tag : ["#tag3", "#tag4"],
  title : "제목이예요2",
  cont : "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  date : "2020-12-21",
  view : 5,
  comment : 5
},{
  tag : ["#tag4", "#tag1"],
  title : "제목이예요3",
  cont : "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  date : "2020-12-31",
  view : 10,
  comment : 511
}]

//TODO :: 
const PostList = () => {
  return (
    <div className="container">
        <Header></Header>
        <Title></Title>
        <Setting></Setting> 
        {
          dummy.map((value:Article, index:number) => {return <ListArticle {...value} key={index}></ListArticle>})
        }
        <GalleryArticle></GalleryArticle>
        <Pagination></Pagination>
        <Footer></Footer>
    </div>
  );
}

export default PostList;