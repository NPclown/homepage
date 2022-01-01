import React from "react";
import {BsCalendar3, BsEye, BsChatLeftDots} from 'react-icons/bs';
import ImgTest from "@assets/test.jpg";
import Article from "@interfaces/article";
import "./index.css";

//TODO:: 게시글 이동 기능 만들기

const GalleryArticle = (props:Article, key:number) => {
    return (
      <div className="article-gallery-box" key={key}>
        <img className="article-gallery-item article-gallery-img" src={ImgTest}></img>
        <div className="article-gallery-item article-gallery-title">
            {props.title}
        </div>
        <div className="article-gallery-item article-gallery-tag-list">
          { props.tag.map((value:string, index:number) => <div className="article-gallery-tag" key={index}>{value}</div> )}
        </div>
        <div className="article-gallery-item article-gallery-footer">
          <div className="article-gallery-date">
            <BsCalendar3 className="article-gallery-footer-icon" size="15"></BsCalendar3>
            {props.date}
          </div>
          <div className="article-gallery-view">
            <BsEye className="article-gallery-footer-icon" size="15"></BsEye>
            {props.view}
          </div>
          <div className="article-gallery-comment">
            <BsChatLeftDots className="article-gallery-footer-icon" size="15"></BsChatLeftDots>
            {props.comment}
          </div>
        </div>
      </div>
    );
  }
  
export default GalleryArticle;
