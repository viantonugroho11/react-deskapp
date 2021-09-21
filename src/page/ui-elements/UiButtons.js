import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Sidebar from '../../compenent/Sidebar'
import Leftbar from '../../compenent/Leftbar'
export default class UiButtons extends Component {
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
              <h4>Buttons</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Buttons</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Examples</h4>
            <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-primary">Primary</button>
              <button type="button" className="btn btn-secondary">Secondary</button>
              <button type="button" className="btn btn-success">Success</button>
              <button type="button" className="btn btn-danger">Danger</button>
              <button type="button" className="btn btn-warning">Warning</button>
              <button type="button" className="btn btn-info">Info</button>
              <button type="button" className="btn btn-light">Light</button>
              <button type="button" className="btn btn-dark">Dark</button>
              <button type="button" className="btn btn-link">Link</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Outline buttons</h4>
            <p>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code>.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-outline-primary">Primary</button>
              <button type="button" className="btn btn-outline-secondary">Secondary</button>
              <button type="button" className="btn btn-outline-success">Success</button>
              <button type="button" className="btn btn-outline-danger">Danger</button>
              <button type="button" className="btn btn-outline-warning">Warning</button>
              <button type="button" className="btn btn-outline-info">Info</button>
              <button type="button" className="btn btn-outline-light">Light</button>
              <button type="button" className="btn btn-outline-dark">Dark</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Button tags</h4>
            <p>The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
            <div className="btn-list">
              <a className="btn btn-primary" href="#" role="button">Link</a>
              <button className="btn btn-secondary" type="submit">Button</button>
              <input className="btn btn-success" type="button" defaultValue="Input" />
              <input className="btn btn-primary" type="submit" defaultValue="Submit" />
              <input className="btn btn-info" type="reset" defaultValue="Reset" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Sizes</h4>
            <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-primary btn-lg">Large button</button>
              <button type="button" className="btn btn-secondary btn-lg">Large button</button>
              <button type="button" className="btn btn-primary btn-sm">Small button</button>
              <button type="button" className="btn btn-secondary btn-sm">Small button</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Disabled Buttons</h4>
            <p>Make buttons look inactive by adding the disabled boolean attribute to any <code>&lt;button&gt;</code> element.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
              <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Disabled Links</h4>
            <p><code>&lt;a&gt;</code>s don’t support the disabled attribute, so you must add the <code>.disabled</code> class to make it visually appear disabled.</p>
            <div className="btn-list">
              <a href="#" className="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>
              <a href="#" className="btn btn-secondary btn-lg disabled" role="button" aria-disabled="true">Link</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Block Buttons</h4>
            <p>Create block level buttons—those that span the full width of a parent—by adding <code>.btn-block</code>.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-success btn-lg btn-block">Block level button</button>
              <button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Toggle states</h4>
            <p>Add <code>data-toggle="button"</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must manually add the <code>.active</code> class and <code>aria-pressed="true"</code> to the <code>&lt;button&gt;</code>.</p>
            <div className="btn-list">
              <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">Single toggle</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Checkbox buttons</h4>
            <p>Bootstrap’s <code>.button</code> styles can be applied to other elements, such as <code>&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code>data-toggle="buttons"</code> to a <code>.btn-group</code> containing those modified buttons to enable toggling in their respective styles.</p>
            <div className="btn-group-toggle btn-group" data-toggle="buttons">
              <label className="btn btn btn-outline-primary active">
                <input type="checkbox" defaultChecked autoComplete="off" /> Checked
              </label>
              <label className="btn btn btn-outline-primary">
                <input type="checkbox" defaultChecked autoComplete="on" /> Check
              </label>
              <label className="btn btn btn-outline-primary">
                <input type="checkbox" defaultChecked autoComplete="on" /> Check
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">radio buttons</h4>
            <p>Bootstrap’s <code>.button</code> styles can be applied to other elements, such as <code>&lt;label&gt;</code>s, to provide checkbox or radio style button toggling. Add <code>data-toggle="buttons"</code> to a <code>.btn-group</code> containing those modified buttons to enable toggling in their respective styles.</p>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-outline-secondary active">
                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Active
              </label>
              <label className="btn btn-outline-secondary">
                <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
              </label>
              <label className="btn btn-outline-secondary">
                <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Input With Button Groups</h4>
            <p>Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly..</p>
            <div className="btn-toolbar mb-15" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-outline-primary">1</button>
                <button type="button" className="btn btn-outline-primary">2</button>
                <button type="button" className="btn btn-outline-primary">3</button>
                <button type="button" className="btn btn-outline-primary">4</button>
              </div>
            </div>
            <div className="input-group custom">
              <div className="input-group-prepend custom">
                <div className="input-group-text" id="btnGroupAddon">@</div>
              </div>
              <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Button Groups</h4>
            <p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.Make a set of buttons appear vertically stacked rather than horizontally.</p>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-15">
                <div className="btn-group-vertical">
                  <button type="button" className="btn btn-light">Top</button>
                  <button type="button" className="btn btn-light">Middle</button>
                  <button type="button" className="btn btn-light">Bottom</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-15">
                <div className="btn-group-vertical">
                  <button type="button" className="btn btn-light">Button 1</button>
                  <button type="button" className="btn btn-light">Button 2</button>
                  <button type="button" className="btn btn-light dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Button 3 <span className="caret" /> </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Dropdown link</a>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="btn-group mb-15">
                  <button type="button" className="btn btn-light">1</button>
                  <button type="button" className="btn btn-light">2</button>
                  <button type="button" className="btn btn-success ">3</button>
                  <button type="button" className="btn btn-light">4</button>
                </div>
                <div className="btn-group mb-15">
                  <button type="button" className="btn btn-light">5</button>
                  <button type="button" className="btn btn-success ">6</button>
                  <button type="button" className="btn btn-light">7</button>
                </div>
                <div className="btn-group mb-15">
                  <button type="button" className="btn btn-light">8</button>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-light">1</button>
                  <button type="button" className="btn btn-dark">2</button>
                  <button type="button" className="btn btn-light">3</button>
                  <div className="btn-group dropdown">
                    <button type="button" className="btn btn-light dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false"> Dropdown <span className="caret" /> </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Dropdown link</a>
                      <a className="dropdown-item" href="#">Dropdown link</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Icon With Label Buttons</h4>
            <p>button using icon with label. </p>
            <div className="btn-list">
              <button type="button" className="btn" data-bgcolor="#3b5998" data-color="#ffffff"><i className="fa fa-facebook" /> facebook</button>
              <button type="button" className="btn" data-bgcolor="#1da1f2" data-color="#ffffff"><i className="fa fa-twitter" /> twitter</button>
              <button type="button" className="btn" data-bgcolor="#007bb5" data-color="#ffffff"><i className="fa fa-linkedin" /> linkedin</button>
              <button type="button" className="btn" data-bgcolor="#f46f30" data-color="#ffffff"><i className="fa fa-instagram" /> instagram</button>
              <button type="button" className="btn" data-bgcolor="#c32361" data-color="#ffffff"><i className="fa fa-dribbble" /> dribbble</button>
              <button type="button" className="btn" data-bgcolor="#3d464d" data-color="#ffffff"><i className="fa fa-dropbox" /> dropbox</button>
              <button type="button" className="btn" data-bgcolor="#db4437" data-color="#ffffff"><i className="fa fa-google-plus" /> google-plus</button>
              <button type="button" className="btn" data-bgcolor="#bd081c" data-color="#ffffff"><i className="fa fa-pinterest-p" /> pinterest</button>
              <button type="button" className="btn" data-bgcolor="#00aff0" data-color="#ffffff"><i className="fa fa-skype" /> skype</button>
              <button type="button" className="btn" data-bgcolor="#00b489" data-color="#ffffff"><i className="fa fa-vine" /> vine</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-30">
          <div className="pd-20 card-box height-100-p">
            <h4 className="mb-15 text-blue h4">Icon Buttons</h4>
            <p>button using icon.</p>
            <div className="btn-list">
              <button type="button" className="btn" data-bgcolor="#3b5998" data-color="#ffffff"><i className="fa fa-facebook" /></button>
              <button type="button" className="btn" data-bgcolor="#1da1f2" data-color="#ffffff"><i className="fa fa-twitter" /></button>
              <button type="button" className="btn" data-bgcolor="#007bb5" data-color="#ffffff"><i className="fa fa-linkedin" /></button>
              <button type="button" className="btn" data-bgcolor="#f46f30" data-color="#ffffff"><i className="fa fa-instagram" /></button>
              <button type="button" className="btn" data-bgcolor="#c32361" data-color="#ffffff"><i className="fa fa-dribbble" /></button>
              <button type="button" className="btn" data-bgcolor="#3d464d" data-color="#ffffff"><i className="fa fa-dropbox" /></button>
              <button type="button" className="btn" data-bgcolor="#db4437" data-color="#ffffff"><i className="fa fa-google-plus" /></button>
              <button type="button" className="btn" data-bgcolor="#bd081c" data-color="#ffffff"><i className="fa fa-pinterest-p" /></button>
              <button type="button" className="btn" data-bgcolor="#00aff0" data-color="#ffffff"><i className="fa fa-skype" /></button>
              <button type="button" className="btn" data-bgcolor="#00b489" data-color="#ffffff"><i className="fa fa-vine" /></button>
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
