import React, {useState} from "react";
import stm from "../styles.module.css";
import Signin from "../Signin"



function Services () {
  const [isClick, setIsClick] = useState(false);
  const [isType, setIsType] = useState({});

  const Service = (
    <div>
      <div className={stm.box}>
        <section className={stm.card}>
          <i className="fas fa-bars"></i>
          <h4>RB Incentives Tracking</h4>
          <div className={stm.pra}>
            <p>
              Reduce cost and effort of making retail banking incentives
              crosscheck monthly.
            </p>
            <p style={{ textAlign: "center" }}></p>
          </div>
          <button className={stm.btn} onClick={()=>{setIsClick(prev=>!prev); setIsType({type:"I"})}}>Sign in</button>
        </section>

        <section className={stm.card}>
          <i className="far fa-user"></i>
          <h4>Convert & Retain Campaign Assistant</h4>
          <div className={stm.pra}>
            <p>
              Acquisition and retention with automatic machine learning models
              and statistical models.
            </p>
            <p style={{ textAlign: "center" }}></p>
          </div>
          <button className={stm.btn} onClick={()=>{setIsClick(prev=>!prev); setIsType({type:"C"})}}>Sign in</button>
        </section>

      </div>
    </div>
  );



  return (
    <div>
      {isClick? (<div><Signin name={isType.type} isClick={isClick} setIsClick={setIsClick}/></div>): Service}
    </div>
  )
}
export default Services;