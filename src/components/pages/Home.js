import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
const Home = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUser(result.data.reverse())
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUsers()
    }
    return (
        <div className="container">
            <div className="py-4">
                <span>By:Rakesh Kumar Singh</span> <br />
                <span>Email:srakeshkumar1019@gmail.com</span>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>Delete</Link>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
