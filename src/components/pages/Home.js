import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import {Link } from 'react-router-dom' 
import axios from 'axios'

const Home = () => {

    const [users,setUser]=useState([])

    useEffect(()=>{
        console.log("bdsk")
        loadUser();
    },[])

    const loadUser = async()=>{
        const result = await Axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUser();
    }
    return (
        <div className="container">
            <div className="py-4">
                Home Page
            </div>

            <table class="table border shadow">
            <thead class="thead-dark">
                <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-3" to={`/users/${user.id}`}>
                      view
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-3"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
            </tbody>
            </table>
            
        </div>
    )
}
export default Home;