import React from "react";
import StudentNavbar from "../StudentNavbar";

const MernDeveloperIntermediate = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfqB_s6hE_rIV4I8edQaO_u6Q-Jr6GvhDrI42vlYEwEr3hPdA/viewform?embedded=true'
          width='700'
          height='520'
          title='MernDeveloperIntermediate'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default MernDeveloperIntermediate;
