import React from "react";
import StudentNavbar from "../StudentNavbar";

const MernDeveloperJunior = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSe-QGKb02hDYOw5P90U1NnsFbr57ULgiDko4b6Z44j05HPsjQ/viewform?embedded=true'
          width='700'
          height='520'
          title='MernDeveloperJunior'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default MernDeveloperJunior;
