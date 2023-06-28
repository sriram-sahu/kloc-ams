// import all required packages like react, unique-random, @emailjs-browser, js-cookie, react-router-dom, @mui-material, reactjs-popup, react-icons and components like EachCandidateInputField, index.css components to render the SendAssessments component
// import all required packages like react, unique-random, @emailjs-browser, js-cookie, react-router-dom, @mui-material, reactjs-popup, react-icons and components like EachCandidateInputField, index.css components to render the SendAssessments component
import React, { useState, useEffect } from "react";
import EachCandidateInputField from "./EachCandidateInputField";
import uniqueRandom from "unique-random";
import emailjs from "@emailjs/browser";
import "./index.css";
// import Navbar from "./Navbar";
import Cookies from "js-cookie";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@mui/material";
import {useLocation} from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Assessment = () => {
  const [activeTest, setActiveTest] = useState("");
  const [studentCount, setStudentCount] = useState(1);
  const [proceeding, setProceeding] = useState(false);
  const [proceedingStatus, setProceedingStatus] = useState(false);
  const [candidateFields, setCandidateFields] = useState([]);
  const [open, setOpen] = useState(false);
  const location=useLocation()
  const [finalData,setFinalData]=useState(location.state)
  const tests = [
    "Freshers Junior Test",
    "Fresher Test",
    "Freshers QA Test",
    "Full Stack Developer Test",
    "Freshers Python Test",
    "Freshers Java Test",
    "Frontend Freshers Test",
    "Shopify Developer Test",
    "MERN Developer Junior Test",
    "MERN Developer Intermediate Test",
  ];
  const isEmptyField = candidateFields.some((each) =>
    Object.values(each).some((value) => value === "")
  );
  const handleClickOpen = () => {
    if (!isEmptyField) {
      setOpen(true);
    }
    if (isEmptyField) {
      alert("Please fill in all the candidate details");
      return;
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/notFound");
    }
    setStudentCount(1);
    setProceeding(false);
  }, [activeTest]);
  const handleInputChange = (index, values) => {
    setCandidateFields((prevCandidateFields) => {
      const updatedFields = [...prevCandidateFields];
      updatedFields[index] = { ...updatedFields[index], ...values };
      return updatedFields;
    });
  };
  const onClickProceed = () => {
    if (activeTest === "") {
      alert("Select Test");
    } else {
      setProceeding(true);
      setProceedingStatus(true)
      setCandidateFields(Array.from({ length: studentCount }, () => ({})));
    }
  };
  const sendingMailThroughEmailJs = (student) => {
    console.log(student);
    emailjs
      .send(
        "service_okvqzif",
        "template_3ujjkix",
        {
          to_name: student.name,
          from_name: "kloc",
          message: `You have been invited to write ${student.test}. \n Your login email is ${student.email} and Test pin in ${student.uniqueId}. \n Test Link : http://localhost:3000/studentLogin`,
          to_email: student.email,
        },
        "MkG09aTM7gyK7zTog"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert(`Email sent to ${student.email}`);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const updateStudentThroughSheetDb = (student) => {
    console.log(activeTest);
    const random = uniqueRandom(10000, 100000);
    const sentDate = new Date(); // Current date and time
    const endDate = new Date(student.endDate); // Convert endDate to a Date object
    const details = {
      name: student.name,
      email: student.email,
      test: activeTest,
      phoneNo: student.phone,
      sentDate: sentDate,
      endDate: endDate,
      uniqueId: "kloc" + random(),
      isCompleted: "incomplete",
    };
    console.log(details, "gh");
    fetch("https://sheetdb.io/api/v1/qeetqgie30fhh", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer n95196updlz3oo643ihw1vmttqaq81atj4mfk7qq",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
    const millisecondsDiff = Math.abs(sentDate.getTime() - endDate.getTime());
    setTimeout(() => {
      const key = "AIzaSyAz1z7QqYvovxmnO-lvzoORcMC1UZzXNRE";
      console.log(details.uniqueId);
      fetch(
        `https://script.google.com/macros/s/AKfycbwYjd68zDra8M_URGyixHK87--R17dEEX4e5vMbyK3FWjQ48hWlaKg3Vzl9f3Foua7-3g/exec?key=${key}&uniqueId=${details.uniqueId}`
      );
    }, millisecondsDiff);
  };
  const onClickSendAssessment = () => {
    console.log("triggered");
    // Check if any of the candidate input fields are empty
    candidateFields.forEach((each) => {
      updateStudentThroughSheetDb(each);
      sendingMailThroughEmailJs(each);
    });
    handleClose();
    setProceeding(false);
    setProceedingStatus(false)
  };
  return (
    <div className="send-assessment-main-container">
      {/* header for desktop  with Logo and components Dashboard, Assessments, Test Reports, Student Reports and Admin */}
      <div className="admin-header-container">
        <div className="admin-header-logo-container">
          {/* logo */}
          <img src="https://res.cloudinary.com/dufx8zalt/image/upload/v1687419355/logoimage1_krvkbq.png" alt="logo" style={{height:'50px', width:'100px', borderRadius:'10px'}} onClick={()=>navigate('/')}/>
        </div>
        <div className="admin-desktop-header-navbar-container">
          {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
          <p onClick={()=>navigate('/dashboard',{state:finalData})} className="admin-desktop-header-navbar-link">Dashboard</p>
          {/* when clicking this Assessments text, it'll navigates to send assessments route */}
          <p onClick={()=>navigate('/sendAssessments',{state:finalData})} className="admin-desktop-header-navbar-link">Assessments</p>
          {/* when clicking this Test Reports text, it'll navigates to test reports route */}
          <p onClick={()=>navigate('/testReports',{state:finalData})} className="admin-desktop-header-navbar-link">Test Reports</p>
          {/* when clicking this student reports text, it'll navigates to student reports route */}
          <p onClick={()=>navigate('/studentReports',{state:finalData})} className="admin-desktop-header-navbar-link">Student Reports</p>
          {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
          <p className="admin-desktop-header-navbar-link" onClick={()=> navigate('/adminLogin')}>Admin</p>
        </div>
        {/* nav header for mobile  with Logo and components Dashboard, Assessments, Test Reports, Student Reports and Admin */}
        <div className="admin-mobile-header-navbar-container">
            <Popup contentStyle={{ width: '50%',backgroundColor:"white" }} trigger={<button  className="admin-hamburger-btn"><GiHamburgerMenu /></button>} position="bottom right" >
            <ul className="admin-mobile-hamburger-menu">
              {/* when clicking this Dashboard text, it'll navigates to dashboard route */}
              <li onClick={()=>navigate('/dashboard',{state:finalData})} className='admin-header-navbar-link'>Dashboard</li>
              {/* when clicking this Assessments text, it'll navigates to send assessments route */}
              <li onClick={()=>navigate('/sendAssessments',{state:finalData})} className='admin-header-navbar-link'>Assessments</li>
              {/* when clicking this Test Reports text, it'll navigates to test reports route */}
              <li onClick={()=>navigate('/testReports',{state:finalData})} className='admin-header-navbar-link'>Test Reports</li>
              {/* when clicking this student reports text, it'll navigates to student reports route */}
              <li onClick={()=>navigate('/studentReports',{state:finalData})} className='admin-header-navbar-link'>Student Reports</li>
              {/* when clicking this Sign Out text, it'll navigates to admin login route and again admin can access all routes */}
              <li onClick={()=> navigate('/adminLogin')} className='admin-header-navbar-link'>Admin</li>
            </ul>
            </Popup>
          </div>
        </div>
        <div className="assessment-container">
          <div className="each-assessment-container">
            {tests.map((each, index) => (
              <div key={index} className="input-container">
                <div className="assessmentContainerCheckboxContainer">
                  <input
                    type="radio"
                    name="test"
                    id={index}
                    onChange={(e) => setActiveTest(e.target.value)}
                    value={each}
                    className='assessmentContainerCheckbox'
                  />
                  <label htmlFor={index} className='assessmentContainerCheckboxLabel'>{each}</label>
                </div>
                <input
                  disabled={activeTest !== each}
                  type="number"
                  className="assessmentContainerInput"
                  id={index}
                  onChange={(e) => setStudentCount(e.target.value)}
                  value={activeTest === each ? studentCount : ""}
                />
              </div>
            ))}
          </div>
          <button
            variant="contained"
            className="assessment-button m-3"
            onClick={onClickProceed}
          >
            Proceed
          </button>
        </div>
        <div className="each-input-student-details-container">
          {proceeding &&
            Array.from({ length: studentCount }, (_, index) => (
              <EachCandidateInputField
                key={index}
                index={index} // Pass the index as a prop
                onInputChange={(values) => handleInputChange(index, values)}
              />
            ))}
          {proceeding && (
            <div className="text-center">
              <button onClick={handleClickOpen} className="send-assessment-button">
                SEND ASSESSMENT
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are You Sure You Want To Send?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let's Check onces before sending the assessment !
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={onClickSendAssessment} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </div>
    </div>
  );
};
export default Assessment;