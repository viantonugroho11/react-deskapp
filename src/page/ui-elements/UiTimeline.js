import React, { Component } from 'react'


import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiTimeline extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Leftbar/>
        <Sidebar/>
<div className="main-container">
  <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title">
              <h4>Timeline</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Timeline</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pd-0">
        <div className="timeline mb-30">
          <ul>
            <li>
              <div className="timeline-date">
                15 Jan 2020
              </div>
              <div className="timeline-desc card-box">
                <div className="pd-20">
                  <h4 className="mb-10 h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-date">
                14 Jan 2020
              </div>
              <div className="timeline-desc card-box">
                <div className="pd-20">
                  <h4 className="mb-10 h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-date">
                13 Jan 2020
              </div>
              <div className="timeline-desc card-box">
                <div className="card card-box">
                  <img className="card-img-top" src="vendors/images/img2.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title weight-500">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-date">
                12 Jan 2020
              </div>
              <div className="timeline-desc card-box">
                <div className="pd-20">
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <footer className="blockquote-footer">
                      <small>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-wrap pd-20 mb-20 card-box">
      DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
    </div>
  </div>
</div>

      </div>
    )
  }
}
