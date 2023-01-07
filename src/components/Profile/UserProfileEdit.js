import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, userData } from "../../Service/User";
import SidebarProfile from "./SidebarProfile";

function UserProfileEdit() {
  let param = useParams();
  const[data,setData] = useState();
  let user ;
  let navigate = useNavigate();
  const getuserData = async () => {
    const use = await getUser(param.uid);
    use=use.data;
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.terget.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var response = await userData(data);
    console.log(response);
    navigate(`/userprofile/${param.uid}`);
  };

  useEffect(() => {
    getuserData();
  },[]);

  return (
    <div className="user-profile-18">
      <div className="user-profile-left">
        <div className="edit-form-18">
          <form className="editform-18" onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <label for="location">location:</label>
            <br />
            <input
              type="text"
              id="password"
              name="location "
              value={user.location}
              onChange={handleChange}
            />
            <br />
            <br />
            <input type="submit" id="update-18" value="Update" />
          </form>
        </div>
      </div>

      <div className="user-profile-right">
        <SidebarProfile  uid={ param.uid} />
      </div>
    </div>
  );
}

export default UserProfileEdit;
