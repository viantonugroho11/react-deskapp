import React, { Component } from 'react'

import Header from '../../compenent/Header'
import Leftbar from '../../compenent/Leftbar'
import Sidebar from '../../compenent/Sidebar'

export default class Cards extends Component {
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
              <h4>Cards</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Cards</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="card card-box">
            <img className="card-img-top" src="vendors/images/img2.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="card card-box">
            <img className="card-img-top" src="vendors/images/img3.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="card card-box">
            <div className="card-body">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img className="card-img-top" src="vendors/images/img1.jpg" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link text-primary">Card link</a>
              <a href="#" className="card-link text-primary">Another link</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
          <div className="card card-box">
            <img className="card-img-top" src="vendors/images/img4.jpg" alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box">
            <h5 className="card-header weight-500">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
              2 days ago
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box">
            <div className="card-header">
              Quote
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-sm-12 col-md-12 col-lg-4 mb-30">
          <div className="card card-box">
            <img className="card-img-top" src="vendors/images/img4.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mb-30">
          <div className="card bg-dark card-box">
            <img className="card-img" src="vendors/images/img1.jpg" alt="Card image" />
            <div className="card-img-overlay">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in.</p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mb-30">
          <div className="card card-box">
            <div className="card-body">
              <h5 className="card-title weight-500">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <img className="card-img-bottom" src="vendors/images/img5.jpg" alt="Card image cap" />
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box text-center">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 mb-30">
          <div className="card card-box text-right">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <h4 className="h4 text-blue mb-30">Navigation</h4>
      <div className="row clearfix">
        <div className="col-sm-12 col-md-6 mb-30">
          <div className="card card-box text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 mb-30">
          <div className="card card-box">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <h4 className="h4 text-blue mb-30">Background and color</h4>
      <div className="row clearfix">
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-white bg-primary card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title text-white">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-white bg-secondary card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title text-white">Secondary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-white bg-success card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title text-white">Success card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-black bg-warning card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Warning card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-white bg-info card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title text-white">Info card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="card text-white bg-dark card-box">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title text-white">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      <h4 className="h4 text-blue mb-30">Card groups</h4>
      <div className="card-group mb-30">
        <div className="card card-box">
          <img className="card-img-top" src="vendors/images/img3.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card card-box">
          <img className="card-img-top" src="vendors/images/img4.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card card-box">
          <img className="card-img-top" src="vendors/images/img2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <h4 className="h4 text-blue mb-30">Card decks</h4>
      <div className="card-deck mb-30">
        <div className="card">
          <img className="card-img-top" src="vendors/images/img2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="vendors/images/img3.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="vendors/images/img4.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <h4 className="h4 text-blue mb-30">Card columns</h4>
      <div className="card-columns mb-30">
        <div className="card card-box">
          <img className="card-img-top" src="vendors/images/img1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card card-box p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-box">
          <img className="card-img-top" src="vendors/images/img2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card card-box bg-primary text-white text-center p-3">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer className="blockquote-footer">
              <small className="text-white">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-box text-center">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card card-box">
          <img className="card-img" src="vendors/images/img3.jpg" alt="Card image" />
        </div>
        <div className="card card-box p-3 text-right">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card card-box">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
