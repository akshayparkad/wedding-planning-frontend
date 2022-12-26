import React from "react";
import { row, col } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Vendor.css"

function Vendor() {
  return (
    <div className="row">
          <div className="col-7 main-ak-1 ">
              <div className="vendor-detail-ak-1 gap-3 mx-3 my-2">
                  <div>Photography</div>
                  <div>mumbai</div>
                  <div>prise:-10000 /day</div>
                  <div> rating:-5</div>
                  <div><button className="btn btn-danger btn-ak-1">Delete</button></div>
                  <div><button className="btn btn-warning btn-ak-1" >Update</button></div>
              </div>
              <div className="vendor-detail-ak-1 gap-3 mx-3 my-2">
                  <div>Photography</div>
                  <div>mumbai</div>
                  <div>prise:-10000 /day</div>
                  <div> rating:-5</div>
                  <div><button className="btn  btn-danger btn-ak-1">Delete</button></div>
                  <div><button className="btn btn-warning btn-ak-1" >Update</button></div>
              </div>
              <div className="vendor-detail-ak-1 gap-3 mx-3 my-2">
                  <div>Photography</div>
                  <div>mumbai</div>
                  <div>prise:-10000 /day</div>
                  <div> rating:-5</div>
                  <div><button className="btn btn-ak-1 btn-danger">Delete</button></div>
                  <div><button className="btn btn-ak-1 btn-danger" >Update</button></div>
              </div>
      </div>
      <div className="col-5 main-ak-2 ">hi</div>
    </div>
  );
}

export default Vendor;
