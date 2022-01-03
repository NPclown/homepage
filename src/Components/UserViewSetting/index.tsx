import React, { useState } from "react";
import Modal from 'react-modal';
import { BsThreeDotsVertical, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import "./index.css";


interface settingListProps{
    name:string;
    selected:boolean;
}

interface userViewSettingProps {
    isOpen : boolean;
    openSetting : (isOpen:boolean) => void,
    settingList : settingListProps[],
    changeValue : (name:string) => void
}

const UserViewSetting = (props:userViewSettingProps) => {
    return (
        <Modal className="user-view-setting-modal" isOpen={props.isOpen} onRequestClose={e => props.openSetting(false)}>
            {
                props.settingList.map((value, index) => {
                    return (
                    <div className="user-view-box" key={index}>
                        <BsThreeDotsVertical size="30"></BsThreeDotsVertical>
                        {value.name}
                        {value.selected ? <BsToggleOn size="30" onClick={e => props.changeValue(value.name)}></BsToggleOn> : <BsToggleOff size="30" onClick={e => props.changeValue(value.name)}></BsToggleOff>}
                    </div>)
                })
            }
        </Modal>
    );
  }
  
export default UserViewSetting;