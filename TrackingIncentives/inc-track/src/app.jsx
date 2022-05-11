import React, {useState, useEffect} from "react";
import Datatable from "./datatable"
//import {Buttons,ButtonGroup,ToggleButton} from 'react-bootstrap/Button'
import { Button,  ButtonGroup, ToggleButton} from 'react-bootstrap';
import Axios from 'axios';
import moment from 'moment';
require("es6-promise").polyfill();
require("isomorphic-fetch"); //polyfill auto

export default function App() {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [t, setT] = useState("");
    const [b, setB] = useState("");

    useEffect(() => {
        fetch("http://localhost:8091/api/incentive")
        .then((response) => response.json())
        .then((json) => setData(json));
    },[])

    function closeHandler() {
      var showdate=new Date();
      Axios.post("http://localhost:8091/api/authapi", {
        generated_at: moment(showdate.getFullYear()+'-'+(showdate.getMonth()+1)+'-'+showdate.getDate()+' '+showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()).format('YYYY-MM-DD HH:mm:ss'),
        token: "null"
      })  
      window. location. reload() 
    }

    function searchCIF(rows){
        return rows.filter((row) => row.CIF.toLowerCase().indexOf(q.toLowerCase()) == 0);
    }

    function filterType(rows,b){
        return rows.filter((row) => row.TYPE_.toUpperCase() === b);
    }

    
    function ToggleButtonExample() {
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
      
        const radios = [
          { name: 'LOGIN', value: '1' },
          { name: 'ACTIVE', value: '2' }
        ];
      
        return (
          <>
            <ButtonGroup>
            {radios.map((radio, idx) => (
                <Button
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick = {(e) => setB(radio.name)}
                >
                  {radio.name}
                </Button>
              ))}
              <Button size="lg" variant="danger" onClick = {() => closeHandler()}>Close Session</Button>
            </ButtonGroup>
              
          </>
        );
      }
    

    return <div>
        <div> <h2>CIF   <input type="text" value = {q} onChange={(e) => setQ(e.target.value)}/> 
        </h2>
        </div>
        <ToggleButtonExample/>
        <div> 
        <br></br>
            <Datatable data={filterType(searchCIF(data),b)}/>

        

        </div>
    </div>;
}

