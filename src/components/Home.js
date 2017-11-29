import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

const doneEditing = ()=>{
    $('.done-editing').fadeOut();
}



class Home extends Component {

    render() {
        return (

                <div className="home">
                    <div className="home-caption">Technologies to be learned next</div>
                    <ul className="collection">
                        <span className="label label-success done-editing" onClick={doneEditing}>Done editing <i className="fa fa-check"> </i></span>

                        <li className="collection-item animated fadeInLeft waves-effect">
                            <b>Angular 5</b> <br/>
                            <span className="label label-primary">1/1/18 10 a.m</span>
                            <br/>
                            <i className="fa fa-user"> Edwin</i>

                        </li>
                        <li className="collection-item animated fadeInLeft waves-effect">
                            <b>React Native</b> <br/>
                            <span className="label label-primary">1/1/18 10 a.m</span>
                            <br/>
                            <i className="fa fa-user"> Edwin</i>

                        </li>
                        <li className="collection-item animated fadeInLeft waves-effect">
                            <b>Golang</b> <br/>
                            <span className="label label-primary">1/1/18 10 a.m</span>
                            <br/>
                            <i className="fa fa-user"> Edwin</i>

                        </li>
                        <li className="collection-item animated fadeInLeft waves-effect">
                            <b>Spring MVC</b> <br/>
                            <span className="label label-primary">1/1/18 10 a.m</span>
                            <br/>
                            <i className="fa fa-user"> Edwin</i>

                        </li>


                    </ul>


                </div>


        );
    }
}

export default Home;