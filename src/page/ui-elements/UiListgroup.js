import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiListgroup extends Component {
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
              <h4>List group</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI List group</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Basic List</h4>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Links items List</h4>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action active">Cras justo odio</a>
              <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
              <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
              <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
              <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">buttons items List</h4>
            <div className="list-group">
              <button type="button" className="list-group-item list-group-item-action ">Cras justo odio</button>
              <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
              <button type="button" className="list-group-item list-group-item-action active">Morbi leo risus</button>
              <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
              <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Flush List</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Disabled items List</h4>
            <ul className="list-group">
              <li className="list-group-item disabled">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">With badges List</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span className="badge badge-primary badge-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span className="badge badge-primary badge-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span className="badge badge-primary badge-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span className="badge badge-primary badge-pill">5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span className="badge badge-primary badge-pill">7</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Contextual List</h4>
            <ul className="list-group">
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
              <li className="list-group-item list-group-item-secondary">This is a secondary list group item</li>
              <li className="list-group-item list-group-item-success">This is a success list group item</li>
              <li className="list-group-item list-group-item-danger">This is a danger list group item</li>
              <li className="list-group-item list-group-item-warning">This is a warning list group item</li>
              <li className="list-group-item list-group-item-info">This is a info list group item</li>
              <li className="list-group-item list-group-item-dark">This is a dark list group item</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-20 h4">Custom content List</h4>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                <h5 className="mb-1 h5 color-white">List group item heading</h5>
                <div className="pb-1">
                  <small className="weight-600">3 days ago</small>
                </div>
                <p className="mb-1 font-14">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <h5 className="mb-1 h5">List group item heading</h5>
                <div className="pb-1">
                  <small className="text-muted weight-600">3 days ago</small>
                </div>
                <p className="mb-1 font-14">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
              </a>
              <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <h5 className="mb-1 h5">List group item heading</h5>
                <div className="pb-1">
                  <small className="text-muted weight-600">3 days ago</small>
                </div>
                <p className="mb-1 font-14">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
              </a>
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
