import React, { Component } from 'react';

    function resume() {
    return (
      <section id="resume">

         <div className="row work">

            <div className="">
               <h1><span>Education</span></h1>
               <ul>
                  <li><h4>Ohio University</h4><p>Masters of Business Administration-Finance</p></li>
                  <li><h4>Ohio Dominican University</h4><p>Bachelors of Science-Accounting</p></li>
               </ul>
            </div>
         </div>
        <div className="row work">
            <div className="">
               <h1><span>Experience</span></h1>
               <ul>
                  <li><h4>Current Company</h4><p>Currently the Program Manager for Security Assurance focused NIST framework and compliance with security standards</p></li>
                  <li><h4>Previous Company</h4><p>Managed the PMO for a mobile and backend development for healthcare communications company</p></li>
                  <li><h4>Previous Company</h4><p>Project Manager for greenfield development projects in healthcare industry</p></li>

               </ul>
            </div>

            <div className="">
             
            </div> 
         </div>
         <div className="row work">
            <div className="">
               <h1><span>Certifications</span></h1>
               <ul>
                  <li><h4>Project Management Professional (PMP)</h4></li>
                  <li><h4>Certified ScrumMaster (CSM)</h4></li>
               </ul>
            </div>

            <div className="nine columns main-col">
             
            </div> 
         </div>

      </section>
    );
  }

export default resume;