import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./ServiceDetail.css";
import { Link } from "react-router-dom";

export default function ServiceDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 ">
          <img
            src="https://setmywed.com/blog/wp-content/uploads/2022/06/65f6ba3105d8fa0b320a0a58089bb4d7-1200x900.jpg"
            alt="not available"
            className="img-fluid img-ak-1"
          ></img>
        </div>
        <div className="col-5 px-5 my-3">
          <div className="boxes-ak-1">
            <div className="border-ak-1">
              <h5>Per Day Price Estimate</h5>
            </div>
            <div className="border-ak-1">
              <h5 className="color-ak-1">50,000 per day</h5>
              <h6>Photo Package</h6>
            </div>
            <div>
              <h5 className="color-ak-1">90,000 per day</h5>
              <h6>Photo+Video</h6>
            </div>
          </div>
          <div className="detail-ak-1 my-4 ">
            <button className="btn-d-ak-2 mt-4">Order</button>
            <div className="my-2">
              <spna className="px-5">High Demand </spna>{" "}
              <span className="px-5 ">7 enquiries last week </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-7 boxes-ak-2 d-flex gap-5 py-3">
          <div>
            <Link className="text-decoration-none text-secondary ">
              <h5>Project</h5>
            </Link>
          </div>
          <div>
            <Link className="text-decoration-none text-secondary">
              <h5>About</h5>
            </Link>
          </div>
        </div>
      </div>
      <div className="row my-5 ">
        <div className="col-4 px-1">
          <img
            src="https://i.pinimg.com/564x/7c/2a/76/7c2a7678d3d17823cabd65c4c463a442.jpg"
            className=" img-ak-d-1"
          ></img>
        </div>
        <div className="col-4 px-2">
          <img
            src="https://cdn.kamatharjun.com/wp-content/uploads/2022/04/Indian-Destination-Wedding-Gujarat-Nidhi-Shirish-104.jpg "
            className=" img-ak-d-1"
          ></img>
        </div>
        <div className="col-4 px-2">
          <img
            src="https://www.ptaufiqphotography.com/wp-content/uploads/2019/01/Indian-Wedding-Ceremony-Fateh-Garh-Heritage-Resort-2-1920x1280.jpg"
            className=" img-ak-d-1"
          ></img>
        </div>
      </div>
    </div>
  );
}
