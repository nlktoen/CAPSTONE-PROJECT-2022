import React, { useState } from "react";
import Axios from 'axios';
import "./style.css";
import profileC from "./logindataC.json";
import profileI from "./logindataI.json";
import moment from 'moment';
import {Redirect} from "react-router-dom";
import styled
 from 'styled-components';
import {MdClose} from 'react-icons/md';


const CloseButton = styled(MdClose)`
  cursor:pointer;
  color: #483c32;
  position:absolute;
  top: 170px;
  right: 470px;
  width: 35px;
  height: 32px;
  padding: 2px;
  z-index: 10;
`

export default function Signin(props) {
  // post data to API created
  const url = "http://localhost:8091/api/authAPI"

  const type = props.name
  const isClick = props.isClick
  const setIsClick = props.setIsClick
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [portURL, setportURL] = useState({});

  const errors = {
    uname: "invalid email",
    passid: "invalid password"
  };

  var showdate=new Date();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(url, {
      generated_at: moment(showdate.getFullYear()+'-'+(showdate.getMonth()+1)+'-'+showdate.getDate()+' '+showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()).format('YYYY-MM-DD HH:mm:ss'),
      token: ":=Y:E7b:d];b$4Z"
      
    })
      .then(res=>{
        console.log(res.data)
      });

    var { tname, tpass } = document.forms[0];
    if (type === "I"){
      var userData = profileI.find((user) => user.email === tname.value);
      setportURL('http://localhost:3001/')
    } else if (type === "C") {
      var userData = profileC.find((user) => user.email === tname.value);
      setportURL('http://localhost:8501/')
    } 
    

    //compare user info
    if (userData) {
      if (userData.password !== tpass.value) {
        setErrorMessages({ name: "passid", message: errors.passid });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }


  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // login form
  const loginForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input type="text" name="tname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="tpass" required />
          {renderErrorMessage("passid")}
        </div>
        <div className="button-container">
          <input type="Submit" />
        </div>
      </form>
    </div>
  );

  function renderHandler(){
    window.location.href = portURL;
    //setIsSubmitted(false);
    console.log(isSubmitted)

  }



  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? renderHandler():loginForm}
        <CloseButton onClick={() => setIsClick(prev => !prev)}/>
      </div>
    </div>
  );
}