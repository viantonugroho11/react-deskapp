import React, { Component } from 'react'

import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiSweetAlert extends Component {
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
              <h4>Sweet Alert</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Sweet Alert</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A basic message</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-basic">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A title with a text under</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-title">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A success message!</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-success">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A error message!</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-error">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A warning message, with a function attached to the "Confirm"-button...</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-warning">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A custom positioned dialog</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-custom-position">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">By passing a parameter, you can execute something else for "Cancel".</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-params">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A message with custom Image Header</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-image">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A message with auto close timer</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="sa-close">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">Custom HTML description and buttons</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="custom-html-alert">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">A message with custom width, padding and background</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="custom-padding-width-alert">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">Ajax request example</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="ajax-alert">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">Chaining modals (queue) example</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="chaining-alert">Click me</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box text-center height-100-p">
            <h5 className="pt-20 h5 mb-30">Dynamic queue example</h5>
            <div className="max-width-200 mx-auto">
              <button type="button" className="btn mb-20 btn-primary btn-block" id="dynamic-alert">Click me</button>
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
