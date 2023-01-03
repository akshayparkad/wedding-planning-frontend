import React from 'react'
import SidebarProfile from './SidebarProfile'

function ChangePassword() {


  return (
    <div className="user-profile-18">

    <div className="user-profile-left">
    <div className="edit-form-18">
        <form className='editform-18'>
            <label for="username">Old Password:</label><br />
            <input type="password" id="oldpassword" name="oldpassword" /><br />

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
        <SidebarProfile />
    </div>


</div>

  )
}

export default ChangePassword