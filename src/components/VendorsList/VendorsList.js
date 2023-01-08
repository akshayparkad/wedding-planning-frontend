import React, { useEffect, useState } from "react";
import "./VendorsList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link, useParams } from "react-router-dom";
import { getWedServicesByCategory, getWedServicesByLocation } from "../../Service/WedService";

function VendorsList() {
  const [stylelist, setStyleList] = useState("vendors-list-18");
  const [stylecard, setStyleCard] = useState("vendor-card");
  const params = useParams();
  const [service, setService] = useState([]);

  const toggleList = () => {
    setStyleList("vendors-list-18-list");
    setStyleCard("vendor-card-list-18");
  };

  const toggleGrid = () => {
    setStyleList("vendors-list-18");
    setStyleCard("vendor-card");
  };

  const getSpecificService = async () => {
    if(params.city == "city"){

      const res = await getWedServicesByLocation(params.mycity);
      console.log(res);
      setService(res.data);
    }else{

    const response = await getWedServicesByCategory(params.service);
    console.log(response);
    setService(response.data);
   }
  };

  useEffect(() => {
    getSpecificService();
  }, [params]);

  return (
    <>
      {/* sub navbar */}

      <div className="container mt-3">
        <div className="row bg-light mx-1 navbar-vendorlist">
          <div className="col-7 mt-1">
            <a class="navbar-brand">Wedding Photogtaphers</a>
          </div>

          <div
            className="toggle-grid-18 col-1 d-flex justify-content-end mt-2"
            onClick={toggleGrid}
          >
            <i class="fa-solid fa-grip fa-lg"></i>
          </div>

          <div
            className="toggle-list-18 col-1  d-flex justify-content-start mt-2"
            onClick={toggleList}
          >
            <i class="fa-solid fa-list  fa-lg"></i>
          </div>

          <div className="col-3">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn-18 btn-outline-success-18" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className={stylelist}>
          {service.map((ele) => {
            return (
              <div class={stylecard}>
                <div className="vendor-card-image">
                  <img src={ele.img1} />
                </div>

                <div class="vendor-card-info">
                  <h3 class="vendor-card-name">
                    <Link to={ `/serviceDetail/${ele.sid}`} className="text-link">
                      {ele.vendorname}
                    </Link>
                  </h3>
                  <p class="vendor-card-description">{ele.description}</p>
                  <div class="vendor-card-location">
                    <img
                      src="https://images.wedmegood.com/react-frontend-v4/static/media/location.417064ed.svg"
                      alt="Location icon"
                    />
                    <p class="vendor-card-location-text">{ele.location}</p>
                  </div>
                  <div class="vendor-card-rating">
                    <i class="fa-solid fa-star"> </i>
                    <p class="vendor-card-rating-text">4.5 (123 reviews)</p>
                  </div>
                  <div class="vendor-card-pricing">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <p class="vendor-card-pricing-text">{ele.price1}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default VendorsList;
