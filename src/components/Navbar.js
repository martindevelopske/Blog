import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setSearchInput, setSignedin, setUserData } from '../features/userSlice'
import {Avatar} from '@mui/material'
import {googleLogout} from '@react-oauth/google'
import '../styling/navbar.css'

function Navbar() {
  const dispatch=useDispatch();
    const signedIn=useSelector(selectSignedIn);
    const [value,setValue]=useState("tech")
    const userData=useSelector(selectUserData)
    //logout
    const logout=()=>{
      googleLogout()
      dispatch(setSignedin(false))
      dispatch(setUserData(null));
      console.log("logged out");
    }
    const handleClick=()=>{
      console.log('searched');
      dispatch(setSearchInput(value))
    }
  return (
    <div className='navbar'>
        <h1 className="navbar__header" >
            Blog by Matteo
        </h1>
        {signedIn && (<div className='blog__search'>
          <input className='search' placeholder='search for a blog'
          value={value}
          onChange={(e)=>setValue(e.target.value)}></input>
          <button className='submit' onClick={handleClick}> Search</button>
        </div>) }
        {
          signedIn ? <div className='navbar__user__data'>
          <Avatar src={userData?.picture} alt={userData?.name} className="user"/>
          <h1 className='signedIn'>{userData?.given_name}</h1>
          <button onClick={logout}>Logout</button>
          </div> : <h4>User not available 😞 </h4>
}
    </div>
  )
}

export default Navbar
//a2819074f5390f5f39ed76b10780aa39