import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const enableEditing = ()=>{
    $('.done-editing').fadeIn();
}



class NavBar extends Component {

    render() {
        return (

            <div className="header">

                <i className="fa fa-calendar-plus-o fa-3x"><span className="logo">&nbsp;CodeAgenda</span></i>

                <div className="menu-links">
                    <Link to="/"><i className="fa fa-home"> </i> Home</Link>
                    <a href="javascript:void(0)" onClick={enableEditing}><i className="fa fa-edit"> </i> Edit</a>
                    <a  href="javascript:void(0)" className="loginBtn" data-target="modal1">
                    <i className="fa fa-sign-in"> </i> Login</a>
                </div>

            </div>

        );
    }
}

export default NavBar;