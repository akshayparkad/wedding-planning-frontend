import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getWedServicesByServiceId } from '../../Service/WedService';
import { postWedServiceDetails } from '../API/Services';

function UpdateService() {

    const [serviceData, setServiceData] = useState({ location: "" });
    const [sdata, setSdata] = useState({
        uid: "",
        sid: "",
        price1: "",
        price2: "",
        purpose1: "",
        purpose2: "",
        location: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        exp: "",
        description: "",
        content: "",
        category: ""
    });

    const params = useParams();
    const navigate = useNavigate();
    //post updated data
    const postServiceData = async () => {
        // sdata.uid = document.getElementById('myid').value;
        const response = await postWedServiceDetails(sdata);
        console.log(response);
    }



    //get data using sid
    const getData = async () => {
        const response1 = await getWedServicesByServiceId(params.id);
        setServiceData(response1.data);
    }

    useEffect(() => {
        getData();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

    sdata.uid = params.uid;
    sdata.sid = serviceData.sid;
    sdata.price1 = document.getElementById('price1').value;
    sdata.price2 = document.getElementById('price2').value;
    sdata.purpose1 = document.getElementById('purpose1').value;
    sdata.purpose2 = document.getElementById('purpose2').value;
    sdata.location = document.getElementById('location1').value;
    sdata.category = document.getElementById('category').value;
    sdata.img1 = document.getElementById('img1').value;
    sdata.img2 = document.getElementById('img2').value;
    sdata.img3 = document.getElementById('img3').value;
    sdata.img4 = document.getElementById('img4').value;
    sdata.exp = document.getElementById('exp').value;
    sdata.description = document.getElementById('description').value;
    sdata.content = document.getElementById('content').value;


        postServiceData();

    navigate('/vendor')
    }

    console.log(sdata);


    return (
        <>
            <div className="main-ak-2">
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
                            value={params.id}
                            className="col-5 form-ak-1"
                            disabled

                        />
                    </div>

                    <div className="row my-4">
                        <label
                            htmlFor="location"
                            className="col-4 d-flex justify-content-end  align-items-center"
                        >
                            Location:
                        </label>
                        <select className="col-5 form-ak-1 " id="location1" name="location">
                            <option>{serviceData.location}</option>
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
                            defaultValue={serviceData.price1}
                            className="col-2 form-ak-1"

                        />
                        <input
                            type="text"
                            placeholder="comment"
                            id="purpose1"
                            defaultValue={serviceData.purpose1}
                            name="purpose1"
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
                            placeholder="Price"
                            id="price2"
                            defaultValue={serviceData.price2}
                            name="price2"
                            className="col-2 form-ak-1"

                        />
                        <input
                            type="text"
                            placeholder="comment"
                            id="purpose2"
                            defaultValue={serviceData.purpose2}
                            name="purpose2"
                            className="col-3 form-ak-1"

                        />
                    </div>
                    <div className="row my-4">
                        <label
                            htmlFor="category"
                            className="col-4 d-flex justify-content-end  align-items-center"
                        >
                            Category:
                        </label>
                        <select className="col-5 form-ak-1 " id="category" name="category" >
                            <option>{serviceData.category}</option>
                            <hr></hr>
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
                            placeholder="Experience"
                            id="exp"
                            name="exp"
                            defaultValue={serviceData.exp}
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
                            placeholder="Enter Emage 1"
                            id="img1"
                            name="img1"
                            defaultValue={serviceData.img1}
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
                            placeholder="Enter image 2"
                            name="img2"
                            id="img2"
                            defaultValue={serviceData.img2}
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
                            name="img3"
                            id="img3"
                            defaultValue={serviceData.img3}
                            className="col-5 form-ak-1 align-items-center"
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
                            id="img4"
                            defaultValue={serviceData.img4}
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
                            name="description"
                            id="description"
                            defaultValue={serviceData.description}
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
                            placeholder="Enter Short Detail"
                            name="content"
                            id="content"
                            defaultValue={serviceData.content}
                            className="col-5 form-ak-1"
                        />
                    </div>
                    <div className="my-4 d-flex justify-content-center">
                        <button type="submit" className="btn btn-ak-1 ">
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default UpdateService