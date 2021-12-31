import React from "react";
import {BsCalendar3, BsEye, BsChatLeftDots} from 'react-icons/bs';
import ImgTest from "../../Assets/test.jpg";
import "./index.css";

interface article {
  tag : string[],
  title : string,
  cont : string,
  date : string,
  view : number,
  comment : number
};

const dummy:article = {
  tag : ["#tag1", "#tag2"],
  title : "제목이예요",
  cont : "내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.",
  date : "2020-12-12",
  view : 10,
  comment : 5
}

const ListArticle = () => {
    return (
      <div className="article-list-box">
        <div className="article-header">
          { dummy.tag.map((value:string, index:number) => <div className="article-tag" key={index}>{value}</div> )}
        </div>
        <div className="article-body">
          <div className="article-left">
            <div className="article-title">
              {dummy.title}
            </div>
            <div className="article-cont">
              {dummy.cont}
            </div>
          </div>
          <div className="article-right">
            <img className="article-img" src={ImgTest}></img>
          </div>
        </div>

        <div className="article-footer">
          <div className="article-date">
            <BsCalendar3 className="article-footer-icon" size="20"></BsCalendar3>
            {dummy.date}
          </div>
          <div className="article-view">
            <BsEye className="article-footer-icon" size="20"></BsEye>
            {dummy.view}
          </div>
          <div className="article-comment">
            <BsChatLeftDots className="article-footer-icon" size="20"></BsChatLeftDots>
            {dummy.comment}
          </div>
        </div>
      </div>
    );
  }
  
export default ListArticle;
