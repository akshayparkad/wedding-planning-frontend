import React from 'react'
import { Link } from 'react-router-dom'

function SidebarProfile({uid}) {
  return (
    <>
    <div class="vertical-menu">
    <Link to ="/userprofile">Orders</Link>
    <Link to ={`/userprofileedit/${uid}`}>Edit Profile</Link>
    <Link to ="/changepassword">Change Password</Link>
    <Link to ="/userprofile">Logout</Link>
    </div>
    </>
  )
}

export default SidebarProfile