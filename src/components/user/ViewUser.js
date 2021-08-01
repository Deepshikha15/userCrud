import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {Link} from 'react-router-dom'


const ViewUser = () => {
    const [user,setUser]=useState({
        name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
    })

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () =>{
        const res = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data)
    }
    return (
        <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><b>name:</b> {user.name}</li>
        <li className="list-group-item"><b>user name:</b> {user.username}</li>
        <li className="list-group-item"><b>email:</b> {user.email}</li>
        <li className="list-group-item"><b>phone: </b>{user.phone}</li>
        <li className="list-group-item"><b>website:</b> {user.website}</li>
      </ul>
    </div>
    )
}
export default ViewUser;
