import React, { Component } from 'react';
//import { Container, Row, Col, Card, Form, Button, Navbar} from 'react-bootstrap';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import history from './../history';
//import Popper from 'popper.js';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Img1 from './img1.jpg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
//import ReactApexCharts from 'react-apexcharts'
//import history from './../history';
//import Popup from '/Users/prithvirajjanardhankurapothula/Desktop/project_final/crest/src/Componet_popup/Popup.js';
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from "react";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup_flag: false
    };  
    this.popset_true = this.popset_true.bind(this);
    this.popset_false = this.popset_false.bind(this);
    }

    jQuerycode = () => {
        $("#button1").click(function(){
         $('line').css('stroke','red')
        });
      }

    popset_true()
    {
        let val=true;
        this.setState({popup_flag:val});
    }
    popset_false()
    {
        let val=false;
        this.setState({popup_flag:val});
    }

    Popup(props) {
        return (
        <h1>happy</h1>);
        
    }

    componentDidMount(){
        this.jQuerycode()
      }

    
    render() {
        return (
            <div className="row row-no-gutters">
                <div id="navbar" className="col-2 col-no-gutters">
                        <div className="circular_picture">
                        <img src={Img1} />
                        </div>
                        <h4 id="login_name">
                        Prithvi
                        </h4>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        System Functionalities 
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor">
                        Home
                        <div className="nav_icons" >
                            <AiIcons.AiOutlineHome />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        Add Patient
                        <div className="nav_icons" >
                            <AiIcons.AiOutlineUserAdd />
                        </div>
                        </li>
                        </ul>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        Emergency Contact
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={() => history.push('/Contact')}>
                        Ambulance
                        <div className="nav_icons" >
                            <FaIcons.FaAmbulance />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        Practitioner

                        <div className="nav_icons" >
                            <BsIcons.BsPersonFill />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor">
                        Family
                        <div className="nav_icons" >
                            <BsIcons.BsFillPeopleFill/>
                        </div>
                        </li>
                        </ul>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        Security
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor">
                        C3I Security
                        <div className="nav_icons" >
                            <MdIcons.MdSecurity />
                        </div>
                        </li>
                        </ul>`
                    </div>

                <div className="col-10 col-no-gutters back_ground">
                    <div className="row row-no-gutters" id="network_values">
                        <div class="col test_color">
                            <h2>C3I Network</h2>
                        </div>
                        <div class="col test_color">
                            <text className="text_center">Attack Success Probability</text>
                            <text className="text_center">737.8787</text>
                        </div>
                        <div class="col test_color">
                            <text className="text_center">Attack Impact</text>
                            <text className="text_center">737.8787</text>
                        </div>
                        <div class="col test_color">
                            <text className="text_center">Attack Risk</text>
                             <text className="text_center">737.8787</text>
                        </div>
                        <div class="col test_color">
                            <text className="text_center">CVSS Base Score</text>
                            <text className="text_center">737.8787</text>
                        </div>
                    </div>
                    <div className="row row-no-gutters">
                        <svg className="svg_style" width="290" height="700">

                        <g>
                            <rect x="60" y="50" width="150" height="50" rx="3" ry="3" className="rect_box" id="button1"/>        
                        </g>

                        <line x1="211" y1="75" x2="500" y2="325" className="line" />
                        

                        <rect x="60" y="150" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="211" y1="175" x2="500" y2="325" className="line" />


                        <rect x="60" y="250" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="211" y1="275" x2="500" y2="325" className="line" />

                        <rect x="60" y="400" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="211" y1="425" x2="500" y2="325" className="line" />


                        <rect x="60" y="500" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="211" y1="525" x2="500" y2="325" className="line" />

                        <rect x="60" y="600" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="211" y1="625" x2="500" y2="325" className="line" />

                        
                        
                        <rect x="500" y="300" width="150" height="50" rx="3" ry="3" className="rect_box"/>
                        <line x1="575" y1="125" x2="575" y2="299" className="line" />
                        <line x1="575" y1="125" x2="700" y2="125" className="line" />
                        <line x1="650" y1="325" x2="900" y2="325" className="line" />

                        <rect x="700" y="100" width="150" height="50" rx="3" ry="3" className="rect_box" />
                       

                        <rect x="900" y="300" width="150" height="50" rx="3" ry="3" className="rect_box" />
                        <line x1="975" y1="125" x2="975" y2="299" className="line" />
                        <line x1="975" y1="125" x2="850" y2="125" className="line" />

                        </svg>
                    </div>           
                </div>
            </div>

        );
    }
}

export default Products;