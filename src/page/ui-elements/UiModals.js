import React, { Component } from 'react'


import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiModals extends Component {
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
              <h4>Modals</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Modals</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        {/* Large modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Large modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#bd-example-modal-lg" type="button">
              <img src="vendors/images/modal-img1.jpg" alt="modal" />
            </a>
            <div className="modal fade bs-example-modal-lg" id="bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Medium modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Medium modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#Medium-modal" type="button">
              <img src="vendors/images/modal-img2.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="Medium-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Small modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Small modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#small-modal" type="button">
              <img src="vendors/images/modal-img3.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="small-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Login modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Login modal</h5>
            <a href="#" className="btn-block" data-backdrop="static" data-toggle="modal" data-target="#login-modal" type="button">
              <img src="vendors/images/modal-img2.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="login-box bg-white box-shadow border-radius-10">
                    <div className="login-title">
                      <h2 className="text-center text-primary">Login To DeskApp</h2>
                    </div>
                    <form>
                      <div className="select-role">
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                          <label className="btn active">
                            <input type="radio" name="options" id="admin" />
                            <div className="icon"><img src="vendors/images/briefcase.svg" className="svg" alt /></div>
                            <span>I'm</span>
                            Manager
                          </label>
                          <label className="btn">
                            <input type="radio" name="options" id="user" />
                            <div className="icon"><img src="vendors/images/person.svg" className="svg" alt /></div>
                            <span>I'm</span>
                            Employee
                          </label>
                        </div>
                      </div>
                      <div className="input-group custom">
                        <input type="text" className="form-control form-control-lg" placeholder="Username" />
                        <div className="input-group-append custom">
                          <span className="input-group-text"><i className="icon-copy dw dw-user1" /></span>
                        </div>
                      </div>
                      <div className="input-group custom">
                        <input type="password" className="form-control form-control-lg" placeholder="**********" />
                        <div className="input-group-append custom">
                          <span className="input-group-text"><i className="dw dw-padlock1" /></span>
                        </div>
                      </div>
                      <div className="row pb-30">
                        <div className="col-6">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="forgot-password"><a href="forgot-password.html">Forgot Password</a></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="input-group mb-0">
                            {/*
																use code for form submit
																<input class="btn btn-primary btn-lg btn-block" type="submit" value="Sign In">
															*/}
                            <a className="btn btn-primary btn-lg btn-block" href="index.html">Sign In</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Alert modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Alert modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#alert-modal" type="button">
              <img src="vendors/images/modal-img3.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="alert-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content bg-danger text-white">
                  <div className="modal-body text-center">
                    <h3 className="text-white mb-15"><i className="fa fa-exclamation-triangle" /> Alert</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-light" data-dismiss="modal">Ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Warning modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Warning modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#warning-modal" type="button">
              <img src="vendors/images/modal-img3.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="warning-modal" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content bg-warning">
                  <div className="modal-body text-center">
                    <h3 className="mb-15"><i className="fa fa-exclamation-triangle" /> Warning</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-dark" data-dismiss="modal">Ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Success modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Success modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#success-modal" type="button">
              <img src="vendors/images/modal-img3.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="success-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body text-center font-18">
                    <h3 className="mb-20">Form Submitted!</h3>
                    <div className="mb-30 text-center"><img src="vendors/images/success.png" /></div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Done</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Confirmation modal */}
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h5 className="h4">Confirmation modal</h5>
            <a href="#" className="btn-block" data-toggle="modal" data-target="#confirmation-modal" type="button">
              <img src="vendors/images/modal-img3.jpg" alt="modal" />
            </a>
            <div className="modal fade" id="confirmation-modal" tabIndex={-1} role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body text-center font-18">
                    <h4 className="padding-top-30 mb-30 weight-500">Are you sure you want to continue?</h4>
                    <div className="padding-bottom-30 row" style={{maxWidth: 170, margin: '0 auto'}}>
                      <div className="col-6">
                        <button type="button" className="btn btn-secondary border-radius-100 btn-block confirmation-btn" data-dismiss="modal"><i className="fa fa-times" /></button>
                        NO
                      </div>
                      <div className="col-6">
                        <button type="button" className="btn btn-primary border-radius-100 btn-block confirmation-btn" data-dismiss="modal"><i className="fa fa-check" /></button>
                        YES
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
