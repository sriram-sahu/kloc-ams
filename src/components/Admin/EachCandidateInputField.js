import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import "./index.css";
const EachCandidateInputField = ({ onInputChange }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    endDate: "",
  });
  const handleInputChange = (field, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [field]: value,
    }));
  };
  useEffect(() => {
    onInputChange(inputValues); // Notify the parent component about the input values
  }, [inputValues]); // Empty dependency array to run the effect only once when the component mounts
  console.log(inputValues);
  return (
      <div className="bg-each-candidate-field">
        <div className="each-candidate-subContainer1">
        <input
          id="outlined-basic-1"
          placeholder="Name"
          variant="outlined"
          className="input-field m-1 custom-input-field"
          value={inputValues.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
          
        />
        <input
          id="outlined-basic-2"
          placeholder="Email"
          variant="outlined"
          className="input-field m-1 custom-input-field"
          value={inputValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
        </div> 
        <div className="each-candidate-subContainer2">
        <input
          id="outlined-basic-3"
          placeholder="Phone"
          variant="outlined"
          className="input-field m-1 custom-input-field"
          value={inputValues.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
        />
        <input 
          id="outlined-basic-4"
          placeholder="Date"
          type="date"
          variant="outlined"
          className="input-field m-1 custome-input-field"
          value={inputValues.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
          required
        />
        </div>
        {/* <hr /> */}
      </div>
  );
};
export default EachCandidateInputField;