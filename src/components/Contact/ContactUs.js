import React, { useState } from 'react'
import './ContactUs.css'
import { postContactUs } from '../../Service/User';


function ContactUs() {

    const[contactData, setContactData] = useState({
        name : '',
        email: '',
        phone: '',
        query: ''
    });


    const handleChange = (e, fieldname) =>{

        setContactData({...contactData, [fieldname] : e.target.value});

    }


    const postForm = async () => {

        const response = await postContactUs(contactData);

        if( response.data == "Successfully submitted"){
            alert("successfully submitted contact form")
        }else {
            alert("Something went wrong")
        }
    }
    
    const handleSubmit = (e) =>{
        
        e.preventDefault();
        postForm();
    }
   

    return (
        <>
            <form onSubmit={handleSubmit} id="cform">
                <label for="name">Name</label>
                <input type="text" id="formname" name="name" placeholder="Your name.." required onChange={(e) => handleChange(e, 'name')}/>

                <label for="email">Email</label>
                <input type="email" id="formemail" name="email" placeholder="Your email.." required onChange={(e) => handleChange(e, 'email')}/>

                <label for="phone">Phone Number</label>
                <input type="tel" id="formphone" name="phone" placeholder="Your phone number.." required onChange={(e) => handleChange(e, 'phone')}/>

                <label for="query">Query</label>
                <textarea id="query" name="formquery" placeholder="Your query.." required onChange={(e) => handleChange(e, 'query')}></textarea >

                <input type="submit" value="Submit" />
            </form>

        </>

    )
}

export default ContactUs