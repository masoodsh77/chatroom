import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, gender)
    }
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-wrap">
            <div>
                <h3 className="w-100 text-center">Rasmio Chat</h3>
                <h6 className="w-100 text-center">Welcome To Your Chat Room</h6>
                <form className="FormBorder" onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="Name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="Gender" class="form-label">Gender</label>
                        <select id="Gender" class="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success w-100">Login</button>
                </form>
            </div>
            <span className="w-100 fixed-bottom text-center">
                © 2019 - 2021 Rasmio - All Rights Reserved.
            </span>
        </div>
    )
}

export default Login
