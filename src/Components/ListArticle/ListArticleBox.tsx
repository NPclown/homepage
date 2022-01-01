import React from "react";
import {BsCalendar3, BsEye, BsChatLeftDots} from 'react-icons/bs';
import ImgTest from "@assets/test.jpg";
import Article from "@interfaces/article";
import "./index.css";

//TODO:: 게시글 이동 기능 만들기

const ListArticle = (props:Article, key:number) => {
    return (
      <div className="article-list-box" key={key}>
        <div className="article-list-header">
          { props.tag.map((value:string, index:number) => <div className="article-tag" key={index}>{value}</div> )}
        </div>
        <div className="article-list-body">
          <div className="article-list-body-left">
            <div className="article-title">
              {props.title}
            </div>
            <div className="article-cont">
              {props.cont}
            </div>
          </div>
          <div className="article-list-body-right">
            <img className="article-img" src={ImgTest}></img>
          </div>
        </div>

        <div className="article-list-footer">
          <div className="article-date">
            <BsCalendar3 className="article-list-footer-icon" size="20"></BsCalendar3>
            {props.date}
          </div>
          <div className="article-view">
            <BsEye className="article-list-footer-icon" size="20"></BsEye>
            {props.view}
          </div>
          <div className="article-comment">
            <BsChatLeftDots className="article-list-footer-icon" size="20"></BsChatLeftDots>
            {props.comment}
          </div>
        </div>
      </div>
    );
  }
  
export default ListArticle;
