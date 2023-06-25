import React from "react";
import StudentNavbar from "../StudentNavbar";

const FrontEndFresherTest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfrDGqx_UKpYQRWXux6DY46fQ7ORmMCOrumWBg0edT-zXaDmw/viewform?embedded=true'
          width='700'
          height='520'
          title='FrontEndFresherTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FrontEndFresherTest;
