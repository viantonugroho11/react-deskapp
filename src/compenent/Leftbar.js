import React, { Component } from 'react'



export default class Leftbar extends Component {
  render() {
    return (
<div>
<div className="left-side-bar">
    <div className="brand-logo">
      <a href="index.html">
        <img src="vendors/images/deskapp-logo.svg" alt className="dark-logo" />
        <img src="vendors/images/deskapp-logo-white.svg" alt className="light-logo" />
      </a>
      <div className="close-sidebar" data-toggle="left-sidebar-close">
        <i className="ion-close-round" />
      </div>
    </div>
    <div className="menu-block customscroll">
      <div className="sidebar-menu">
        <ul id="accordion-menu">
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-house-1" /><span className="mtext">Home</span>
            </a>
            <ul className="submenu">
              <li><a href="/">Dashboard style 1</a></li>
              <li><a href="index2.html">Dashboard style 2</a></li>
              <li><a href="index3.html">Dashboard style 3</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-edit2" /><span className="mtext">Forms</span>
            </a>
            <ul className="submenu">
              <li><a href="/form-basic">Form Basic</a></li>
              <li><a href="/advanced-components">Advanced Components</a></li>
              <li><a href="/form-wizard">Form Wizard</a></li>
              <li><a href="/html5-editor">HTML5 Editor</a></li>
              <li><a href="/form-pickers">Form Pickers</a></li>
              <li><a href="/image-cropper">Image Cropper</a></li>
              <li><a href="/image-dropzone">Image Dropzone</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-library" /><span className="mtext">Tables</span>
            </a>
            <ul className="submenu">
              <li><a href="basic-table.html">Basic Tables</a></li>
              <li><a href="datatable.html">DataTables</a></li>
            </ul>
          </li>
          <li>
            <a href="calendar.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-calendar1" /><span className="mtext">Calendar</span>
            </a>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-apartment" /><span className="mtext"> UI Elements </span>
            </a>
            <ul className="submenu">
              <li><a href="ui-buttons.html">Buttons</a></li>
              <li><a href="ui-cards.html">Cards</a></li>
              <li><a href="ui-cards-hover.html">Cards Hover</a></li>
              <li><a href="ui-modals.html">Modals</a></li>
              <li><a href="ui-tabs.html">Tabs</a></li>
              <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
              <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
              <li><a href="ui-notification.html">Notification</a></li>
              <li><a href="ui-timeline.html">Timeline</a></li>
              <li><a href="ui-progressbar.html">Progressbar</a></li>
              <li><a href="ui-typography.html">Typography</a></li>
              <li><a href="ui-list-group.html">List group</a></li>
              <li><a href="ui-range-slider.html">Range slider</a></li>
              <li><a href="ui-carousel.html">Carousel</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-paint-brush" /><span className="mtext">Icons</span>
            </a>
            <ul className="submenu">
              <li><a href="font-awesome.html">FontAwesome Icons</a></li>
              <li><a href="foundation.html">Foundation Icons</a></li>
              <li><a href="ionicons.html">Ionicons Icons</a></li>
              <li><a href="themify.html">Themify Icons</a></li>
              <li><a href="custom-icon.html">Custom Icons</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-analytics-21" /><span className="mtext">Charts</span>
            </a>
            <ul className="submenu">
              <li><a href="highchart.html">Highchart</a></li>
              <li><a href="knob-chart.html">jQuery Knob</a></li>
              <li><a href="jvectormap.html">jvectormap</a></li>
              <li><a href="apexcharts.html">Apexcharts</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-right-arrow1" /><span className="mtext">Additional Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="video-player.html">Video Player</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="forgot-password.html">Forgot Password</a></li>
              <li><a href="reset-password.html">Reset Password</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-browser2" /><span className="mtext">Error Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="400.html">400</a></li>
              <li><a href="403.html">403</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="500.html">500</a></li>
              <li><a href="503.html">503</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-copy" /><span className="mtext">Extra Pages</span>
            </a>
            <ul className="submenu">
              <li><a href="blank.html">Blank</a></li>
              <li><a href="contact-directory.html">Contact Directory</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blog-detail.html">Blog Detail</a></li>
              <li><a href="product.html">Product</a></li>
              <li><a href="product-detail.html">Product Detail</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="pricing-table.html">Pricing Tables</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-list3" /><span className="mtext">Multi Level Menu</span>
            </a>
            <ul className="submenu">
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon fa fa-plug" /><span className="mtext">Level 2</span>
                </a>
                <ul className="submenu child">
                  <li><a href="javascript:;">Level 2</a></li>
                  <li><a href="javascript:;">Level 2</a></li>
                </ul>
              </li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
              <li><a href="javascript:;">Level 1</a></li>
            </ul>
          </li>
          <li>
            <a href="sitemap.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-diagram" /><span className="mtext">Sitemap</span>
            </a>
          </li>
          <li>
            <a href="chat.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-chat3" /><span className="mtext">Chat</span>
            </a>
          </li>
          <li>
            <a href="invoice.html" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-invoice" /><span className="mtext">Invoice</span>
            </a>
          </li>
          <li>
            <div className="dropdown-divider" />
          </li>
          <li>
            <div className="sidebar-small-cap">Extra</div>
          </li>
          <li>
            <a href="javascript:;" className="dropdown-toggle">
              <span className="micon dw dw-edit-2" /><span className="mtext">Documentation</span>
            </a>
            <ul className="submenu">
              <li><a href="introduction.html">Introduction</a></li>
              <li><a href="getting-started.html">Getting Started</a></li>
              <li><a href="color-settings.html">Color Settings</a></li>
              <li><a href="third-party-plugins.html">Third Party Plugins</a></li>
            </ul>
          </li>
          <li>
            <a href="https://dropways.github.io/deskapp-free-single-page-website-template/" target="_blank" className="dropdown-toggle no-arrow">
              <span className="micon dw dw-paper-plane1" />
              <span className="mtext">Landing Page <img src="vendors/images/coming-soon.png" alt width={25} /></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mobile-menu-overlay" />
</div>

    )
  }
}
