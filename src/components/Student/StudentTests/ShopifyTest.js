import React from "react";
import StudentNavbar from "../StudentNavbar";

const ShopifyTest = () => {
  return (
    <div>
      <StudentNavbar />
      <div className='text-center pt-5'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfmG8lozHE7zsZCiuDPZHcT21j7FxceG0MVIHTMhkWcVADD6w/viewform?embedded=true'
          width='700'
          height='520'
          title='ShopifyTest'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ShopifyTest;
