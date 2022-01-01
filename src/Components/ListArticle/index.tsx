import React from "react";
import {BsCalendar3, BsEye, BsChatLeftDots} from 'react-icons/bs';
import ImgTest from "@assets/test.jpg";
import Article from "@interfaces/article";
import "./index.css";

//TODO:: 게시글 이동 기능 만들기

const ListArticle = (props:Article, key:number) => {
    return (
      <div className="article-list-box" key={key}>
        <div className="article-header">
          { props.tag.map((value:string, index:number) => <div className="article-tag" key={index}>{value}</div> )}
        </div>
        <div className="article-body">
          <div className="article-left">
            <div className="article-title">
              {props.title}
            </div>
            <div className="article-cont">
              {props.cont}
            </div>
          </div>
          <div className="article-right">
            <img className="article-img" src={ImgTest}></img>
          </div>
        </div>

        <div className="article-footer">
          <div className="article-date">
            <BsCalendar3 className="article-footer-icon" size="20"></BsCalendar3>
            {props.date}
          </div>
          <div className="article-view">
            <BsEye className="article-footer-icon" size="20"></BsEye>
            {props.view}
          </div>
          <div className="article-comment">
            <BsChatLeftDots className="article-footer-icon" size="20"></BsChatLeftDots>
            {props.comment}
          </div>
        </div>
      </div>
    );
  }
  
export default ListArticle;
