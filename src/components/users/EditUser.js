import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"

const EditUser = () => {
    let history = useHistory()
    const { id } = useParams()
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const { username, email, phone } = user
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadUser()
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`, user)
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className="conatiner">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Edit Employee</h1>
                <form onSubmit={e => onSubmit(e)}>


                    <div className="form-group">
                        <label for="exampleInputPassword1">Enter Employee Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}

                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}

                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input type="phone"
                            className="form-control"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}

                        />
                    </div>

                    <button type="submit" className="btn btn-warning">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
