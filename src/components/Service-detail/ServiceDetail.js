import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <img
            src="https://setmywed.com/blog/wp-content/uploads/2022/06/65f6ba3105d8fa0b320a0a58089bb4d7-1200x900.jpg"
            alt="not available" className="img-fluid img-ak-1"        >
          </img>
        </div>
              <div className="col-4">
                  <div className="price-ak-1">
                      <div className="border-ak-1"><h6  >Per Day Price Estimate</h6></div>
                      <div className="border-ak-1"><h6  >50,000 per day</h6><h6>Photo Package</h6></div>
                      <div className="border-ak-1"><h6  >90,000 per day</h6><h6>Photo+Video</h6></div>
                  </div>
        </div>
      </div>
    </div>
  );
}
