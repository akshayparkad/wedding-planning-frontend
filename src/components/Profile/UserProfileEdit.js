import React from 'react'
import SidebarProfile from './SidebarProfile'

function UserProfileEdit() {
    return (

        <div className="user-profile-18">

            <div className="user-profile-left">
            <div className="edit-form-18">
                <form className='editform-18'>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label for="email">Email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <label for="confirmpassword">Confirm Password:</label><br />
                    <input type="password" id="password" name="confirmpassword" />
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

export default UserProfileEdit