import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class CardsHover extends Component {
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
              <h4>Cards Hover</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Cards Hover</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Fade-in effect */}
      <h5 className="h4 text-blue mb-10">Fade-in effect</h5>
      <p className="mb-30">You can use by default <code>.da-overlay</code></p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo1.jpg" alt />
              <div className="da-overlay">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo2.jpg" alt />
              <div className="da-overlay">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo3.jpg" alt />
              <div className="da-overlay">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo4.jpg" alt />
              <div className="da-overlay">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Left effect */}
      <h5 className="h4 text-blue mb-10">Slide Left effect</h5>
      <p className="mb-30">You can use by default <code>.da-overlay .da-slide-left</code></p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo1.jpg" alt />
              <div className="da-overlay da-slide-left">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo2.jpg" alt />
              <div className="da-overlay da-slide-left">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo3.jpg" alt />
              <div className="da-overlay da-slide-left">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo4.jpg" alt />
              <div className="da-overlay da-slide-left">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Right effect */}
      <h5 className="h4 text-blue mb-10">Slide Right effect</h5>
      <p className="mb-30">You can use by default <code>.da-overlay .da-slide-right</code></p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo1.jpg" alt />
              <div className="da-overlay da-slide-right">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo2.jpg" alt />
              <div className="da-overlay da-slide-right">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo3.jpg" alt />
              <div className="da-overlay da-slide-right">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo4.jpg" alt />
              <div className="da-overlay da-slide-right">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Top effect */}
      <h5 className="h4 text-blue mb-10">Slide Top effect</h5>
      <p className="mb-30">You can use by default <code>.da-overlay .da-slide-top</code></p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo1.jpg" alt />
              <div className="da-overlay da-slide-top">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo2.jpg" alt />
              <div className="da-overlay da-slide-top">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo3.jpg" alt />
              <div className="da-overlay da-slide-top">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo4.jpg" alt />
              <div className="da-overlay da-slide-top">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Bottom effect */}
      <h5 className="h4 text-blue mb-10">Slide Bottom effect</h5>
      <p className="mb-30">You can use by default <code>.da-overlay .da-slide-bottom</code></p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo1.jpg" alt />
              <div className="da-overlay da-slide-bottom">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo2.jpg" alt />
              <div className="da-overlay da-slide-bottom">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo3.jpg" alt />
              <div className="da-overlay da-slide-bottom">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="da-card">
            <div className="da-card-photo">
              <img src="vendors/images/photo4.jpg" alt />
              <div className="da-overlay da-slide-bottom">
                <div className="da-social">
                  <ul className="clearfix">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="da-card-content">
              <h5 className="h5 mb-10">Don H. Rabon</h5>
              <p className="mb-0">Lorem ipsum dolor sit amet</p>
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
