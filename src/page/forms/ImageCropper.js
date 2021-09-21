import React, { Component } from 'react'
import Header from '../../compenent/Header'
import Leftbar from '../../compenent/Leftbar'
import Sidebar from '../../compenent/Sidebar'
export default class ImageCropper extends Component {
  render() {
    return (
      <div>
        <Header/>
  <Leftbar/>
  <Sidebar/>
<div className="main-container">
  <div className="pd-ltr-20 customscroll-10-p height-100-p xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Image Cropper</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Image Cropper</li>
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
      <div className="pd-20 card-box mb-30">
        <div className="clearfix mb-20">
          <div className="pull-left">
            <h4 className="text-blue h4">Image Cropper</h4>
          </div>
        </div>
        {/* Content */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-9">
            {/* <h3>Demo:</h3> */}
            <div className="img-container">
              <img src="vendors/images/img3.jpg" id="image" alt="Picture" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3">
            {/* <h3>Preview:</h3> */}
            <div className="docs-preview clearfix">
              <div className="img-preview preview-lg" />
              <div className="img-preview preview-md" />
              <div className="img-preview preview-sm" />
              <div className="img-preview preview-xs" />
            </div>
            {/* <h3>Data:</h3> */}
            {/* <h3>Data:</h3> */}
            <div className="docs-data">
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataX">X</label>
                </span>
                <input type="text" className="form-control" id="dataX" placeholder="x" />
                <span className="input-group-append">
                  <span className="input-group-text">px</span>
                </span>
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataY">Y</label>
                </span>
                <input type="text" className="form-control" id="dataY" placeholder="y" />
                <span className="input-group-append">
                  <span className="input-group-text">px</span>
                </span>
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataWidth">Width</label>
                </span>
                <input type="text" className="form-control" id="dataWidth" placeholder="width" />
                <span className="input-group-append">
                  <span className="input-group-text">px</span>
                </span>
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataHeight">Height</label>
                </span>
                <input type="text" className="form-control" id="dataHeight" placeholder="height" />
                <span className="input-group-append">
                  <span className="input-group-text">px</span>
                </span>
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataRotate">Rotate</label>
                </span>
                <input type="text" className="form-control" id="dataRotate" placeholder="rotate" />
                <span className="input-group-append">
                  <span className="input-group-text">deg</span>
                </span>
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataScaleX">ScaleX</label>
                </span>
                <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" />
              </div>
              <div className="input-group input-group-sm">
                <span className="input-group-prepend">
                  <label className="input-group-text" htmlFor="dataScaleY">ScaleY</label>
                </span>
                <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="actions">
          <div className="col-sm-12 col-md-12 col-lg-9 docs-buttons">
            {/* <h3>Toolbar:</h3> */}
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.setDragMode(&quot;move&quot;)">
                  <span className="fa fa-arrows" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.setDragMode(&quot;crop&quot;)">
                  <span className="fa fa-crop" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.zoom(0.1)">
                  <span className="fa fa-search-plus" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.zoom(-0.1)">
                  <span className="fa fa-search-minus" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="move" data-option={-10} data-second-option={0} title="Move Left">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.move(-10, 0)">
                  <span className="fa fa-arrow-left" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="move" data-option={10} data-second-option={0} title="Move Right">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.move(10, 0)">
                  <span className="fa fa-arrow-right" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="move" data-option={0} data-second-option={-10} title="Move Up">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.move(0, -10)">
                  <span className="fa fa-arrow-up" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="move" data-option={0} data-second-option={10} title="Move Down">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.move(0, 10)">
                  <span className="fa fa-arrow-down" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="rotate" data-option={-45} title="Rotate Left">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.rotate(-45)">
                  <span className="fa fa-rotate-left" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="rotate" data-option={45} title="Rotate Right">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.rotate(45)">
                  <span className="fa fa-rotate-right" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="scaleX" data-option={-1} title="Flip Horizontal">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.scaleX(-1)">
                  <span className="fa fa-arrows-h" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="scaleY" data-option={-1} title="Flip Vertical">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.scaleY(-1)">
                  <span className="fa fa-arrows-v" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="crop" title="Crop">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.crop()">
                  <span className="fa fa-check" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="clear" title="Clear">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.clear()">
                  <span className="fa fa-remove" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="disable" title="Disable">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.disable()">
                  <span className="fa fa-lock" />
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="enable" title="Enable">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.enable()">
                  <span className="fa fa-unlock" />
                </span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" data-method="reset" title="Reset">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.reset()">
                  <span className="fa fa-refresh" />
                </span>
              </button>
              <label className="btn btn-primary btn-upload" htmlFor="inputImage" title="Upload image file">
                <input type="file" className="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
                <span className="docs-tooltip" data-toggle="tooltip" title="Import image with Blob URLs">
                  <span className="fa fa-upload" />
                </span>
              </label>
              <button type="button" className="btn btn-primary" data-method="destroy" title="Destroy">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.destroy()">
                  <span className="fa fa-power-off" />
                </span>
              </button>
            </div>
            <div className="btn-group btn-group-crop">
              <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;maxWidth&quot;: 4096, &quot;maxHeight&quot;: 4096 }">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getCroppedCanvas({ maxWidth: 4096, maxHeight: 4096 })">
                  Get Cropped Canvas
                </span>
              </button>
              <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getCroppedCanvas({ width: 160, height: 90 })">
                  160×90
                </span>
              </button>
              <button type="button" className="btn btn-success" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getCroppedCanvas({ width: 320, height: 180 })">
                  320×180
                </span>
              </button>
            </div>
            {/* Show the cropped image in modal */}
            <div className="modal fade docs-cropped" id="getCroppedCanvasModal" role="dialog" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="getCroppedCanvasTitle">Cropped</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    <a className="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.jpg">Download</a>
                  </div>
                </div>
              </div>
            </div>{/* /.modal */}
            <button type="button" className="btn btn-secondary" data-method="getData" data-option data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getData()">
                Get Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="setData" data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.setData(data)">
                Set Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="getContainerData" data-option data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getContainerData()">
                Get Container Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="getImageData" data-option data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getImageData()">
                Get Image Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="getCanvasData" data-option data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getCanvasData()">
                Get Canvas Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="setCanvasData" data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.setCanvasData(data)">
                Set Canvas Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="getCropBoxData" data-option data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.getCropBoxData()">
                Get Crop Box Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="setCropBoxData" data-target="#putData">
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.setCropBoxData(data)">
                Set Crop Box Data
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="moveTo" data-option={0}>
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.moveTo(0)">
                Move to [0,0]
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="zoomTo" data-option={1}>
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.zoomTo(1)">
                Zoom to 100%
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="rotateTo" data-option={180}>
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.rotateTo(180)">
                Rotate 180°
              </span>
            </button>
            <button type="button" className="btn btn-secondary" data-method="scale" data-option={-2} data-second-option={-1}>
              <span className="docs-tooltip" data-toggle="tooltip" title="cropper.scale(-2, -1)">
                Scale (-2, -1)
              </span>
            </button>
            <textarea className="form-control" id="putData" rows={1} placeholder="Get data to here or set data with this value" defaultValue={""} />
          </div>{/* /.docs-buttons */}
          <div className="col-sm-12 col-md-12 col-lg-3 docs-toggles">
            {/* <h3>Toggles:</h3> */}
            <div className="btn-group d-flex flex-wrap" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio" defaultValue="1.7777777777777777" />
                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 16 / 9">
                  16:9
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio" defaultValue="1.3333333333333333" />
                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 4 / 3">
                  4:3
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" defaultValue={1} />
                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 1 / 1">
                  1:1
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio" defaultValue="0.6666666666666666" />
                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 2 / 3">
                  2:3
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="aspectRatio5" name="aspectRatio" defaultValue="NaN" />
                <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: NaN">
                  Free
                </span>
              </label>
            </div>
            <div className="btn-group d-flex flex-wrap" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="radio" className="sr-only" id="viewMode0" name="viewMode" defaultValue={0} defaultChecked />
                <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 0">
                  VM0
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="viewMode1" name="viewMode" defaultValue={1} />
                <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 1">
                  VM1
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="viewMode2" name="viewMode" defaultValue={2} />
                <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 2">
                  VM2
                </span>
              </label>
              <label className="btn btn-primary">
                <input type="radio" className="sr-only" id="viewMode3" name="viewMode" defaultValue={3} />
                <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 3">
                  VM3
                </span>
              </label>
            </div>
            <div className="dropdown dropup docs-options">
              <button type="button" className="btn btn-primary btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                Toggle Options
                <span className="caret" />
              </button>
              <ul className="dropdown-menu" role="menu" aria-labelledby="toggleOptions">
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="responsive" type="checkbox" name="responsive" defaultChecked />
                    <label className="form-check-label" htmlFor="responsive">responsive</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="restore" type="checkbox" name="restore" defaultChecked />
                    <label className="form-check-label" htmlFor="restore">restore</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="checkCrossOrigin" type="checkbox" name="checkCrossOrigin" defaultChecked />
                    <label className="form-check-label" htmlFor="checkCrossOrigin">checkCrossOrigin</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="checkOrientation" type="checkbox" name="checkOrientation" defaultChecked />
                    <label className="form-check-label" htmlFor="checkOrientation">checkOrientation</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="modal" type="checkbox" name="modal" defaultChecked />
                    <label className="form-check-label" htmlFor="modal">modal</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="guides" type="checkbox" name="guides" defaultChecked />
                    <label className="form-check-label" htmlFor="guides">guides</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="center" type="checkbox" name="center" defaultChecked />
                    <label className="form-check-label" htmlFor="center">center</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="highlight" type="checkbox" name="highlight" defaultChecked />
                    <label className="form-check-label" htmlFor="highlight">highlight</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="background" type="checkbox" name="background" defaultChecked />
                    <label className="form-check-label" htmlFor="background">background</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="autoCrop" type="checkbox" name="autoCrop" defaultChecked />
                    <label className="form-check-label" htmlFor="autoCrop">autoCrop</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="movable" type="checkbox" name="movable" defaultChecked />
                    <label className="form-check-label" htmlFor="movable">movable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="rotatable" type="checkbox" name="rotatable" defaultChecked />
                    <label className="form-check-label" htmlFor="rotatable">rotatable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="scalable" type="checkbox" name="scalable" defaultChecked />
                    <label className="form-check-label" htmlFor="scalable">scalable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="zoomable" type="checkbox" name="zoomable" defaultChecked />
                    <label className="form-check-label" htmlFor="zoomable">zoomable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="zoomOnTouch" type="checkbox" name="zoomOnTouch" defaultChecked />
                    <label className="form-check-label" htmlFor="zoomOnTouch">zoomOnTouch</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="zoomOnWheel" type="checkbox" name="zoomOnWheel" defaultChecked />
                    <label className="form-check-label" htmlFor="zoomOnWheel">zoomOnWheel</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="cropBoxMovable" type="checkbox" name="cropBoxMovable" defaultChecked />
                    <label className="form-check-label" htmlFor="cropBoxMovable">cropBoxMovable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="cropBoxResizable" type="checkbox" name="cropBoxResizable" defaultChecked />
                    <label className="form-check-label" htmlFor="cropBoxResizable">cropBoxResizable</label>
                  </div>
                </li>
                <li className="dropdown-item">
                  <div className="form-check">
                    <input className="form-check-input" id="toggleDragModeOnDblclick" type="checkbox" name="toggleDragModeOnDblclick" defaultChecked />
                    <label className="form-check-label" htmlFor="toggleDragModeOnDblclick">toggleDragModeOnDblclick</label>
                  </div>
                </li>
              </ul>
            </div>{/* /.dropdown */}
          </div>{/* /.docs-toggles */}
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
