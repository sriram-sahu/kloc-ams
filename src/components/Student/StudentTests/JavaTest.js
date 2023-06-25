import React from "react";
import StudentNavbar from "../StudentNavbar";

const JavaTest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSe854IK4Vjbc75J4KHfh7vtseWAhA3oM9_tvV1Chc-B3TSs4g/viewform?embedded=true'
          width='700'
          height='520'
          title='javaTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default JavaTest;
