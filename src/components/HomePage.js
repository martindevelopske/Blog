import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {GoogleLogin} from '@react-oauth/google'
import {selectSignedIn, setSignedin, setUserData} 
from '../features/userSlice'
import jwt_decode from 'jwt-decode'
import '../styling/home.css'


function HomePage() {
    const dispatch=useDispatch();
    //login function-returns jwt token.
    const login=(response)=>{
        console.log(response.credential);
        console.log("signed in as user");
        let decoded= jwt_decode(response.credential)
        console.log(decoded);
        dispatch(setSignedin(true));
        dispatch(setUserData({decoded}))
    }

    //check signed in
    const signedIn= useSelector(selectSignedIn)
    console.log(signedIn);
  return (
    <div className='home__page' style={{display: signedIn? "none": "block"}}>
       {!signedIn && 
       <div className='login__message'>
            
        <h2>A reader's favourite place.</h2>
        <p> we provide high quality online resource for reading blogs. Just sign up an start reading some quality blogs.</p>
        
        <GoogleLogin
        onSuccess={login}
        onError={()=>{
            console.log('login failed')
        }}>
        </GoogleLogin>

        </div>
        
       }
       
       
    </div>
  )
}

export default HomePage