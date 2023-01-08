import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./ServiceDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { getSpacificService } from "../../Service/WedService";
import { addOrder } from "../../Service/User";

export default function ServiceDetail() {
  const params = useParams();
  const [service, setService] = useState({});
  const getWedServicBySid = async () => {
    const response = await getSpacificService(params.sid);
    setService(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getWedServicBySid();
  }, [params]);

  const addorder = async () => {
    const order = {
      vendorname: service.vendorname,
      category: service.category,
      price: service.price1,
      uid: service.uid,
    };
    const responce = await addOrder(order);
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-7 ">
          <img src={service.img1} className="img-fluid img-ak-1"></img>
        </div>
        <div className="col-5 px-5 ">
          <div className="boxes-ak-1">
            <div className="border-ak-1">
              <h5 className="text-secondary">Per Day Price Estimate</h5>
            </div>
            <div className="border-ak-1 ">
              <span className="color-ak-1 fs-4">{service.price1} per day</span>
              <span>{service.purpose1}</span>
            </div>
            <div>
              <span className="color-ak-1 fs-4">{service.price2}per day</span>
              <span>{service.purpose2}</span>
            </div>
          </div>
          <div className="detail-ak-1 my-4 ">
            <button className="btn-d-ak-2 mt-4" onClick={addorder}>
              Order
            </button>
            <div className="my-2">
              <spna className="px-5">High Demand </spna>
              <span className="px-5 ">7 enquiries last week </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-7 boxes-ak-2 ">
          <div className="fs-3 py-1 color-ak-1">{service.vendorname}</div>
          <div className="fs-5 py-1 text-muted">{service.location}</div>
          <div className="fs-5 py-1 text-muted">
            Event Handle Exp:-{service.exp} years{" "}
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-7 boxes-ak-2  py-2">
          <h5 className="text-decoration-none text-secondary ">
            Project & About
          </h5>
        </div>
      </div>
      <div className="row my-4  ">
        <hr></hr>
        <div className="col-4 px-1">
          <img src={service.img2} className=" img-ak-d-1"></img>
        </div>
        <div className="col-4 px-2">
          <img src={service.img3} className=" img-ak-d-1"></img>
        </div>
        <div className="col-4 px-2">
          <img src={service.img4} className=" img-ak-d-1"></img>
        </div>
      </div>
      <div>
        <hr></hr>
        <div className=" h5 text-secondary ">{service.description}</div>
        <hr></hr>
        <div className=" text-muted">{service.content}</div>
      </div>
      <hr></hr>
    </div>
  );
}
