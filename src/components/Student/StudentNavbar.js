import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const StudentNavbar = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant='h6' component='div'>
              <img
                src='https://res.cloudinary.com/de5cu0mab/image/upload/v1688216997/KLoc_Square_Logo_-_400x400_ciw1ej.jpg'
                alt='logo'
                style={{ height: "50px", width: "70px", borderRadius: "10px" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <Typography variant='h6' component='div'>
              User : {props.email}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default StudentNavbar;
