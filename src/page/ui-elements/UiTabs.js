import React, { Component } from 'react'

import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiTabs extends Component {
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
              <h4>Tabs</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Tabs</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Default Tab</h5>
            <div className="tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active text-blue" data-toggle="tab" href="#home" role="tab" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#profile" role="tab" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#contact" role="tab" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Customtab Tab</h5>
            <div className="tab">
              <ul className="nav nav-tabs customtab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home2" role="tab" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#profile2" role="tab" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#contact2" role="tab" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home2" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="profile2" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="contact2" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">vertical Tab</h5>
            <div className="tab">
              <div className="row clearfix">
                <div className="col-md-3 col-sm-12">
                  <ul className="nav flex-column vtabs nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home3" role="tab" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#profile3" role="tab" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#contact3" role="tab" aria-selected="false">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home3" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile3" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact3" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Custom vertical Tab</h5>
            <div className="tab">
              <div className="row clearfix">
                <div className="col-md-3 col-sm-12">
                  <ul className="nav flex-column vtabs nav-tabs customtab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home4" role="tab" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#profile4" role="tab" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#contact4" role="tab" aria-selected="false">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home4" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile4" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact4" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Nav Pills Tabs</h5>
            <div className="tab">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active text-blue" data-toggle="tab" href="#home5" role="tab" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#profile5" role="tab" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#contact5" role="tab" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home5" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="profile5" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="contact5" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Nav Pills Tabs Right</h5>
            <div className="tab">
              <ul className="nav nav-pills justify-content-end" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active text-blue" data-toggle="tab" href="#home6" role="tab" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#profile6" role="tab" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-blue" data-toggle="tab" href="#contact6" role="tab" aria-selected="false">Contact</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="home6" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="profile6" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
                <div className="tab-pane fade" id="contact6" role="tabpanel">
                  <div className="pd-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Icons vertical Nav Pills Tab</h5>
            <div className="tab">
              <div className="row clearfix">
                <div className="col-md-3 col-sm-12">
                  <ul className="nav flex-column nav-pills vtabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home7" role="tab" aria-selected="true"><i className="fa fa-home" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#profile7" role="tab" aria-selected="false"><i className="fa fa-users" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#contact7" role="tab" aria-selected="false"><i className="fa fa-envelope-o" /></a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home7" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile7" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact7" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h5 className="h4 text-blue mb-20">Icons vertical Tab</h5>
            <div className="tab">
              <div className="row clearfix">
                <div className="col-md-3 col-sm-12">
                  <ul className="nav flex-column nav-tabs vtabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home8" role="tab" aria-selected="true"><i className="fa fa-home" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#profile8" role="tab" aria-selected="false"><i className="fa fa-users" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#contact8" role="tab" aria-selected="false"><i className="fa fa-envelope-o" /></a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="home8" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile8" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact8" role="tabpanel">
                      <div className="pd-20">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
