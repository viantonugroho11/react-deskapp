import React, { Component } from 'react'
import Header from '../compenent/Header'
import Leftbar from '../compenent/Leftbar'
import Sidebar from '../compenent/Sidebar'
export default class Calendar extends Component {
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
              <h4>Calendar</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Calendar</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="pd-20 card-box mb-30">
        <div className="calendar-wrap">
          <div id="calendar" />
        </div>
        {/* calendar modal */}
        <div id="modal-view-event" className="modal modal-top fade calendar-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h4 className="h4"><span className="event-icon weight-400 mr-3" /><span className="event-title" /></h4>
                <div className="event-body" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div id="modal-view-event-add" className="modal modal-top fade calendar-modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <form id="add-event">
                <div className="modal-body">
                  <h4 className="text-blue h4 mb-10">Add Event Detail</h4>
                  <div className="form-group">
                    <label>Event name</label>
                    <input type="text" className="form-control" name="ename" />
                  </div>
                  <div className="form-group">
                    <label>Event Date</label>
                    <input type="text" className="datetimepicker form-control" name="edate" />
                  </div>
                  <div className="form-group">
                    <label>Event Description</label>
                    <textarea className="form-control" name="edesc" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label>Event Color</label>
                    <select className="form-control" name="ecolor">
                      <option value="fc-bg-default">fc-bg-default</option>
                      <option value="fc-bg-blue">fc-bg-blue</option>
                      <option value="fc-bg-lightgreen">fc-bg-lightgreen</option>
                      <option value="fc-bg-pinkred">fc-bg-pinkred</option>
                      <option value="fc-bg-deepskyblue">fc-bg-deepskyblue</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Event Icon</label>
                    <select className="form-control" name="eicon">
                      <option value="circle">circle</option>
                      <option value="cog">cog</option>
                      <option value="group">group</option>
                      <option value="suitcase">suitcase</option>
                      <option value="calendar">calendar</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
              </form>
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
