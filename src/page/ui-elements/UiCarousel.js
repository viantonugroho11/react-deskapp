import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiCarousel extends Component {
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
              <h4>Carousel</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Carousel</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          {/* Slides only */}
          <div className="card-box mb-30">
            <div className="clearfix pd-20">
              <div className="pull-left">
                <h4 className="h4">Slides only</h4>
              </div>
              <div className="pull-right">
                <a href="#carousel1" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
              </div>
            </div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="vendors/images/img2.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img4.jpg" alt="Third slide" />
                </div>
              </div>
            </div>
            <div className="collapse collapse-box" id="carousel1">
              <div className="code-box">
                <div className="clearfix">
                  <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#copy-carousel1"><i className="fa fa-clipboard" /> Copy Code</a>
                  <a href="#carousel1" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
                </div>
                <pre><code className="xml copy-pre" id="copy-carousel1">{"\n"}<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">{"\n"}{"\t"}<div className="carousel-inner">{"\n"}{"\t"}{"\t"}<div className="carousel-item active">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img2.jpg" alt="First slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img4.jpg" alt="Third slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
              </div>
            </div>
          </div>
        </div>
        {/* With controls */}
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="card-box mb-30">
            <div className="clearfix pd-20">
              <div className="pull-left">
                <h4 className="h4">With controls</h4>
              </div>
              <div className="pull-right">
                <a href="#carousel2" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
              </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="vendors/images/img2.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img4.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="collapse collapse-box" id="carousel2">
              <div className="code-box">
                <div className="clearfix">
                  <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#copy-carousel2"><i className="fa fa-clipboard" /> Copy Code</a>
                  <a href="#carousel2" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
                </div>
                <pre><code className="xml copy-pre" id="copy-carousel2">{"\n"}<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">{"\n"}{"\t"}<div className="carousel-inner">{"\n"}{"\t"}{"\t"}<div className="carousel-item active">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img2.jpg" alt="First slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img4.jpg" alt="Third slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">{"\n"}{"\t"}{"\t"}<span className="carousel-control-prev-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Previous</span>{"\n"}{"\t"}</a>{"\n"}{"\t"}<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">{"\n"}{"\t"}{"\t"}<span className="carousel-control-next-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Next</span>{"\n"}{"\t"}</a>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
              </div>
            </div>
          </div>
        </div>
        {/* With indicators */}
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="card-box mb-30">
            <div className="clearfix pd-20">
              <div className="pull-left">
                <h4 className="h4">With indicators</h4>
              </div>
              <div className="pull-right">
                <a href="#carousel3" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
              </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="vendors/images/img3.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img4.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img5.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="collapse collapse-box" id="carousel3">
              <div className="code-box">
                <div className="clearfix">
                  <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#copy-carousel3"><i className="fa fa-clipboard" /> Copy Code</a>
                  <a href="#carousel3" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
                </div>
                <pre><code className="xml copy-pre" id="copy-carousel3">{"\n"}<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">{"\n"}{"\t"}<ol className="carousel-indicators">{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleIndicators" data-slide-to={1} />{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleIndicators" data-slide-to={2} />{"\n"}{"\t"}</ol>{"\n"}{"\t"}<div className="carousel-inner">{"\n"}{"\t"}{"\t"}<div className="carousel-item active">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img3.jpg" alt="First slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img4.jpg" alt="Second slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img5.jpg" alt="Third slide" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">{"\n"}{"\t"}{"\t"}<span className="carousel-control-prev-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Previous</span>{"\n"}{"\t"}</a>{"\n"}{"\t"}<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">{"\n"}{"\t"}{"\t"}<span className="carousel-control-next-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Next</span>{"\n"}{"\t"}</a>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
              </div>
            </div>
          </div>
        </div>
        {/* With captions */}
        <div className="col-lg-6 col-md-12 col-sm-12 mb-30">
          <div className="card-box mb-30">
            <div className="clearfix pd-20">
              <div className="pull-left">
                <h4 className="h4">With captions</h4>
              </div>
              <div className="pull-right">
                <a href="#carousel4" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
              </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="vendors/images/img1.jpg" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="color-white">First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="color-white">Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="vendors/images/img2.jpg" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="color-white">Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="collapse collapse-box" id="carousel4">
              <div className="code-box">
                <div className="clearfix">
                  <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#copy-carousel4"><i className="fa fa-clipboard" /> Copy Code</a>
                  <a href="#carousel4" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
                </div>
                <pre><code className="xml copy-pre" id="copy-carousel4">{"\n"}<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">{"\n"}{"\t"}<ol className="carousel-indicators">{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleCaptions" data-slide-to={1} />{"\n"}{"\t"}{"\t"}<li data-target="#carouselExampleCaptions" data-slide-to={2} />{"\n"}{"\t"}</ol>{"\n"}{"\t"}<div className="carousel-inner">{"\n"}{"\t"}{"\t"}<div className="carousel-item active">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img1.jpg" alt="First slide" />{"\n"}{"\t"}{"\t"}{"\t"}<div className="carousel-caption d-none d-md-block">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<h5 className="color-white">First slide label</h5>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img3.jpg" alt="Second slide" />{"\n"}{"\t"}{"\t"}{"\t"}<div className="carousel-caption d-none d-md-block">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<h5 className="color-white">Second slide label</h5>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="carousel-item">{"\n"}{"\t"}{"\t"}{"\t"}<img className="d-block w-100" src="vendors/images/img2.jpg" alt="Third slide" />{"\n"}{"\t"}{"\t"}{"\t"}<div className="carousel-caption d-none d-md-block">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<h5 className="color-white">Third slide label</h5>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">{"\n"}{"\t"}{"\t"}<span className="carousel-control-prev-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Previous</span>{"\n"}{"\t"}</a>{"\n"}{"\t"}<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">{"\n"}{"\t"}{"\t"}<span className="carousel-control-next-icon" aria-hidden="true" />{"\n"}{"\t"}{"\t"}<span className="sr-only">Next</span>{"\n"}{"\t"}</a>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
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
