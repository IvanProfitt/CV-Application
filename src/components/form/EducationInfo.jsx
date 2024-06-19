import React, { useState, useEffect } from 'react';

function EducationInfo({ onSubmit, onCancel }) {
  const [eduInfo, setEduInfo] = useState({
    schoolName: '',
    schoolSubject:  '',
    startDate: '',
    endDate:  '',
  });



  // Handle input change
  const changeEduData = (e) => {
    const { name, value } = e.target;
    setEduInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const EduSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={EduSubmit}>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={eduInfo.schoolName}
        onChange={changeEduData}
      />

      <label htmlFor="schoolSubject">Study Subject</label>
      <input
        type="text"
        id="schoolSubject"
        name="schoolSubject"
        value={eduInfo.schoolSubject}
        onChange={changeEduData}
      />

      <label htmlFor="schoolStart">Start Date</label>
      <input
        type="date"
        id="schoolStart"
        name="schoolStart"
        value={eduInfo.email}
        onChange={changeEduData}
      />

      <label htmlFor="schoolEnd">End Date</label>
      <input
        type="date"
        id="schoolEnd"
        name="schoolEnd"
        value={eduInfo.phoneNumber}
        onChange={changeEduData}
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}


export default EducationInfo;
