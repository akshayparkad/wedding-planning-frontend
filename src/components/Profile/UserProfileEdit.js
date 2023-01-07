import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, userData } from "../../Service/User";
import SidebarProfile from "./SidebarProfile";

function UserProfileEdit() {
  let param = useParams();
  const [user, setUser] = useState({ username: "", email: "", location: "" });
  const [updatedUser, setUpdateUser] = useState();
  let navigate = useNavigate();
  const getuserData = async () => {
    const use = await getUser(param.uid);
    setUser(use.data);
  };

  const handleChange = (event) => {
    console.log(event);
    setUpdateUser({ ...updatedUser, [event.target.name]: event.terget.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(updatedUser);
    var response = await userData(updatedUser);
    navigate(`/userprofile/${param.uid}`);
  };

  useEffect(() => {
    getuserData();
  }, []);

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
              defaultValue={user.username}
              onChange={handleChange}
            />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
            />
            <br />
            <label for="location">location:</label>
            <br />
            <input
              type="text"
              id="password"
              name="location "
              defaultValue={user.location}
              onChange={handleChange}
            />
            <br />
            <br />
            <input type="submit" id="update-18" value="Update" />
          </form>
        </div>
      </div>

      <div className="user-profile-right">
        <SidebarProfile uid={param.uid} />
      </div>
    </div>
  );
}

export default UserProfileEdit;
