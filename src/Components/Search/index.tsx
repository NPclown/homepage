import React, { useState } from "react";
import Modal from 'react-modal';
import { BsSearch } from 'react-icons/bs';
import "./index.css";

interface searchProps {
    isOpen : boolean;
    openSearch : (isOpen:boolean) => void,
}

const Search = (props:searchProps) => {
    const [search, setSearch] = useState<string|null>("");
  
    const onChangeSearch = (value:string) => {
        setSearch(value);
    }

    const onClick = () => {
        alert(search);
    }

    const onEnter = (e:React.KeyboardEvent<Element>) => {
        if (e.key == "Enter"){
            onClick();
        }
    }

    return (
        <Modal className="search-modal" isOpen={props.isOpen} onRequestClose={e => props.openSearch(false)} >
            <input className="search-box" type="text" maxLength={50} placeholder={"검색어를 입력하세요."} onKeyPress={e=>onEnter(e)} onChange={e=>onChangeSearch(e.target.value)}/>
            <BsSearch className="search-react-icon" size="40" onClick={e => onClick()}></BsSearch>
        </Modal>
    );
  }
  
export default Search;