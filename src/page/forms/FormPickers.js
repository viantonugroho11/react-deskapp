import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class FormPickers extends Component {
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
              <h4>Form Pickers</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form Pickers</li>
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
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Date Picker</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <form>
              <div className="form-group">
                <label>Default Datedpicker</label>
                <input className="form-control date-picker" placeholder="Select Date" type="text" />
              </div>
              <div className="form-group">
                <label>Date and time</label>
                <input className="form-control datetimepicker" placeholder="Choose Date anf time" type="text" />
              </div>
            </form>
          </div>
          <div className="col-md-4 col-sm-12 text-center">
            <div className="mb-20">
              <label>Datedpicker Inline</label>
              <div className="datepicker-here" data-timepicker="true" data-language="en" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <form>
              <div className="form-group">
                <label>Datedpicker Month View</label>
                <input className="form-control month-picker" placeholder="Select Month" type="text" />
              </div>
              <div className="form-group">
                <label>Datedpicker Range View</label>
                <input className="form-control datetimepicker-range" placeholder="Select Month" type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Clock Picker</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="form-group">
              <label>time Delive</label>
              <input className="form-control time-picker-default" placeholder="time" type="text" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="form-group">
              <label>Train departure</label>
              <input className="form-control time-picker-default" placeholder="time" type="text" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="form-group">
              <label>Alarm Clock</label>
              <input className="form-control time-picker" placeholder="time" type="text" />
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="form-group">
              <label>Text field</label>
              <input className="form-control time-picker-default" placeholder="time" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box height-100-p mb-30">
        <div className="clearfix mb-30">
          <div className="pull-left">
            <h4 className="text-blue h4">Color Picker</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="form-group">
              <label>
                Simple mode
                <div className="font-14">use <code>.colorpicker</code> in your input element. </div>
              </label>
              <input type="text" className="colorpicker form-control" defaultValue="#7ab2fa" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="form-group">
              <label>
                Simple mode
                <div className="font-14">use <code>.complex-colorpicker</code> in your input element. </div>
              </label>
              <input type="text" className="complex-colorpicker form-control" defaultValue="#7ab2fa" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="form-group">
              <label>
                Simple mode
                <div className="font-14">use <code>.gradient-colorpicker</code> in your input element. </div>
              </label>
              <input type="text" className="gradient-colorpicker form-control" defaultValue="#f56767" />
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
