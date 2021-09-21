import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class BasicTables extends Component {
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
              <h4>Basic Tables</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Basic Tables</li>
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
      {/* basic table  Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Basic Table</h4>
            <p>Add class <code>.table</code></p>
          </div>
          <div className="pull-right">
            <a href="#basic-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><span className="badge badge-primary">Primary</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><span className="badge badge-secondary">Secondary</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><span className="badge badge-success">Success</span></td>
            </tr>
          </tbody>
        </table>
        <div className="collapse collapse-box" id="basic-table">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#basic-table-code"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#basic-table" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="basic-table-code">{"\n"}<table className="table">{"\n"}{"  "}<thead>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="col">#</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</thead>{"\n"}{"  "}<tbody>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="row">1</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</tbody>{"\n"}</table>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* basic table  End */}
      {/* Bordered table  start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Bordered table</h4>
            <p>Add <code>.table  .table-bordered</code> for borders on all sides of the table and cells.</p>
          </div>
          <div className="pull-right">
            <a href="#border-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><span className="badge badge-primary">Primary</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><span className="badge badge-secondary">Secondary</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><span className="badge badge-success">Success</span></td>
            </tr>
          </tbody>
        </table>
        <div className="collapse collapse-box" id="border-table">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#border-table-code"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#border-table" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="border-table-code">{"\n"}<table className="table table-bordered">{"\n"}{"  "}<thead>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="col">#</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</thead>{"\n"}{"  "}<tbody>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="row">1</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</tbody>{"\n"}</table>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Bordered table End */}
      {/* Striped table start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Striped table</h4>
            <p>Add <code>.table  .table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
          </div>
          <div className="pull-right">
            <a href="#striped-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Tag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><span className="badge badge-primary">Primary</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><span className="badge badge-secondary">Secondary</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><span className="badge badge-success">Success</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><span className="badge badge-secondary">Secondary</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><span className="badge badge-success">Success</span></td>
            </tr>
          </tbody>
        </table>
        <div className="collapse collapse-box" id="striped-table">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#striped-table-code"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#striped-table" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="striped-table-code">{"\n"}<table className="table table-striped">{"\n"}{"  "}<thead>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="col">#</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</thead>{"\n"}{"  "}<tbody>{"\n"}{"    "}<tr>{"\n"}{"      "}<th scope="row">1</th>{"\n"}{"    "}</tr>{"\n"}{"  "}</tbody>{"\n"}</table>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Striped table End */}
      {/* Responsive tables Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Responsive table</h4>
            <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code>.table  .table-responsive</code> Or, pick a maximum breakpoint with which to have a responsive table up to by using<code>.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>.</p>
          </div>
          <div className="pull-right">
            <a href="#responsive-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Tag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><span className="badge badge-primary">Primary</span></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><span className="badge badge-secondary">Secondary</span></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><span className="badge badge-secondary">Secondary</span></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="collapse collapse-box" id="responsive-table">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#responsive-table-code"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#responsive-table" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="responsive-table-code">{"\n"}<div className="table-responsive">{"\n"}{"\t"}<table className="table table-striped">{"\n"}{"\t"}{"  "}<thead>{"\n"}{"\t"}{"    "}<tr>{"\n"}{"\t"}{"      "}<th scope="col">#</th>{"\n"}{"\t"}{"    "}</tr>{"\n"}{"\t"}{"  "}</thead>{"\n"}{"\t"}{"  "}<tbody>{"\n"}{"\t"}{"    "}<tr>{"\n"}{"\t"}{"      "}<th scope="row">1</th>{"\n"}{"\t"}{"    "}</tr>{"\n"}{"\t"}{"  "}</tbody>{"\n"}{"\t"}</table>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Responsive tables End */}
      {/* Contextual classes Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Contextual classes</h4>
            <p>Use classes <code>( .table-active, .table-success, .table-info, .table-warning, .table-danger )</code> to color table rows or individual cells</p>
          </div>
          <div className="pull-right">
            <a href="#contextual-table" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Tag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><span className="badge badge-primary">Primary</span></td>
              </tr>
              <tr className="table-primary">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><span className="badge badge-secondary">Secondary</span></td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr className="table-success">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><span className="badge badge-secondary">Secondary</span></td>
              </tr>
              <tr className="table-danger">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr className="table-warning">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr className="table-info">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr className="table-dark">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
              <tr className="table-light">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><span className="badge badge-success">Success</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="collapse collapse-box" id="contextual-table">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#contextual-table-code"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#contextual-table" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="contextual-table-code">{"\n"}<div className="table-responsive">{"\n"}{"\t"}<table className="table table-striped">{"\n"}{"\t"}{"  "}<tbody>{"\n"}{"\t"}{"    "}<tr className="table-active"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-primary"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-secondary"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-success"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-danger"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-warning"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-info"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-light"><td /></tr>{"\n"}{"\t"}{"\t"}<tr className="table-dark"><td /></tr>{"\n"}{"\t"}{"  "}</tbody>{"\n"}{"\t"}</table>{"\n"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Contextual classes End */}
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
