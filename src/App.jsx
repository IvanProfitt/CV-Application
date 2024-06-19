import GenInfo from './components/form/GenInfo'
import Greeting from './components/Greeting'
import {useState, useEffect} from "react"
import PropTypes from "prop-types"
import './App.css'
import EducationInfo from './components/form/EducationInfo'





function SchoolSubmit(e){
  e.preventDefault();
}


function CompanySubmit(e){
  e.preventDefault();
}




function App() {

  return (
    <>
    <GenInfo/>
    <EducationInfo />
      <form>
        <label htmlFor="companyName">Company Name</label>
        <input type="text" className='companyName'></input>

        <label htmlFor="companyTitle">Job Title</label>
        <input type="text" className='companyTitle'></input>

        <label htmlFor="companyResponsibilities">Responsibilities</label>
        <input type="text" className='companyResponsibilities'></input>

        <label htmlFor="companyStart">Start Date</label>
        <input type="text" className='companyStart'></input>

        <label htmlFor="companyEnd">End Date</label>
        <input type="text" className='companyEnd'></input>

        <button type="submit" onClick={CompanySubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
