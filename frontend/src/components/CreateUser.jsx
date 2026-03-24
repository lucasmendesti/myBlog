import React from 'react'
import { createUser } from '../api'
import { useState } from 'react'

const CreateUser = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

async function handleSubmit(e){
    e.preventDefault()
    let response = await createUser(user)
    if (response.status != 200){
        alert("User accounut could not be created!")
    }
}

function handleChange(e){
    setUser({ ...user, [e.target.name]: e.target.value })
}


  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='Name' onChange={handleChange} name='name' required maxLength={20} />
        <input placeholder='Email' onChange={handleChange} name='email' required maxLength={40} />
        <input placeholder='Password' type='password' onChange={handleChange} name='password' required maxLength={20} />
        <button type='submit' >Create Account</button>
    </form>
  )
}

export default CreateUser