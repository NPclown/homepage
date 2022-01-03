import React, { useState } from "react";
import { BsGearFill, BsGridFill, BsListTask } from 'react-icons/bs';
import UserViewSetting from '@components/UserViewSetting';
import "./index.css";

interface settingProps{
  changeView: (typeView:boolean) => void,
  changeSort: (typeSort:number) => void,
}

interface settingListProps{
  name:string;
  selected:boolean;
}

//TODO :: 포스트 개수 받아오기
const Settting = ( settingProp : settingProps) => {
  const count = 123;
  const [isSettingModal, setSettingModal] = useState<boolean>(false);
  const controlSettingModal = (isOpen:boolean) => setSettingModal(isOpen);
  
  const [settingList, setSettingList] = useState<settingListProps[]>([{name: "태그", selected: false},
  {name: "날짜", selected: false}, 
  {name: "조회수", selected : false},
  {name: "댓글수", selected : false}]);

  const changeValue = (name:string) => {
      setSettingList(
          settingList.map(setting =>
          setting.name === name ? { ...setting, selected: !setting.selected } : setting
        )
      )
  }

    return (
      <div className="setting">
          <div className="result">
            <span className="result-count">{count}</span>개의 포스트
          </div>
          <div className="options">
            <BsGearFill className="setting-icon" size="30" onClick={e => controlSettingModal(true)}></BsGearFill>
            {isSettingModal ? <UserViewSetting isOpen={isSettingModal} openSetting={controlSettingModal} settingList={settingList} changeValue={changeValue}></UserViewSetting> : <></>}
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