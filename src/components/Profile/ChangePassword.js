import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getSessionData, userData } from '../../Service/User';
import SidebarProfile from './SidebarProfile'

function ChangePassword() {

  const [user, setUser] = useState({ username: "", email: "", location: "" });
  const [updatedUser, setUpdateUser] = useState({uid:"", password: "", type:"", username: "", email: "", location: "", confirmPassword: ""});
  let navigate = useNavigate();


   //get user data
   const getuserData = async () => {
    const response = await getSessionData();
    setUser(response.data);
  };

  useEffect(() => {
    getuserData();
  }, []);


  const updateUserData = async () => {
    var response = await userData(updatedUser);
    navigate(`/userprofile`);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpassword').value;


    if(password == confirmPassword) {
    updatedUser.uid = user.uid;
    updatedUser.type = user.type;
    updatedUser.password = password;
    updatedUser.confirmPassword = confirmPassword;
    updatedUser.username = user.username;
    updatedUser.email = user.email;
    updatedUser.location = user.location;
    updateUserData();
    } else{
      alert("recheck");
    }
  };

  return (
    <div className="user-profile-18">

    <div className="user-profile-left mt-4">
    <div className="edit-form-18">
        <form className='editform-18' onSubmit={handleSubmit}>
          
            <label for="password">New Password:</label><br />
            <input type="password" id="password" name="password" /><br />

            <label for="confirmpassword">Confirm Password:</label><br />
            <input type="password" id="confirmpassword" name="confirmpassword" />
            <br />
            <input type="submit" id="update-18" value="Update" />
        </form>
    </div>
    </div>


    <div className="user-profile-right">
        <SidebarProfile/>
    </div>


</div>

  )
}

export default ChangePassword