import React from "react";
import StudentNavbar from "../StudentNavbar";

const FresherQATest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSe_6u3m6FpCbHOnOhmcqQvF9j4BZQmZ_xQJCvXemdgUoiGfzQ/viewform?embedded=true'
          width='700'
          height='520'
          title='FresherQATest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default FresherQATest;
