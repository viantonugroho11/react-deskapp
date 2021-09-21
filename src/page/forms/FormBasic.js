import React, { Component } from 'react'

export default class FormBasic extends Component {
  render() {
    return (
      <div>
<div className="main-container">
  <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Form</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Form Basic</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
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
      {/* Default Basic Forms Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">Default Basic Forms</h4>
            <p className="mb-30">All bootstrap element classies</p>
          </div>
          <div className="pull-right">
            <a href="#basic-form1" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <form>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Text</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" type="text" placeholder="Johnny Brown" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Search</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" placeholder="Search Here" type="search" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Email</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue="bootstrap@example.com" type="email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">URL</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue="https://getbootstrap.com" type="url" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Telephone</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue="1-(111)-111-1111" type="tel" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Password</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue="password" type="password" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Number</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue={100} type="number" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="example-datetime-local-input" className="col-sm-12 col-md-2 col-form-label">Date and time</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control datetimepicker" placeholder="Choose Date anf time" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Date</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control date-picker" placeholder="Select Date" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Month</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control month-picker" placeholder="Select Month" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Time</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control time-picker" placeholder="Select time" type="text" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Select</label>
            <div className="col-sm-12 col-md-10">
              <select className="custom-select col-12">
                <option selected>Choose...</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Color</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue="#563d7c" type="color" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-12 col-md-2 col-form-label">Input Range</label>
            <div className="col-sm-12 col-md-10">
              <input className="form-control" defaultValue={50} type="range" />
            </div>
          </div>
        </form>
        <div className="collapse collapse-box" id="basic-form1">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#copy-pre"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#basic-form1" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="copy-pre">{"\n"}<form>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Text</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" type="text" placeholder="Johnny Brown" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Search</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" placeholder="Search Here" type="search" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Email</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue="bootstrap@example.com" type="email" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">URL</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue="https://getbootstrap.com" type="url" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Telephone</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue="1-(111)-111-1111" type="tel" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Password</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue="password" type="password" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Number</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue={100} type="number" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label htmlFor="example-datetime-local-input" className="col-sm-12 col-md-2 col-form-label">Date and time</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control datetimepicker" placeholder="Choose Date anf time" type="text" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Date</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control date-picker" placeholder="Select Date" type="text" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Month</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control month-picker" placeholder="Select Month" type="text" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Time</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control time-picker" placeholder="Select time" type="text" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Select</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<select className="custom-select col-12">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<option selected>Choose...</option>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<option value={1}>One</option>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<option value={2}>Two</option>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<option value={3}>Three</option>{"\n"}{"\t"}{"\t"}{"\t"}</select>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Color</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue="#563d7c" type="color" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group row">{"\n"}{"\t"}{"\t"}<label className="col-sm-12 col-md-2 col-form-label">Input Range</label>{"\n"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}<input className="form-control" defaultValue={50} type="range" />{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}</form>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Default Basic Forms End */}
      {/* horizontal Basic Forms Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">horizontal Basic Forms</h4>
            <p className="mb-30">All bootstrap element classies</p>
          </div>
          <div className="pull-right">
            <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label>Text</label>
            <input className="form-control" type="text" placeholder="Johnny Brown" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" defaultValue="bootstrap@example.com" type="email" />
          </div>
          <div className="form-group">
            <label>URL</label>
            <input className="form-control" defaultValue="https://getbootstrap.com" type="url" />
          </div>
          <div className="form-group">
            <label>Telephone</label>
            <input className="form-control" defaultValue="1-(111)-111-1111" type="tel" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" defaultValue="password" type="password" />
          </div>
          <div className="form-group">
            <label>Readonly input</label>
            <input className="form-control" type="text" placeholder="Readonly input here…" readOnly />
          </div>
          <div className="form-group">
            <label>Disabled input</label>
            <input type="text" className="form-control" placeholder="Disabled input" disabled />
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <label className="weight-600">Custom Checkbox</label>
                <div className="custom-control custom-checkbox mb-5">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
                </div>
                <div className="custom-control custom-checkbox mb-5">
                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                  <label className="custom-control-label" htmlFor="customCheck2">Check this custom checkbox</label>
                </div>
                <div className="custom-control custom-checkbox mb-5">
                  <input type="checkbox" className="custom-control-input" id="customCheck3" />
                  <label className="custom-control-label" htmlFor="customCheck3">Check this custom checkbox</label>
                </div>
                <div className="custom-control custom-checkbox mb-5">
                  <input type="checkbox" className="custom-control-input" id="customCheck4" />
                  <label className="custom-control-label" htmlFor="customCheck4">Check this custom checkbox</label>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <label className="weight-600">Custom Radio</label>
                <div className="custom-control custom-radio mb-5">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
                </div>
                <div className="custom-control custom-radio mb-5">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                </div>
                <div className="custom-control custom-radio mb-5">
                  <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio3">Or toggle this other custom radio</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Disabled select menu</label>
            <select className="form-control" disabled>
              <option>Disabled select</option>
            </select>
          </div>
          <div className="form-group">
            <label>input plaintext</label>
            <input type="text" readOnly className="form-control-plaintext" defaultValue="email@example.com" />
          </div>
          <div className="form-group">
            <label>Textarea</label>
            <textarea className="form-control" defaultValue={""} />
          </div>
          <div className="form-group">
            <label>Help text</label>
            <input type="text" className="form-control" />
            <small className="form-text text-muted">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
          </div>
          <div className="form-group">
            <label>Example file input</label>
            <input type="file" className="form-control-file form-control height-auto" />
          </div>
          <div className="form-group">
            <label>Custom file input</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" />
              <label className="custom-file-label">Choose file</label>
            </div>
          </div>
        </form>
        <div className="collapse collapse-box" id="horizontal-basic-form1">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#horizontal-basic"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#horizontal-basic-form1" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="horizontal-basic">{"\n"}<form>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Text</label>{"\n"}{"\t"}{"\t"}<input className="form-control" type="text" placeholder="Johnny Brown" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Email</label>{"\n"}{"\t"}{"\t"}<input className="form-control" defaultValue="bootstrap@example.com" type="email" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>URL</label>{"\n"}{"\t"}{"\t"}<input className="form-control" defaultValue="https://getbootstrap.com" type="url" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Telephone</label>{"\n"}{"\t"}{"\t"}<input className="form-control" defaultValue="1-(111)-111-1111" type="tel" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Password</label>{"\n"}{"\t"}{"\t"}<input className="form-control" defaultValue="password" type="password" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Readonly input</label>{"\n"}{"\t"}{"\t"}<input className="form-control" type="text" placeholder="Readonly input here…" readOnly />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Disabled input</label>{"\n"}{"\t"}{"\t"}<input type="text" className="form-control" placeholder="Disabled input" disabled />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="weight-600">Custom Checkbox</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-checkbox mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="checkbox" className="custom-control-input" id="customCheck1-1" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customCheck1-1">Check this custom checkbox</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-checkbox mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="checkbox" className="custom-control-input" id="customCheck2-1" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customCheck2-1">Check this custom checkbox</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-checkbox mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="checkbox" className="custom-control-input" id="customCheck3-1" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customCheck3-1">Check this custom checkbox</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-checkbox mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="checkbox" className="custom-control-input" id="customCheck4-1" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customCheck4-1">Check this custom checkbox</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="weight-600">Custom Radio</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-radio mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customRadio4">Toggle this custom radio</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-radio mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customRadio5">Or toggle this other custom radio</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="custom-control custom-radio mb-5">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="radio" id="customRadio6" name="customRadio" className="custom-control-input" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="custom-control-label" htmlFor="customRadio6">Or toggle this other custom radio</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Disabled select menu</label>{"\n"}{"\t"}{"\t"}<select className="form-control" disabled>{"\n"}{"\t"}{"\t"}{"\t"}<option>Disabled select</option>{"\n"}{"\t"}{"\t"}</select>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>input plaintext</label>{"\n"}{"\t"}{"\t"}<input type="text" readOnly className="form-control-plaintext" defaultValue="email@example.com" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Textarea</label>{"\n"}{"\t"}{"\t"}<textarea className="form-control" defaultValue={""} />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Help text</label>{"\n"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}<small className="form-text text-muted">{"\n"}{"\t"}{"\t"}{"  "}Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.{"\n"}{"\t"}{"\t"}</small>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Example file input</label>{"\n"}{"\t"}{"\t"}<input type="file" className="form-control-file form-control height-auto" />{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}<label>Custom file input</label>{"\n"}{"\t"}{"\t"}<div className="custom-file">{"\n"}{"\t"}{"\t"}{"\t"}<input type="file" className="custom-file-input" />{"\n"}{"\t"}{"\t"}{"\t"}<label className="custom-file-label">Choose file</label>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}</form>{"\n"}{"\n"}</code></pre>
          </div>
        </div>
      </div>
      {/* horizontal Basic Forms End */}
      {/* Form grid Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">Form grid</h4>
            <p className="mb-30">All bootstrap element classies</p>
          </div>
          <div className="pull-right">
            <a href="#form-grid-form" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>col-md-4</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>col-md-4</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>col-md-4</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>col-md-6</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>col-md-6</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>col-md-6</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="form-group">
                <label>col-md-3</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="form-group">
                <label>col-md-12</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="form-group">
                <label>col-md-2</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </form>
        <div className="collapse collapse-box" id="form-grid-form">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#form-grid"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#form-grid-form" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="form-grid">{"\n"}<form>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-4 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-4</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-4 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-4</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-4 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-4</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-6</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-6</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-6</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-3 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-3</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-12 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-12</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-2 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label>col-md-2</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control" />{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}</form>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Form grid End */}
      {/* Input Validation Start */}
      <div className="pd-20 card-box mb-30">
        <div className="clearfix">
          <div className="pull-left">
            <h4 className="text-blue h4">Input Validation</h4>
            <p className="mb-30">Validation styles for error, warning, and success</p>
          </div>
          <div className="pull-right">
            <a href="#input-validation-form" className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-code" /> Source Code</a>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group has-success">
                <label className="form-control-label">Input with success</label>
                <input type="text" className="form-control form-control-success" />
                <div className="form-control-feedback">Success! You've done it.</div>
                <small className="form-text text-muted">Example help text that remains unchanged.</small>
              </div>
              <div className="form-group has-warning">
                <label className="form-control-label">Input with warning</label>
                <input type="text" className="form-control form-control-warning" />
                <div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>
                <small className="form-text text-muted">Example help text that remains unchanged.</small>
              </div>
              <div className="form-group has-danger">
                <label className="form-control-label">Input with danger</label>
                <input type="text" className="form-control form-control-danger" />
                <div className="form-control-feedback">Sorry, that username's taken. Try another?</div>
                <small className="form-text text-muted">Example help text that remains unchanged.</small>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group has-success row">
                <label className="form-control-label col-sm-12 col-md-3 col-form-label">Input with success</label>
                <div className="col-sm-12 col-md-9">
                  <input type="text" className="form-control form-control-success" />
                  <div className="form-control-feedback">Success! You've done it.</div>
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
              <div className="form-group has-warning row">
                <label className="form-control-label col-sm-12 col-md-3 col-form-label">Input with warning</label>
                <div className="col-sm-12 col-md-9">
                  <input type="text" className="form-control form-control-warning" />
                  <div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
              <div className="form-group has-danger row">
                <label className="form-control-label col-sm-12 col-md-3 col-form-label">Input with danger</label>
                <div className="col-sm-12 col-md-9">
                  <input type="text" className="form-control form-control-danger" />
                  <div className="form-control-feedback">Sorry, that username's taken. Try another?</div>
                  <small className="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="collapse collapse-box" id="input-validation-form">
          <div className="code-box">
            <div className="clearfix">
              <a href="javascript:;" className="btn btn-primary btn-sm code-copy pull-left" data-clipboard-target="#input-validation"><i className="fa fa-clipboard" /> Copy Code</a>
              <a href="#input-validation-form" className="btn btn-primary btn-sm pull-right" rel="content-y" data-toggle="collapse" role="button"><i className="fa fa-eye-slash" /> Hide Code</a>
            </div>
            <pre><code className="xml copy-pre" id="input-validation">{"\n"}<form>{"\n"}{"\t"}<div className="row">{"\n"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-success">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label">Input with success</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-success" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Success! You've done it.</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-warning">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label">Input with warning</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-warning" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-danger">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label">Input with danger</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-danger" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Sorry, that username's taken. Try another?</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}<div className="col-md-6 col-sm-12">{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-success row">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label col-sm-12 col-md-2 col-form-label">Input with success</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-success" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Success! You've done it.</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-warning row">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label col-sm-12 col-md-2 col-form-label">Input with warning</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-warning" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}<div className="form-group has-danger row">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<label className="form-control-label col-sm-12 col-md-2 col-form-label">Input with danger</label>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="col-sm-12 col-md-10">{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<input type="text" className="form-control form-control-danger" />{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<div className="form-control-feedback">Sorry, that username's taken. Try another?</div>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}<small className="form-text text-muted">Example help text that remains unchanged.</small>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}{"\t"}</div>{"\n"}{"\t"}{"\t"}</div>{"\n"}{"\t"}</div>{"\n"}</form>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
          </div>
        </div>
      </div>
      {/* Input Validation End */}
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
