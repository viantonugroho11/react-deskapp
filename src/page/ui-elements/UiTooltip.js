import React, { Component } from 'react'

import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiTooltip extends Component {
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
              <h4>Tooltip &amp; Popover</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Tooltip &amp; Popover</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
        <h4 className="h4 text-blue">Tooltips</h4>
        <p className="pb-20">you can use <code>data-toggle="tooltip" title="Tooltip on top"</code></p>
        <div className="pb-20">
          <button type="button" className="btn btn-primary margin-5" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            Tooltip on top
          </button>
          <button type="button" className="btn btn-primary margin-5" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            Tooltip on right
          </button>
          <button type="button" className="btn btn-primary margin-5" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
            Tooltip on bottom
          </button>
          <button type="button" className="btn btn-primary margin-5" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
            Tooltip on left
          </button>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
        <h4 className="h4 text-blue">Popovers</h4>
        <p className="pb-20">you can use <code>data-container="body" data-toggle="popover" data-content=""</code></p>
        <div className="pb-20">
          <button type="button" className="btn btn-outline-primary margin-5" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="popover">
            Popover on top
          </button>
          <button type="button" className="btn btn-outline-primary margin-5" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="popover">
            Popover on right
          </button>
          <button type="button" className="btn btn-outline-primary margin-5" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus	sagittis lacus vel augue laoreet rutrum faucibus." title="popover">
            Popover on bottom
          </button>
          <button type="button" className="btn btn-outline-primary margin-5" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="popover">
            Popover on left
          </button>
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
