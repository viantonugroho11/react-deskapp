import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiRangeSlider extends Component {
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
              <h4>Range slider</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Range slider</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pd-0">
        <div className="pd-20 card-box mb-30">
          <h4 className="h4 pb-10">Range slider HTML5</h4>
          <div className="row">
            <div className="col-md-6 mb-30 mb-md-0">
              <input id="range_01" />
            </div>
            <div className="col-md-6">
              <input id="range_01_1" />
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <h4 className="h4 pb-10">range and step</h4>
          <div className="row">
            <div className="col-md-6 mb-30 mb-md-0">
              <input id="range_02" />
            </div>
            <div className="col-md-6">
              <input id="range_02_1" />
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <h4 className="h4 pb-10">custom values</h4>
          <div className="row">
            <div className="col-md-6 mb-30 mb-md-0">
              <input id="range_03" />
            </div>
            <div className="col-md-6">
              <input id="range_03_1" />
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <h4 className="h4 pb-10">Prettify visual look of numbers</h4>
          <div className="row">
            <div className="col-md-6 mb-30 mb-md-0">
              <input id="range_04" />
            </div>
            <div className="col-md-6">
              <input id="range_04_1" />
            </div>
          </div>
        </div>
        <div className="pd-20 card-box mb-30">
          <h4 className="h4 pb-10">Visual details</h4>
          <div className="row">
            <div className="col-md-6 mb-30 mb-md-0">
              <input id="range_05" />
            </div>
            <div className="col-md-6">
              <input id="range_05_1" />
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
