import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiNotification extends Component {
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
              <h4>Notification</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Notification</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="h4">Examples</h4>
            <p className="pb-20">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <strong>required</strong> contextual classes <code>(e.g., .alert-success)</code>. For inline dismissal, use the alerts jQuery plugin.</p>
            <div className="alert alert-primary" role="alert">
              This is a primary alert—check it out!
            </div>
            <div className="alert alert-secondary" role="alert">
              This is a secondary alert—check it out!
            </div>
            <div className="alert alert-success" role="alert">
              This is a success alert—check it out!
            </div>
            <div className="alert alert-danger" role="alert">
              This is a danger alert—check it out!
            </div>
            <div className="alert alert-warning" role="alert">
              This is a warning alert—check it out!
            </div>
            <div className="alert alert-info" role="alert">
              This is a info alert—check it out!
            </div>
            <div className="alert alert-light" role="alert">
              This is a light alert—check it out!
            </div>
            <div className="alert alert-dark" role="alert">
              This is a dark alert—check it out!
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="h4">Link color</h4>
            <p className="pb-20">Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
            <div className="alert alert-primary" role="alert">
              This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-secondary" role="alert">
              This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-success" role="alert">
              This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-danger" role="alert">
              This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-warning" role="alert">
              This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-info" role="alert">
              This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-light" role="alert">
              This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-dark" role="alert">
              This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="h4">Dismissing</h4>
            <p className="pb-20">You can see this in action with a live demo:</p>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-secondary alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="alert alert-dark alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading h4">Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-primary" role="alert">
              <h4 className="alert-heading h4">Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <div className="alert alert-secondary" role="alert">
              <h4 className="alert-heading h4">Well done!</h4>
              <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
          </div>
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
