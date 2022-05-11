import React from "react";
import aboutimg from "../img/background1.jpg";
import stm from "../styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 style={{marginTop:"210px"}}>About</h1>
      <div className="card"
      style={{width:"60rem", borderColor:"#383838", borderWidth:"2px", height:"300px", 
      marginTop:"55px", marginLeft:"95px"}}>
        <div className="row">
          <div className="col">
            <img src={aboutimg} className={stm.cardcont}/>
          </div>
          <div className="col">
            <p className={stm.abouttitle}>Orient Commercial Joint Stock Bank</p>
            <p className={stm.abouttext}>
              Orient Commercial Joint Stock Bank (OCB), officially established
              in 1996, is one of the most profitable banks in Vietnam. The
              company has gone through hardships in the early stage. OCB is
              currently one of bank groups with top performance after 25 years.
              They are deploying modern financial products and services through a
              cutting-edge platform and many modern technologies are implemented
              such as biometric identification, AI Call, and marketing
              automation.
            </p>
          </div>
          <a
              target="_blank"
              href="https://ocb.com.vn/vi/ca-nhan"
              rel="noreferrer"
            >
              {" "}
              <button className={stm.btn}><small>Read More</small></button>{" "}
          </a>
        </div>
      </div>
    </div>
    );
  }
}
export default About;

/*
      style={{width:"30rem", borderColor:"#383838", borderWidth:"2px", height:"500px", marginTop:"260px", marginLeft:"95px"}}>
      <img class="card-img-top" src={aboutimg} className={stm.cardcont}/>
        <div className={stm.main}>
          <div className={stm.abouttext}>
            <p>
              Orient Commercial Joint Stock Bank (OCB), officially established
              in 1996, is one of the most profitable banks in Vietnam. The
              company has gone through hardships in the early stage. OCB is
              currently one of bank groups with top performance after 25 years.
              They are deploying modern financial products and services through a
              cutting-edge platform and many modern technologies are implemented
              such as biometric identification, AI Call, and marketing
              automation.
            </p>
            <a
              target="_blank"
              href="https://ocb.com.vn/vi/ca-nhan"
              rel="noreferrer"
            >
              {" "}
              <button className={stm.btn}><small>Read More</small></button>{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
*/