import React, { useEffect, useState } from "react";
import Notiflix from "notiflix";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../../App.css";
import log from "../../images/icons/name.png";
import comp from "../../images/icons/comp.png";
import email_logo from "../../images/icons/email.svg";
import lock from "../../images/icons/lock.svg";
import authService from "../service/authService";
import { cacheValue } from "../utils";
import { signupValidation } from "../validation/validation";

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cacheVal = "userid";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: firstName,
      lastname: lastName,
      mobile,
      email,
      country: city,
      password,
    };
    if (signupValidation(data) === null) {
      return null;
    }
    try {
      authService.addUser(data).then((res) => {
        console.log(res);
        if (!res.data.error) {
          console.log("hello");
          Notiflix.Notify.success("Data saved Successfully");
          cacheValue(cacheVal, res.data.savedUser._id);
          navigate("/");
        }
        Notiflix.Notify.success(res.data.error);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="top-container">
        <div className="logo-img">
          <img className="logoimg" src={comp} alt="" />
        </div>
        <div className="signup-form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <div className="row pt-5">
              <div className="row">
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="name-logo d-flex">
                    <div className="flex">
                      <img src={log} alt="name" />
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <div className="name-logo d-flex">
                    <div className="flex">
                      <img src={log} alt="name" />
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="mobile">Mobile No.</label>
                  </div>
                  <div className="name-logo d-flex">
                    <div className="flex">
                      <img src={log} alt="name" />
                    </div>
                    <div className="flex">
                      <input
                        type="tel"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="email">Email-ID</label>
                  </div>
                  <div className="name-logo d-flex">
                    <div className="flex">
                      <img src={email_logo} alt="email" />
                    </div>
                    <div className="flex">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="name-logo d-flex">
                    {/* <div className="flex">
                    <img src={log} alt="name" />
                  </div> */}
                    <div className="flex">
                      <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-xl-6 col-md-6 col-sm-12">
                  <div className="label-text">
                    <label htmlFor="password">Enter Password</label>
                  </div>
                  <div className="name-logo d-flex">
                    <div className="flex">
                      <img src={lock} alt="name" />
                    </div>
                    <div className="flex">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
