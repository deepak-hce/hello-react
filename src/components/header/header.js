import React from 'react';
import './header.css';
import CONSTANTS from '../../app_constants/constants';

class Header extends React.Component {



    render() {
        return (
            <div className="container-fluid header">
                <div className="logo">
                    <a href='#'> <img alt = "logo" class = "logo" src = {CONSTANTS.images.logo} />  </a>
                </div>

                <div className="register">
                    <a href='#' > Register </a>
                </div>

                <div className="home">
                    <a href='#' > Home </a>
                </div>

                <div className="login">
                    <a href='#' > Login </a>
                </div>

            </div>
        )
    }


}


export default Header;