import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Vendor.css";

function Vendor() {
  return (
    <>
    <div className="row">
      <div className="col-7 main-ak-1 ">
        <div className="vendor-detail-ak-1 gap-3 mx-3 my-2">
          <div className="font-col-ak-1">Photography</div>
          <div  className="font-col-ak-1">mumbai</div>
          <div className="font-col-ak-1">prise:-10000 /day</div>
          <div className="font-col-ak-1"> rating:-5</div>
          <div className="font-col-ak-1"> TotalEVentExp:-5</div>
          <div>
            <button className="btn btn-danger btn-ak-1 font-col-ak-1">Delete</button>
          </div>
          <div>
            <button className="btn btn-warning btn-ak-1 font-col-ak-1">Update</button>
          </div>
        </div>
      </div>
      <div className="col-5 main-ak-2 ">
        <form>
        <div className="row  my-4">
            <label
              htmlFor="vcode"
              className="col-4 d-flex justify-content-end"
            >
              Vendor code :
            </label>
            <input
              type="text"
              placeholder="Enter your vendor code"
              name="vcode"
              className="col-5"
            />
            </div>
            <div className="row  my-4">
            <label
              htmlFor="scode"
              className="col-4 d-flex justify-content-end"
            >
              Service code :
            </label>
            <input
              type="text"
              placeholder="Enter your service  code"
              name="scode"
              className="col-5"
            />
          </div>
          <div className="row my-4">
            <label
              htmlFor="category"
              className="col-4 d-flex justify-content-end font"
            >
              Category:
            </label>
            <select className="col-5 " name="category">
              <option>photoshoot</option>
              <hr></hr>
              <option>bridalwaer </option>
              <hr></hr>
              <option>make-up</option>
              <hr></hr>
              <option>groomwear</option>
              <hr></hr>
              <option>catering</option>
              <hr></hr>
              <option>palning & decoration</option>
              <hr></hr>
            </select>
          </div>

          <div className="row  my-4">
            <label
              htmlFor="location"
              className="col-4 d-flex justify-content-end"
            >
              Location :
            </label>
            <input
              type="text"
              placeholder="Enter Service Location"
              name="location"
              className="col-5"
            />
          </div>

          <div className="row my-4">
            <label htmlFor="price" className="col-4 d-flex justify-content-end">
              Price/day :
            </label>
            <input
              type="price"
              placeholder="Enter Price"
              name="location"
              className="col-5"
            />
          </div>
          <div className="row my-4">
            <label
              htmlFor="rating"
              className="col-4 d-flex justify-content-end"
            >
              Rating :
            </label>
            <input
              type="text"
              placeholder="Enter Rating"
              name="rating"
              className="col-5"
            />
          </div>

          <div className="row my-4">
            <label
              htmlFor="rating"
              className="col-4 d-flex justify-content-end"
            >
              TotalEventExp:
            </label>
            <input
              type="text"
              placeholder="Enter Rating"
              name="rating"
              className="col-5"
            />
          </div>

          <div className="my-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-ak-1 ">
              Add Service
            </button>
          </div>
        </form>
      </div>
      </div>
      </>
  );
}

export default Vendor;
