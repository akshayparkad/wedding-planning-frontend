import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cncncelOrder, getOrderByUid, getSessionData } from "../../Service/User";
import SidebarProfile from "./SidebarProfile";
import "./UserProfile.css";

function UserProfile() {
  const [user, setUser] = useState({ uid: null });
    const [order, setOrder] = useState([]);
    const [bool,setBool] = useState("flase")

  const getSession = async () => {
    const response = await getSessionData();
    setUser(response.data);
    const response1 = await getOrderByUid(response.data.uid);
    setOrder(response1.data);
    console.log(response1.data);
  };

  useEffect(() => {
    getSession();
  }, [bool]);
    
    const orderCancel = async (id) => { 
        const responce = await cncncelOrder(id);
        setBool(!bool)
    }

  return (
    <>
      <div className="user-profile-18">
        <div className="user-profile-left mt-4">
                  {order.map((ele) => { 
                      return (
                        <div className="user-box-18-1">
                              <div className="vendor-id-18">{ ele.oid}</div>
                          <div className="vendor-name-18">{ele.vendorname}</div>
                          <div className="vendor-name-18">{ele.category}</div>
                          <div className="vendor-name-18">{ ele.price}</div>
                        <div>
                                  <button className="btn-18" onClick={() => { orderCancel(ele.oid) }}>Cancle Order</button>
                        </div>
                      </div>
                      )
                  })}
        </div>

        <div className="user-profile-right">
          <SidebarProfile />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
