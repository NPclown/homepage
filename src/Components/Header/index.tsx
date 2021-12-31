import React from "react";
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import "./index.css";

//TODO :: Click 이벤트 처리 필요

const Header = () => {
    return (
      <div className="header">
          <div className="site-name">
              JY-Love
          </div>
          <div className="site-tab">
                <div className="tab-name">
                    Portfolio
                </div>
                <div className="tab-name">
                    Post
                </div>
          </div>
            <BsSearch className="react-icon" size="40"></BsSearch>
            <BsPersonCircle className="react-icon" size="40"></BsPersonCircle>
      </div>
    );
}
  
export default Header;