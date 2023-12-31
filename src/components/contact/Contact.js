import React from "react";
import "./contact.css";
import img from "./brand communication-rafiki.png";
const Contact = () => {
  return (
    <div className="callback-dgmt-container">
      <div className="callback-dgmt">
        <div className="call-back-img">
          <img src={img} alt="" />
        </div>
        <div className="call-back-dgmt-form">
          <h2>Contact For Service</h2>
          <form>
            <div className="dgmt_form-group">
              <input type="text" name="name" placeholder="Enter Your Name" />
            </div>
            <div className="dgmt_form-group">
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div className="dgmt_form-group">
              <input
                type="tel"
                name="contactnumber"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="dgmt_form-group options ">
              <select name="Service" id="Service">
                <option value="volvo">Select Services</option>
                <option value="volvo">Graphic design </option>
                <option value="saab">Web design</option>
                <option value="mercedes">Seo Development</option>
                <option value="audi">App development </option>
                <option value="audi">digital Marketing </option>
                <option value="audi">B2b Service </option>
                <option value="audi">Smo service </option>
                <option value="audi">web development </option>
                
              </select>
            </div>
            <div className="dgmt_form-group">
              <textarea
                type="message"
                name="message"
                placeholder="Any Message"
              />
            </div>
            <button class="btns">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;