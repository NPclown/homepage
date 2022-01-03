import React, { useState } from "react";
import Search from "@components/Search";
import {Link} from "react-router-dom";
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import "./index.css";

//TODO :: Click 이벤트 처리 필요

const Header = () => {
  const [isSearchModal, setSearchModal] = useState<boolean>(false);
  const controlSearchModal = (isOpen:boolean) => setSearchModal(isOpen);
    return (
      <div className="header">
          <div className="site-name">
            Tu me manques
          </div>
          <div className="site-tab">
            <Link to='/portfolio' className="tab-name">Portfolio</Link>
            <Link to='/post' className="tab-name">Post</Link>
          </div>
            <BsSearch className="react-icon" size="40" onClick={e => controlSearchModal(true)}></BsSearch>
            <Search isOpen={isSearchModal} openSearch={controlSearchModal}></Search>
            <BsPersonCircle className="react-icon" size="40"></BsPersonCircle>
      </div>
    );
}
  
export default Header;