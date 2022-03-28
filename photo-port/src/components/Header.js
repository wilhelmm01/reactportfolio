import React, { Component } from 'react';

    function head() {
    return (
     
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
              <h2>About Me</h2>
               <h1>Matthew Wilhelm</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a Sr. Security Assurance Program Manager for a pharmaceutical manufacturing company. Prior to my current role, I have spent over ten years as a software development Project Manager/Scrum Master in the healthcare industries. My current professional goals are to complete a full stack web development course; which will arm me with the tools to be a more effective project manager. 
               </h3>
               <hr/>
            </div>
         </div>
         

         

      </header>
      
    );
  }

export default head;