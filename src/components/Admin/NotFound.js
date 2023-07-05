// import index.css file for styling
import React, {useState} from 'react'
import Footer from '../Footer/Footer'
// this component about score card design,downloading score card,sending scores to candidate through emails including cc
import { GiHamburgerMenu } from "react-icons/gi";
import gapi from "gapi-script";
import Popup from "reactjs-popup";
import {useNavigate,useLocation} from 'react-router-dom'
import "reactjs-popup/dist/index.css";
import "./index.css";

const NotFound = () => {
    // location varaiable to get location of the testReports route and state
    const location=useLocation()
    // useState of data to store Full Stack test data responses 
    const [data, setData] = useState(
      []
    );
    
  const navigate = useNavigate();
  return (
    <div>
      <div className='admin-header-container'>
        <div className='admin-header-logo-container'>
          {/* logo */}
          <img
            src='https://res.cloudinary.com/de5cu0mab/image/upload/v1688216997/KLoc_Square_Logo_-_400x400_ciw1ej.jpg'
            alt='logo'
            style={{ height: "50px", width: "70px", borderRadius: "10px" }}
            onClick={() => navigate("/")}
          />
        </div>
        <div className='admin-desktop-header-navbar-container'>
          {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
          <p
            onClick={() => navigate("/dashboard", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Dashboard
          </p>
          {/* when clicking this Assessments text, it'll navigates to send assessments route */}
          <p
            onClick={() => navigate("/sendAssessments", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Assessments
          </p>
          {/* when clicking this Test Reports text, it'll navigates to test reports route */}
          <p
            onClick={() => navigate("/testReports", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Test Reports
          </p>
          {/* when clicking this student reports text, it'll navigates to student reports route */}
          <p
            onClick={() => navigate("/studentReports", { state: data })}
            className='admin-desktop-header-navbar-link'
          >
            Student Reports
          </p>
          {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
          <p
            className='admin-desktop-header-navbar-link'
            onClick={() => navigate("/adminLogin")}
          >
            Admin
          </p>
        </div>
        {/* nav header for mobile  with Logo and components Dashboard, Assessments, Test Reports, Student Reports and Admin */}
        <div className='admin-mobile-header-navbar-container'>
          <Popup
            contentStyle={{ width: '70%',backgroundColor:"white",textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'content',alignItems:'center' }}
            trigger={
              <button className='admin-hamburger-btn'>
                <GiHamburgerMenu />
              </button>
            }
            position='bottom right'
          >
            <ul className='admin-mobile-hamburger-menu'>
              {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
              <li
                onClick={() => navigate("/dashboard", { state: data })}
                className='admin-header-navbar-link'
              >
                Dashboard
              </li>
              {/* when clicking this Assessments text, it'll navigates to send assessments route */}
              <li
                onClick={() => navigate("/sendAssessments", { state: data })}
                className='admin-header-navbar-link'
              >
                Assessments
              </li>
              {/* when clicking this Test Reports text, it'll navigates to test reports route */}
              <li
                onClick={() => navigate("/testReports", { state: data })}
                className='admin-header-navbar-link'
              >
                Test Reports
              </li>
              {/* when clicking this student reports text, it'll navigates to student reports route */}
              <li
                onClick={() => navigate("/studentReports", { state: data })}
                className='admin-header-navbar-link'
              >
                Student Reports
              </li>
              {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
              <li
                onClick={() => navigate("/adminLogin")}
                className='admin-header-navbar-link'
              >
                Admin
              </li>
            </ul>
          </Popup>
        </div>
      </div>
    <div className='not-found-container'>
      <img
        className='not-found-img'
        src='https://res.cloudinary.com/dahw90b2z/image/upload/v1649202458/erroring_1_wmrpgf.png'
        alt='page not found'
      />
      <h1 className='no-found-heading'>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <p>Please go back to homepage</p>
    </div>
    <Footer />
    </div>
  );
};

export default NotFound;
