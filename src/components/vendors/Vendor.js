import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Vendor.css";
import { postWedServiceDetails } from "../API/Services";
import { getSessionData } from "../../Service/User";
import { deleteWedServicesById, getWedServicesById } from "../../Service/WedService";
import { useNavigate } from "react-router-dom";

function Vendor() {
  const[sdata, setSdata] = useState();
  const[user, setUser] = useState({uid:null});
  const[serviceData, setServiceData] = useState([]);
  const [bool, setBool] = useState(false);

  const navigate = useNavigate();
//post service
  const postServiceData = async () =>{
    sdata.uid = document.getElementById('myid').value;
    sdata.vendorname = user.username;
    console.log(user.username);
    const response = await postWedServiceDetails(sdata);
    console.log(response);
  }


  const handleChange = (event) => {
    setSdata({ ...sdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      postServiceData();
      setBool(true);
  }

  //get session and service data
  const getSession = async() =>{
    const response = await getSessionData();
    setUser(response.data);
    const response1 = await getWedServicesById(response.data.uid);
    setServiceData(response1.data);
  }
  
  useEffect( () => {
    getSession();
 
  },[bool]);


  //delete service

  const handleDelete = async(id) =>{
    const response = await deleteWedServicesById(id);
    setBool(true);
  }


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

      { serviceData.map(item => {

        return(

          <div className="row vendor-detail-ak-1 gap-2 mx-3 my-2 ">
          <div className="col-2  ">{item.sid}</div>
          <div className="col-1  ">{item.category}</div>
          <div className="col-2  ">{item.location}</div>
          <div className="col-1 ">{item.price1}</div>
          <div className="col-2 ">{item.exp}</div>
          <div className="col-1">
            <button className="btn btn-danger btn-ak-1" onClick={() => {
                handleDelete(item.sid);
            }}>Delete</button>
          </div>
          <div className="col-1">
            <button className="btn btn-warning btn-ak-1" onClick={() => {
                navigate(`/updateservice/${item.sid}/${item.uid}`)
            }}>Update</button>
          </div>
        </div>

        )
      })
         
      }

        </div>
        <div className="col-5 main-ak-2 ">
          <div className="text-center fs-5 text-dark">Add Service</div>

          <form onSubmit={handleSubmit}>
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
                id="myid"
                value={user.uid}
                className="col-5 form-ak-1"
                disabled
                onChange={handleChange}
              />
            </div>

            <div className="row my-4">
            <label
                htmlFor="location"
                className="col-4 d-flex justify-content-end  align-items-center"
              >
             Location:
              </label>
              <select className="col-5 form-ak-1" id="location1" name="location" onChange={handleChange}>
              <option>Select Location</option>
                <hr></hr>
                <option>Mumbai</option>
                <hr></hr>
                <option>Pune </option>
                <hr></hr>
                <option>Kolkata</option>
                <hr></hr>
                <option>Goa</option>
                <hr></hr>
              </select>
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
                placeholder="Price"
                id="price1"
                name="price1"
                className="col-2 form-ak-1"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="comment"
                id="purpose1"
                name="purpose1"
                className="col-3 form-ak-1"
                onChange={handleChange}
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
                placeholder="Price"
                id="price2"
                name="price2"
                className="col-2 form-ak-1"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="comment"
                id="purpose2"
                name="purpose2"
                className="col-3 form-ak-1"
                onChange={handleChange}
              />
            </div>
            <div className="row my-4">
              <label
                htmlFor="category"
                className="col-4 d-flex justify-content-end  align-items-center"
              >
                Category:
              </label>
              <select className="col-5 form-ak-1 " name="category"  onChange={handleChange}>
              <option>Select Category</option>
                <hr></hr>
                <option>Photoshoot</option>
                <hr></hr>
                <option>Bridalwear </option>
                <hr></hr>
                <option>Makeup</option>
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
                placeholder="Experience"
                name="exp"
                className="col-5 form-ak-1"
                onChange={handleChange}
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
                placeholder="Enter Emage 1"
                name="img1"
                className="col-5 form-ak-1"
                onChange={handleChange}
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
                placeholder="Enter image 2"
                name="img2"
                className="col-5 form-ak-1"
                onChange={handleChange}
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
                name="img3"
                className="col-5 form-ak-1 align-items-center"
                onChange={handleChange}
              />
            </div>

            <div className="row my-4">
              <label
                htmlFor="image4"
                className="col-4 d-flex justify-content-end align-items-center"
              >
                Image 4:
              </label>
              <input
                type="text"
                placeholder="Enter Image 4"
                name="img4"
                className="col-5 form-ak-1 align-items-center"
                onChange={handleChange}
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
                name="description"
                className="col-5 form-ak-1"
                onChange={handleChange}
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
                placeholder="Enter Short Detail"
                name="content"
                className="col-5 form-ak-1"
                onChange={handleChange}
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
