import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Axios from 'axios';


function Condition() { 
  // Rendering the components based on the clicking event
  const [token,setToken] = useState({}) 

  /*
  function axiosTest (populateData) {
        Axios.get('http://localhost:8091/api/authapi')
       .then(function(response){
               populateData(response['data'][0]['Token']);
        })
        .catch(function(error){
               console.log(error);
         });
  }  
  
*/
  
  Axios.get('http://localhost:8091/api/authapi').then(response => {
    setToken(response['data'][0]['Token'])})
    //{
    //const data2=response['data'][0]
    //console.log(data2['Token'])
    //token = data2['Token']
    //return token
    //});
  //const data1 = Axios.get('http://localhost:8091/api/authapi');
  //const token = data1['token'];


  if (token===':=Y:E7b:d];b$4Z') { 
    return ( 
      <div>
        <App />
        </div>
      )
  } 
  return (
    //console.log('Invalid token!')
    //console.log(data)
    null
    )
  
  } 

  ReactDOM.render( 
    <React.StrictMode>
      <Condition/>
  </React.StrictMode>,
  document.getElementById('root') 
  ); 


  