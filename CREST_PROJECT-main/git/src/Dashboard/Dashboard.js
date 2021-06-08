import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button, Navbar} from 'react-bootstrap';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $, { timers } from 'jquery';
import Popper from 'popper.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Img1 from './img2.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import ReactApexCharts from 'react-apexcharts'
import history from './../history';
import axios from "axios";
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox22374cf711474affaaa652ab32e7e38b.mailgun.org';
const mg = mailgun({apiKey: "87a9f2dc47afb3141f02eb2fdbad4e16-a09d6718-4a019a39", domain: DOMAIN});
class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
            series1: [{
                name: "Desktops",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }],
          series2: [{
            name: "Desktops",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
          conmm:'',
          gps: '',    
          acc: '',    
          heart: '',
          temp_color: '',
          
        
        };
        this.tick = this.tick.bind(this);
        this.num_test =[];
        this.temp_ecg='';
        this.temp_emg='';
      }

      componentDidMount()
      {
          this.interval = setInterval(() => this.tick(), 3000);
      }
      componentWillUnmount() {
          clearInterval(this.interval);
        }

        mesfamily()
        {
            const data = {
                from: "Mailgun Sandbox <postmaster@sandbox22374cf711474affaaa652ab32e7e38b.mailgun.org>",
                to: "prithviraj janardhan Kurapothula <prithvijk.241@gmail.com>",
                subject: 'Temperature',
                text: 'A675522 looks critical'
            };
            mg.messages().send(data, function (error, body) {
                console.log(body);
            });
        }
        tick() {
            //temp
            axios.get('http://127.0.0.1:5000/dtemp')
            .then(res => {
                const info = res.data[0].temp;
                if(this.state.temp != info)
                {
                    this.setState({temp: info});
                    //console.log(this.state.temp)
                    var temp1=parseFloat(info)
                    if(temp1<35 || temp1>38)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'red'});
                    }
                    else if(temp1>36.11 || temp1<37.22)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'green'});
                    }
                    else if(temp1>35 || temp1<36.11 || temp1>37.22 || temp1<38)
                    {
                        //console.log('red happening')
                        this.setState({temp_color: 'yellow'});
                    }
                }
            })

            //gps

            axios.get('http://127.0.0.1:5000/dgps')
            .then(res => {
                const info = res.data[0].gps;
                if(this.state.gps != info)
                {
                    this.setState({gps: info});
                    //console.log(this.state.gps)
                }
            })

            //acc

            axios.get('http://127.0.0.1:5000/dacc')
            .then(res => {
                const info = res.data[0].acc;
                if(this.state.acc != info)
                {
                    this.setState({acc: info});
                    //console.log(this.state.acc)
                }
            })

           //heart

           axios.get('http://127.0.0.1:5000/heart')
            .then(res => {
                const info = res.data[0].heartrate;
                //console.log('heat')
                //console.log(res.data[0].heartrate)
                if(this.state.heart != info)
                {
                    this.setState({heart: info});
                    //console.log(this.state.heart)
                }
            })

            
            //emg

            axios.get('http://127.0.0.1:5000/demg')
            .then(res => {
                //console.log('emg')
                //console.log(res.data[0].emg[39])
                var check_data=res.data[0].emg[39];
                if(check_data!=this.temp_emg)
                {
                    this.temp_emg=check_data;
                    const val= [{
                        name: "Desktops",
                        data: res.data[0].emg
                    }]
                    console.log('emg happening')
                    this.setState({series2:val});
                }
            })
            

            //ecg

            axios.get('http://127.0.0.1:5000/decg')
            .then(res => {
                console.log('ecg')
                console.log(res.data[0].ecg[39])
                var check_data=res.data[0].ecg[39];
                if(check_data!=this.temp_ecg)
                {
                    this.temp_ecg=check_data;
                    const val= [{
                        name: "Desktops",
                        data: res.data[0].ecg
                    }]
                    console.log('ecg happening')
                    this.setState({series1:val});
                }
                
            })

            const num=Math.floor(Math.random() * (100 - 90 + 1)) + 110;
            const num1=Math.floor(Math.random() * (100 - 90 + 1)) + 70;
            this.setState({bp1: num});
            this.setState({bp2: num1});
        }
    
    render() {

        
        return (
            <div className="row row-no-gutters">
                <div id="navbar" className="col-2 col-no-gutters">
                    <div className="circular_picture">
                        <img src={Img1} />
                        </div>
                        <h4 id="login_name">
                        </h4>
                        <hr id="saperation"/>
                        <h6 className="nav_options">
                        System Functionalities 
                        </h6>
                        <ul className="nav_list">
                        <li className="nav_list_contents option_cursor" onClick={() => history.push('/')}>
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
                        <li className="nav_list_contents option_cursor" onClick={()=>this.mesfamily()}>
                        Ambulance
                        <div className="nav_icons" >
                            <FaIcons.FaAmbulance />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor" onClick={()=>this.mesfamily()}>
                        Practitioner

                        <div className="nav_icons" >
                            <BsIcons.BsPersonFill />
                        </div>
                        </li>
                        <li className="nav_list_contents option_cursor" onClick={()=>this.mesfamily()}>
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
                        <li className="nav_list_contents option_cursor" onClick={() => history.push('/Contact')}>
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
                                Condition: Normal 
                                <div  className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated  bg-danger" style={{width:'60%'}}>Normal</div>
                                </div>
                                <div id="location">
                                Live Location: {this.state.gps}
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
                                {this.state.heart}
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
                                    Body Acceleration
                                </p>
                                <p id="actual_PO " style={{color:'green', textAlign: 'center', fontSize: '75px', marginBotton: '0'}}>
                                {this.state.acc}
                                </p>
                                <p id="actual_PO_L">
                                    m/s2
                                </p>

                            </div>   
                        </div>

                        <div className="col-3 col-no-gutters">
                            <div className="card main_cards second_row_cards_margin">
                                <p className="card_title">
                                    Temperature
                                </p>
                                <p id="actual_T" style={{color:this.state.temp_color}}>
                                    {this.state.temp}
                                </p>
                                <p id="actual_T_L">
                                    Celsius
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