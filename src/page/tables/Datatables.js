import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class Datatables extends Component {
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
              <h4>DataTable</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">DataTable</li>
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
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Data Table Simple</h4>
          <p className="mb-0">you can find more options <a className="text-primary" href="https://datatables.net/" target="_blank">Click Here</a></p>
        </div>
        <div className="pb-20">
          <table className="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th className="table-plus datatable-nosort">Name</th>
                <th>Age</th>
                <th>Office</th>
                <th>Address</th>
                <th>Start Date</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-plus">Gloria F. Mead</td>
                <td>25</td>
                <td>Sagittarius</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>25</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>18</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>
                  <div className="dropdown">
                    <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                      <i className="dw dw-more" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                      <a className="dropdown-item" href="#"><i className="dw dw-eye" /> View</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                      <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Simple Datatable End */}
      {/* multiple select row Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Data Table with multiple select row</h4>
        </div>
        <div className="pb-20">
          <table className="data-table table hover multiple-select-row nowrap">
            <thead>
              <tr>
                <th className="table-plus datatable-nosort">Name</th>
                <th>Age</th>
                <th>Office</th>
                <th>Address</th>
                <th>Start Date</th>
                <th>Salart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-plus">Gloria F. Mead</td>
                <td>25</td>
                <td>Sagittarius</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>25</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>18</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* multiple select row Datatable End */}
      {/* Checkbox select Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Data Table with Checckbox select</h4>
        </div>
        <div className="pb-20">
          <table className="checkbox-datatable table nowrap">
            <thead>
              <tr>
                <th><div className="dt-checkbox">
                    <input type="checkbox" name="select_all" defaultValue={1} id="example-select-all" />
                    <span className="dt-checkbox-label" />
                  </div>
                </th>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Tokyo</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td />
                <td>Angelica Ramos</td>
                <td>Chief Executive Officer (CEO)</td>
                <td>London</td>
                <td>2009/10/09</td>
                <td>$1,200,000</td>
              </tr>
              <tr>
                <td />
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td />
                <td>Bradley Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>2012/10/13</td>
                <td>$132,000</td>
              </tr>
              <tr>
                <td />
                <td>Brenden Wagner</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>2011/06/07</td>
                <td>$206,850</td>
              </tr>
              <tr>
                <td />
                <td>Caesar Vance</td>
                <td>Pre-Sales Support</td>
                <td>New York</td>
                <td>2011/12/12	</td>
                <td>$106,450</td>
              </tr>
              <tr>
                <td />
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td />
                <td>Dai Rios</td>
                <td>Personnel Lead</td>
                <td>Edinburgh</td>
                <td>2012/09/26</td>
                <td>$217,500</td>
              </tr>
              <tr>
                <td />
                <td>Doris Wilder</td>
                <td>Sales Assistant</td>
                <td>Sidney</td>
                <td>2010/09/20</td>
                <td>$85,600</td>
              </tr>
              <tr>
                <td />
                <td>Fiona Green</td>
                <td>Chief Operating Officer (COO)</td>
                <td>San Francisco</td>
                <td>2010/03/11</td>
                <td>$850,000</td>
              </tr>
              <tr>
                <td />
                <td>Gavin Cortez</td>
                <td>Team Leader</td>
                <td>San Francisco</td>
                <td>2008/10/26</td>
                <td>$235,500</td>
              </tr>
              <tr>
                <td />
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
              <tr>
                <td />
                <td>Hope Fuentes</td>
                <td>Secretary</td>
                <td>San Francisco</td>
                <td>2010/02/12</td>
                <td>$109,850</td>
              </tr>
              <tr>
                <td />
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>2008/12/19</td>
                <td>$90,560</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Checkbox select Datatable End */}
      {/* Export Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Data Table with Export Buttons</h4>
        </div>
        <div className="pb-20">
          <table className="table hover multiple-select-row data-table-export nowrap">
            <thead>
              <tr>
                <th className="table-plus datatable-nosort">Name</th>
                <th>Age</th>
                <th>Office</th>
                <th>Address</th>
                <th>Start Date</th>
                <th>Salart</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-plus">Gloria F. Mead</td>
                <td>25</td>
                <td>Sagittarius</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>25</td>
                <td>Gemini</td>
                <td>2829 Trainer Avenue Peoria, IL 61602 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>20</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>18</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Sagittarius</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td className="table-plus">Andrea J. Cagle</td>
                <td>30</td>
                <td>Gemini</td>
                <td>1280 Prospect Valley Road Long Beach, CA 90802 </td>
                <td>29-03-2018</td>
                <td>$162,700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Export Datatable End */}
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
