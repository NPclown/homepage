import React from "react";
import GalleryArticleBox from "./GalleryArticleBox";
import Article from "@interfaces/article";
import "./index.css";

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
},{
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

const GalleryArticle = () => {
    return (
      <div className="article-gallery">
        {
          dummy.map((value:Article, index:number) => {return <GalleryArticleBox {...value} key={index}></GalleryArticleBox>})
        }
      </div>
    );
  }
  
export default GalleryArticle;
