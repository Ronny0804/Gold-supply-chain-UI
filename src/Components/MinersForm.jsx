import React from 'react'
import '../styles/MinersForm.css'
const MinersForm = () => {
  return (
    <>   
    
<section id='minersform'>
  <div className="container">
    <form id="survey-form">
      <div className="input-box">
        <label htmlFor="name" className="title-label" id="name-label">Name</label>
        <input type="text" id="name" className="input-text" placeholder="Enter your name" required />
      </div>
      <div className="input-box">
        <label htmlFor="email" className="title-label" id="email-label">E-mail</label>
        <input type="email" id="email" className="input-text" placeholder="Enter your e-mail" required />
      </div>
      <div className="input-box">
        <label htmlFor="number" className="title-label" id="number-label">Age</label>
        <input type="number" id="number" className="input-text" min={0} max={200} placeholder="Enter your age" />
      </div>
      <input type="submit" id="submit" defaultValue="Submit" className="submit-button" />
    </form>
  </div>
</section>




    </>
  )
}

export default MinersForm