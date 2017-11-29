import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import request from 'superagent'


const login = ()=>{

    const userCredenials = {
        "email": $('#email').val(),
        "pass": $('#pass').val()
    }


    request
        .post('http://localhost:5000/add')
        .set('Content-Type', 'application/json')
        .send(userCredenials)
        .end(function(err, res){

        });
}



class Modals extends Component {

    render() {
        return (
            <div>
                <div id="modal1" className="modal animated bounceInUp">
                    <div className="modal-content">
                        <div className='modal-header'><i className="fa fa-user-circle-o"> </i> Please Enter Your Credentials</div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                                <label for="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="pass" type="text" className="validate"/>
                            <label for="pass">Password</label>
                        </div>
                        <br/>
                        <a className="waves-effect waves-light btn" onClick={login}>Login</a>
                    </div>
                </div>
            </div>


        );
    }
}

export default Modals;