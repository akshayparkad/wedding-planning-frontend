import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSessionData, getUser, userData } from "../../Service/User";
import SidebarProfile from "./SidebarProfile";

function UserProfileEdit() {
  let param = useParams();
  const [user, setUser] = useState({ username: "", email: "", location: "" });
  const [updatedUser, setUpdateUser] = useState({uid:"", password: "", type:"", username: "", email: "", location: "", confirmPassword: ""});
  // const [bool, setBool] = useState(false);

  let navigate = useNavigate();

  //get user data
  const getuserData = async () => {
    const response = await getSessionData();
    setUser(response.data);
  };

  useEffect(() => {
    getuserData();
  }, []);


  //update user data
  const updateUserData = async () => {
    var response = await userData(updatedUser);
    navigate(`/userprofile`);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    updatedUser.uid = user.uid;
    updatedUser.type = user.type;
    updatedUser.password = user.password;
    updatedUser.confirmPassword = "";
    updatedUser.username = document.getElementById('username').value;
    updatedUser.email = document.getElementById('email').value;
    updatedUser.location = document.getElementById('location').value;
    updateUserData();
  };

  return (
    <div className="user-profile-18">
      <div className="user-profile-left mt-4">
        <div className="edit-form-18">
          <form className="editform-18" onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={user.username}
            />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
            />
            <br />
            <label for="location">location:</label>
            <br />
            <input
              type="text"
              id="location"
              name="location "
              defaultValue={user.location}
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
