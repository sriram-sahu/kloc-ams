import React from "react";
import StudentNavbar from "../StudentNavbar";

const PythonTest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSc6bo70tKr4cBVmXu77DCT5GDk4QxDQqlBn-Yc4rm52Nm3YwA/viewform?embedded=true'
          width='700'
          height='520'
          title='PythonTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default PythonTest;
