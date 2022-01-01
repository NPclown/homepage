import React from "react";
import { BsGearFill, BsGridFill, BsListTask } from 'react-icons/bs';
import "./index.css";

interface settingProps{
  changeView: (typeView:boolean) => void,
  changeSort: (typeSort:number) => void,
}
//TODO :: 포스트 개수 받아오기
const Settting = ( settingProp : settingProps) => {
  const count = 123;
    return (
      <div className="setting">
          <div className="result">
            <span className="result-count">{count}</span>개의 포스트
          </div>
          <div className="options">
            <BsGearFill className="setting-icon" size="30" onClick={e => alert("미구현")}></BsGearFill>
            <BsGridFill className="setting-icon" size="30" onClick={e => settingProp.changeView(true)}></BsGridFill>
            <BsListTask className="setting-icon" size="30" onClick={e => settingProp.changeView(false)}></BsListTask>
          </div>
          <select className="sort" onChange={e => settingProp.changeSort(parseInt(e.target.value))}>
            <option value={1}>최신순</option>
            <option value={2}>오래된 순</option>
          </select>
      </div>
    );
  }
  
export default Settting;