import React, { Component } from 'react';

    function contactMe(){
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="">
                <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" />
                  </div>
                  <div>
                  <label htmlFor="email">Email address:</label>
                  <input type="email" name="email" />
                </div>
                <div>
                 <label htmlFor="message">Message:</label>
                  <textarea name="message" rows="5"  />
                </div>
                <button type="submit">Submit</button>
                </form>
            </aside>
          </div>
        </section>
        );
  }
//}
export default contactMe;