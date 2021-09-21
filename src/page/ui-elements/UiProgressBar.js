import React, { Component } from 'react'

import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiProgressBar extends Component {
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
              <h4>Progress Bar</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Progress Bar</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Basic Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Backgrounds Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar bg-success" role="progressbar" style={{width: '15%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Multiple Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar bg-success" role="progressbar" style={{width: '15%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Labels Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>50%</div>
            </div>
            <div className="progress mb-20">
              <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>75%</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Height Progress</h5>
            <div className="progress mb-20" style={{height: 5}}>
              <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20" style={{height: 18}}>
              <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
            </div>
            <div className="progress" style={{height: 25}}>
              <div className="progress-bar bg-info" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>75%</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Animated  Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress">
              <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h5 mb-20">Striped Progress</h5>
            <div className="progress mb-20">
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress mb-20">
              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
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
