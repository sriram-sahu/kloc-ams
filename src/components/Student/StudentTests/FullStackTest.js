import React from "react";
import StudentNavbar from "../StudentNavbar";

const FullStackTest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSey5QnV8zlrIaW1iA_VUPsk3Dn00EvsHJFBdAfstuQ5sFKqHA/viewform?embedded=true'
          width='700'
          height='520'
          title='FullStackTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FullStackTest;
