import React, { Component } from 'react'


import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'

export default class UiTypoGraphy extends Component {
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
              <h4>Typography</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">UI Typography</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">Headings</h4>
            <h1>h1. Bootstrap heading</h1>
            <h2 className="mb-10">h2. Bootstrap heading</h2>
            <h3 className="mb-10">h3. Bootstrap heading</h3>
            <h4 className="mb-10">h4. Bootstrap heading</h4>
            <h5 className="mb-10">h5. Bootstrap heading</h5>
            <h6 className="mb-10">h6. Bootstrap heading</h6>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">Inline text elements</h4>
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><em>This line rendered as italicized text.</em></p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">Display headings</h4>
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box mb-30">
            <h4 className="mb-20 h4">Blockquotes</h4>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
            <blockquote className="blockquote text-right">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">List Inline</h4>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">List Unstyled</h4>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 mb-30">
          <div className="pd-20 card-box">
            <h4 className="mb-30 h4">Description list alignment</h4>
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>
              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
              <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
              <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                </dl>
              </dd>
            </dl>
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
