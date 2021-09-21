import React, { Component } from 'react'


import Header from '../../compenent/Header'
import Leftbar from '../../compenent/Leftbar'
import Sidebar from '../../compenent/Sidebar'
export default class Html5Editor extends Component {
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
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Form</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            <div className="dropdown">
              <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                January 2018
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Export List</a>
                <a className="dropdown-item" href="#">Policies</a>
                <a className="dropdown-item" href="#">View Assets</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="html-editor pd-20 card-box mb-30">
        <h4 className="h4 text-blue">bootstrap wysihtml5</h4>
        <p>Simple, beautiful wysiwyg editors</p>
        <textarea className="textarea_editor form-control border-radius-0" placeholder="Enter text ..." defaultValue={""} />
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
