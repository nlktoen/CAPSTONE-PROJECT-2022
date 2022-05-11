import React from "react";
import stm from "../styles.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <h1>Contact</h1>
          <p>Follow the links below to find more about us</p>
          <div className={stm.social}>
            <a href="https://www.facebook.com/phuongdongbank">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="https://www.youtube.com/user/ocbbank">
              <i className="bi bi-youtube"></i>
            </a>

            <a href="https://ocb.com.vn/vi/ca-nhan">
              <i className="bi bi-globe2"></i>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
export default Contact;