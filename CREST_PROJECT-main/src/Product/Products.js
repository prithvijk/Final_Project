import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar} from 'react-bootstrap';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Img1 from './img1.jpg';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import ReactApexCharts from 'react-apexcharts'
import history from './../history';
class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series1: [{
              name: "Desktops",
              data: [40, 41, 35, 51, 49, 62, 69, 55, 30,50]
          }],
          series2: [{
            name: "Desktops",
            data: [20,22,18, 35, 51, 49, 62, 69, 55, 10,40]
        }],

          options: {
            chart: {
              height: 100,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: '',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: [],
            }
          },

          temp: '',
          ox:'',
          hr:'',
          bp1:'',
          bp2:'',
        
        
        };
        this.tick = this.tick.bind(this);
      }

      componentDidMount()
      {
          this.interval = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
          clearInterval(this.interval);
        }
        tick() {
        const num=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num1=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num2=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num3=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num4=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num5=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num6=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num7=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num8=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        const num9=Math.floor(Math.random() * (100 - 90 + 1)) + 90;
        console.log(num);
        const val= [{
            name: "Desktops",
            data: [num1, num2, num3, num4, num5, num6, num7, num8, num9]
        }]

        const val1= [{
            name: "Desktops",
            data: [num9, num8, num7, num6, num5, num4, num3, num2, num1]
        }]
        

        this.setState({series1:val})
        this.setState({series2:val1})
        //const info1=info.count;
        //this.setState({info: info1});
        this.setState({temp: num});
        this.setState({hr: num1});
        this.setState({bp1: num2});
        this.setState({bp2: num3});
        this.setState({ox: num4});
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
                        <li className="nav_list_contents option_cursor" onClick={() => history.push('/About')}>
                        C3I Security
                        <div className="nav_icons" >
                            <MdIcons.MdSecurity />
                        </div>
                        </li>
                        </ul>`
                    </div>

                <div className="col-10 col-no-gutters">
                    <div className="card main_cards">
                        <p className="card_title">
                        Patient info
                        </p>
                        <div className="row">
                            <div className="col-6 col-no-gutters">
                                <p className="main_text">
                                    Patient Name: Raj 
                                </p>
                                <p className="main_text">
                                    Patient ID: A675522
                                </p>
                            </div>
                            <div className="col-6 col-no-gutters">
                                <div id="progress_card" className="card main_cards">
                                <p className="main_text progress_title">
                                Condition: CRITICAL 
                                <div  className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated  bg-danger">CRITICAL</div>
                                </div>
                                <div id="location">
                                Live Location: -11.523088, 20.082326
                                </div>
                                </p>            
                            </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Heart Rate
                                </p>
                                <p id="actual_HR">
                                {this.state.hr}
                                </p>
                                <p id="actual_HR_L">
                                    bpm
                                </p>
                                
                        
                            </div>   
                        </div>
                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Blood Pressure
                                </p>
                                <p id="actual_BP">
                                {this.state.bp1}/{this.state.bp2}
                                </p>
                                <p id="actual_BP_L">
                                    SYS/DIA
                                </p>
                            </div>   
                        </div>

                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Pulse Oximetry 
                                </p>
                                <p id="actual_PO">
                                {this.state.ox}
                                </p>
                                <p id="actual_PO_L">
                                    SpO2
                                </p>

                            </div>   
                        </div>

                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Temperature
                                </p>
                                <p id="actual_T">
                                    {this.state.temp}
                                </p>
                                <p id="actual_T_L">
                                    F
                                </p>
                            </div>   
                        </div>
                        
                    </div>

                        

                    <div className="row">
                        <div className="col-6 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    ECG
                                </p>
                                <div id="chart">
                                <ReactApexCharts options={this.state.options} series={this.state.series1} type="line" height={350} />
                                </div>
                        
                            </div>   
                        </div>
                        <div className="col-6 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    EMG
                                </p>
                                <div id="chart">
                                <ReactApexCharts options={this.state.options} series={this.state.series2} type="line" height={350} />
                                </div>
                        
                            </div>   
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Products;