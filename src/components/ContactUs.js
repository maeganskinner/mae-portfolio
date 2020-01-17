import React, { Component } from 'react';


export default class ContactUs extends Component {

  render() {

    

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              I am looking for new opportunities! 
              <br></br>
              Feel free to contact me for any work or suggestions at any of the methods below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4> 
                    <a href="https://www.linkedin.com/in/maeganskinner/"> Linkedin </a>
                </h4>

                <h4> 
                <a href="https://github.com/maeganskinner"> Github </a>  
                </h4>
                
                <h4> Email- Maeganskinner@ymail.com</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
  
}