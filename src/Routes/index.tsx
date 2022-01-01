import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from '@components/Header';
import Footer from '@components/Footer';
import PostList from '@pages/PostList';

const Routing = () => {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path='/' element={<div>메인 페이지가 존재하지 않습니다.</div>}/>
                <Route path='/post' element={<PostList/>}/>
                <Route path='/portfolio' element={<div>해당 페이지가 존재하지 않습니다.</div>}/>
            </Routes>
            <Footer></Footer>
        </Router>
    )
}

export default Routing;