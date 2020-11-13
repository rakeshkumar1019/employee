import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

const AddUser = () => {
    let history = useHistory()
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const { username, email, phone } = user
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3001/users", user)
        history.push("/")
    }
    return (
        <div className="conatiner">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Add a Employee</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
