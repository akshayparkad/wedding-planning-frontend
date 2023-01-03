import React from 'react'
import { Link } from 'react-router-dom'

function SidebarProfile() {
  return (
    <>
    <div class="vertical-menu">
    <Link to ="/userprofile">Orders</Link>
    <Link to ="/userprofileedit">Edit Profile</Link>
    <Link to ="/changepassword">Change Password</Link>
    <Link to ="/userprofile">Logout</Link>
    </div>
    </>
  )
}

export default SidebarProfile