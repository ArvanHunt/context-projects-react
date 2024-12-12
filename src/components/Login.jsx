import React, {useContext} from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'



function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div>
        <h2 className='text-7xl m-9 p-6 text-green-600 font-mono'>Login Interface using context</h2>
        <input className='p-5 m-5' type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input className='p-5 m-5' type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button className='border-2 border-green-600 p-5 m-5 text-green-600' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login







