import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';


const showToast = ()=>{

    $('.msg').fadeIn();
    setTimeout(function() {
        $('.msg').fadeOut();
    }, 3000);
}



class Footer extends Component {

    render() {
        return (
            <div>
                <div className="msg anim alert-info">Coming soon!</div>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large teal darken-3 waves-effect">
                        <i className="large material-icons">add</i>
                    </a>
                    <ul>
                        <li><span className="btn-floating light-blue darken-4">Add</span></li>
                        <li><a className="btn-floating blue" onClick={showToast}><i className="material-icons">email</i></a></li>
                        <li><a className="btn-floating green" onClick={showToast}><i className="material-icons">alarm</i></a></li>
                    </ul>
                </div>
                <div className="footer">
                    &copy; Code Agenda 2017
                </div>
            </div>


        );
    }
}

export default Footer;