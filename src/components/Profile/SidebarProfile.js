import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDestroySession } from "../../Service/User";

function SidebarProfile() {
  const navigate = useNavigate();



  return (
    <>
      <div class="vertical-menu mt-4">
        <Link to={`/userprofile/`}>Orders</Link>
        <Link to={`/userprofileedit/`}>Edit Profile</Link>
        <Link to={`/changepassword/`}>Change Password</Link>
      </div>
    </>
  );
}

export default SidebarProfile;
