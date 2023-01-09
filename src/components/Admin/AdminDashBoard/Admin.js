import React, { useEffect, useState } from 'react'
import { deleteBoth, getAllUsers } from '../../../Service/User';
import './Admin.css'

function Admin() {

    const [users, setUsers] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [bool, setBool] = useState(false);



    const getBothUsersAndVendors = async () => {

        const response = await getAllUsers("user");
        setUsers(response.data);

        const response1 = await getAllUsers("vendor");
        setVendors(response1.data);
    }


    useEffect(() => {

        getBothUsersAndVendors();

    }, [bool])

    //delete user

    const handleDelete = (uid) => {
        
        deleteBoth(uid);
        setBool(true);
    }

    return (
        <div>
            <div className="admin-header-18">
                <h2> Admin Area</h2>
            </div>

            <div className='admin-section-18'>

                <div className="admin-section-left-18">
                    <h2 className='subheading-18'>Vendor's List</h2>


                    {vendors.map(item => {

                        return (

                            <div className='vendor-box-18'>
                                <div className='vendor-id-18'>{item.uid}</div>
                                <div className='vendor-name-18'>{item.username}</div>
                                <div className='vendor-name-18'>{item.email}</div>
                                <div className='vendor-name-18'>{item.location}</div>
                                <div><button className='btn-18' onClick={() => {
                                    handleDelete(item.uid);
                                }}>Delete</button></div>

                            </div>
                        )
                    })
                    }

                </div>

                <div className="admin-section-right-18">
                    <h2 className='subheading-18'>User's List</h2>

                    {users.map(item => {

                                return (
                    
                    <div className='user-box-18'>
                        <div className='user-id-18'>{item.uid}</div>
                        <div className='vendor-name-18'>{item.username}</div>
                        <div className='vendor-name-18'>{item.email}</div>
                        <div className='vendor-name-18'>{item.location}</div>
                        <div><button className='btn-18' onClick={() => {
                                    handleDelete(item.uid);
                                }}>Delete</button></div>
                    </div>
     )
    })
    }
                </div>

            </div>

        </div>
    )
}

export default Admin