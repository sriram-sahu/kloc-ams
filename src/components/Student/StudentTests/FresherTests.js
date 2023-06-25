import React from "react";
import StudentNavbar from "../StudentNavbar";

const FresherTests = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfTsUnkTZgGcIG6ZekFGNNCJ5o2I6hXLSMSrvs6ibRNiRJJJg/viewform?embedded=true'
          width='700'
          height='520'
          title='FresherTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FresherTests;
