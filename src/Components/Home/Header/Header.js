import React from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import HeaderContents from '../HeaderContents/HeaderContents';
import './Header.css';

const Header = () => {
    return (
        <div className="header-css">
            <NavBar></NavBar>
            <HeaderContents></HeaderContents>
        </div>
    );
};

export default Header;