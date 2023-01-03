import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Vendor.css";

function Vendor() {
  return (
    <>
      <div className="row">
        <div className="col-7 main-ak-1 m-0">
          <div className="text-center fs-5 text-dark">Service List</div>
          <div className="row vendor-detail-ak-1 gap-2 mx-3 my-2 ">
            <div className="col-2  ">Service code</div>
            <div className="col-1  ">Category</div>
            <div className="col-2  ">Location</div>
            <div className="col-1 ">Price/day</div>
            <div className="col-2 ">Total Event Exp.</div>
            <div className="col-1">
              <button className="btn btn-danger btn-ak-1 ">Delete</button>
            </div>
            <div className="col-1">
              <button className="btn btn-warning btn-ak-1 ">Update</button>
            </div>
          </div>
          <div className="row vendor-detail-ak-1 gap-2 mx-3 my-2 ">
            <div className="col-2  ">001</div>
            <div className="col-1  ">Photoshoot</div>
            <div className="col-2  ">Mumabi</div>
            <div className="col-1 ">50000</div>
            <div className="col-2 ">200+</div>
            <div className="col-1">
              <button className="btn btn-danger btn-ak-1 ">Delete</button>
            </div>
            <div className="col-1">
              <button className="btn btn-warning btn-ak-1 ">Update</button>
            </div>
          </div>
        </div>
        <div className="col-5 main-ak-2 ">
        <div className="text-center fs-5 text-dark">Add Service</div>
          <form>
            <div className="row  my-4">
              <label
                htmlFor="vcode"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Vendor code :
              </label>
              <input
                type="text"
                placeholder="Enter your vendor code"
                name="vcode"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row  my-4">
              <label
                htmlFor="scode"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Service code :
              </label>
              <input
                type="text"
                placeholder="Enter your service  code"
                name="scode"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row  my-4">
              <label
                htmlFor="pd1"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                price/day 1 :
              </label>
              <input
                type="text"
                placeholder="prise"
                name="pd1"
                className="col-2 form-ak-1"
              />
              <input
                type="text"
                placeholder="purpose of prise 1"
                name="pdu1"
                className="col-3 form-ak-1"
              />
            </div>
            <div className="row  my-4">
              <label
                htmlFor="pd2"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                price/day 2 :
              </label>
              <input
                type="text"
                placeholder="prise"
                name="pd2"
                className="col-2 form-ak-1"
              />
              <input
                type="text"
                placeholder="purpose of prise 2"
                name="pdu2"
                className="col-3 form-ak-1"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="category"
                className="col-4 d-flex justify-content-end font align-items-center"
              >
                Category:
              </label>
              <select className="col-5 form-ak-1 " name="category">
                <option>Photoshoot</option>
                <hr></hr>
                <option>Bridalwaer </option>
                <hr></hr>
                <option>Make-up</option>
                <hr></hr>
                <option>Groomwear</option>
                <hr></hr>
                <option>Catering</option>
                <hr></hr>
                <option>Palning & decoration</option>
                <hr></hr>
                <option>Vanue</option>
                <hr></hr>
              </select>
            </div>
            <div className="row my-4">
              <label
                htmlFor="rating"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                TotalEventExp:
              </label>
              <input
                type="text"
                placeholder="Enter total event exp."
                name="rating"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="image1"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Image 1:
              </label>
              <input
                type="text"
                placeholder="Enter Emage URL"
                name="image1"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="image2"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Image 2:
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                name="image2"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="image3"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Image 3:
              </label>
              <input
                type="text"
                placeholder="Enter Image 3"
                name="image3"
                className="col-5 form-ak-1 align-items-center"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="det"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Description:
              </label>
              <input
                type="text"
                placeholder="Enter Description"
                name="det"
                className="col-5 form-ak-1"
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="About"
                className="col-4 d-flex justify-content-end text-align-center align-items-center "
              >
                About:
              </label>
              <input
                type="text"
                placeholder="Enter details about service"
                name="image3"
                className="col-5 form-ak-1"
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
