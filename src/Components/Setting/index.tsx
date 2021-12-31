import React from "react";
import { BsGearFill, BsGridFill, BsListTask } from 'react-icons/bs';
import "./index.css";

const Settting = () => {
  const count = 123;
    return (
      <div className="setting">
          <div className="result">
            <span className="result-count">{count}</span>개의 포스트
          </div>
          <div className="options">
            <BsGearFill className="setting-icon" size="30"></BsGearFill>
            <BsGridFill className="setting-icon" size="30"></BsGridFill>
            <BsListTask className="setting-icon" size="30"></BsListTask>
          </div>
          <select className="sort">
            <option>최신순</option>
            <option>오래된 순</option>
          </select>
      </div>
    );
  }
  
export default Settting;