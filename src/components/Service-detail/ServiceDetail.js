import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./ServiceDetail.css";
import { Link } from "react-router-dom";

export default function ServiceDetail() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-7 ">
          <img
            src="https://setmywed.com/blog/wp-content/uploads/2022/06/65f6ba3105d8fa0b320a0a58089bb4d7-1200x900.jpg"
            alt="not available"
            className="img-fluid img-ak-1"
          ></img>
        </div>
        <div className="col-5 px-5 ">
          <div className="boxes-ak-1">
            <div className="border-ak-1">
              <h5 className="text-secondary">Per Day Price Estimate</h5>
            </div>
            <div className="border-ak-1 ">
              <span className="color-ak-1 fs-4">50,000 per day</span>
              <span>Photo Package</span>
            </div>
            <div>
              <span className="color-ak-1 fs-4">90,000 per day</span>
              <span>Photo + Video</span>
            </div>
          </div>
          <div className="detail-ak-1 my-4 ">
            <button className="btn-d-ak-2 mt-4">Order</button>
            <div className="my-2">
              <spna className="px-5">High Demand </spna>
              <span className="px-5 ">7 enquiries last week </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-7 boxes-ak-2 ">
          <div className="fs-3 py-1 color-ak-1">CamLens Photography</div>
          <div className="fs-5 py-1 text-muted">Suburbs, Mumbai</div>
          <div className="fs-5 py-1 text-muted">Event Handle Exp:-25 years </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-7 boxes-ak-2  py-2">
              <h5 className="text-decoration-none text-secondary ">Project & About</h5>
        </div>
      </div>
      <div className="row my-4  ">
        <hr></hr>
        <div className="col-4 px-1">
          <img
            src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jdeznelskguuoxud_1608529249.jpeg"
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
      <div>
        <hr></hr>
        <div className=" h5 text-secondary ">About CamLens Photography - Wedding Photographers,Suburbs, Mumbai</div>
        <hr></hr>
        <div className=" text-muted">CamLens Photography is a wedding photography and videography company situated in Ganesh Nagar, Mumbai. Photographs have a way of informing us what is special and what should always be treasured and cherished. So, if you are a soon-to-be married couple looking for a skilled photographer, your quest ends with CamLens Photography. It is the creation of Kamlesh Parmar, an excellent photographer who catches each minute to precision.</div>
      </div>
      <hr></hr>
    </div>
  );
}
