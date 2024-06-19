import React, { useState, useEffect } from 'react';

function GeneralInfo({ onSubmit, onCancel }) {
  const [infoGen, setInfoGen] = useState({
    firstName: '',
    lastName:  '',
    email: '',
    phoneNumber:  '',
  });



  // Handle input change
  const changeGenData = (e) => {
    const { name, value } = e.target;
    setInfoGen((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const GeneralSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={GeneralSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={infoGen.firstName}
        onChange={changeGenData}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={infoGen.lastName}
        onChange={changeGenData}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={infoGen.email}
        onChange={changeGenData}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={infoGen.phoneNumber}
        onChange={changeGenData}
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}


export default GeneralInfo;
