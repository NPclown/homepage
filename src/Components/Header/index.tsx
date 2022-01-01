import React from "react";
import {Link} from "react-router-dom";
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import "./index.css";

//TODO :: Click 이벤트 처리 필요

const Header = () => {
    return (
      <div className="header">
          <div className="site-name">
            Tu me manques
          </div>
          <div className="site-tab">
            <Link to='/portfolio' className="tab-name">Portfolio</Link>
            <Link to='/post' className="tab-name">Post</Link>
          </div>
            <BsSearch className="react-icon" size="40"></BsSearch>
            <BsPersonCircle className="react-icon" size="40"></BsPersonCircle>
      </div>
    );
}
  
export default Header;