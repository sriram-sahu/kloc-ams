import React from "react";
import StudentNavbar from "../StudentNavbar";
const FreshersJuniorTest = () => {
  return (
    <div>
      <StudentNavbar />;
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLScEF29Ck2UPPWQXODVSVUH4lZFpbo1N71Cgf0AjJlo_fOtDxQ/viewform?embedded=true'
          width='640'
          height='11509'
          title='FresherJuniorTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
export default FreshersJuniorTest;
