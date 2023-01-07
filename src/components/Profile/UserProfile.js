import React from 'react'
import { useParams } from 'react-router-dom'
import SidebarProfile from './SidebarProfile'
import './UserProfile.css'

function UserProfile() {

   
    return (
        <>
            <div className="user-profile-18">

                <div className="user-profile-left mt-4">

                    <div className='user-box-18-1'>
                        <div className='vendor-id-18'>ID250</div>
                        <div className='vendor-name-18'>Akshay Photography</div>
                        <div className='vendor-name-18'>Rating: 4.5</div>
                        <div><button className='btn-18'>View Order</button></div>
                        <div><button className='btn-18'>Cancle Order</button></div>
                    </div>

                    <div className='user-box-18-1'>
                        <div className='vendor-id-18'>ID250</div>
                        <div className='vendor-name-18'>Akshay Photography</div>
                        <div className='vendor-name-18'>Rating: 4.5</div>
                        <div><button className='btn-18'>View Order</button></div>
                        <div><button className='btn-18'>Cancle Order</button></div>
                    </div>

                    <div className='user-box-18-1'>
                        <div className='vendor-id-18'>ID250</div>
                        <div className='vendor-name-18'>Akshay Photography</div>
                        <div className='vendor-name-18'>Rating: 4.5</div>
                        <div><button className='btn-18'>View Order</button></div>
                        <div><button className='btn-18'>Cancle Order</button></div>
                    </div>

                    <div className='user-box-18-1'>
                        <div className='vendor-id-18'>ID250</div>
                        <div className='vendor-name-18'>Akshay Photography</div>
                        <div className='vendor-name-18'>Rating: 4.5</div>
                        <div><button className='btn-18'>View Order</button></div>
                        <div><button className='btn-18'>Cancle Order</button></div>
                    </div>

                </div>


                <div className="user-profile-right">
                    <SidebarProfile/>
                </div>

            </div>

        </>
    )
}

export default UserProfile