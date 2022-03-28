import React, { Component } from 'react';

   function portfolio() {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Github Portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://wilhelmm01.github.io/run-buddy/"><img src="images/runbuddy.jpg"></img></a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://wilhelmm01.github.io/password-generator/"><img src="images/password.jpg"></img></a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://wilhelmm01.github.io/wordkay-scheduler/"><img src="images/workday.jpg"></img></a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://wilhelmm01.github.io/football_info/"><img src="images/foorball.jpg"></img></a>
                  </div>
                </div>
          </div>
        </div>
      </div>
      
  </section>
        );
  }

export default portfolio;