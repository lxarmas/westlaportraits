import React from 'react';
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {

    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault()
        navigate("/")
    }

  return (
    <div className='confirm'>
      <h1><b>Booking Confirmed!</b></h1>
      <p>Your request has been successfully sent. We look forward to talking to you soon!</p>
      <button onClick={Submit}>Back to Home</button>
    </div>
  );
};

export default ConfirmedBooking;
