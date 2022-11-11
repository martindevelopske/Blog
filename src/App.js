import React from 'react'
import {GoogleOAuthProvider} from '@react-oauth/google'
import HomePage from './components/HomePage'
import './styling/app.css'
import Navbar from './components/Navbar'
import Blogs from './components/Blogs'
import { useSelector } from 'react-redux'
import { selectSignedIn } from './features/userSlice'

function App() {
  const isSignedin=useSelector(selectSignedIn);
  return (
    <>
    <GoogleOAuthProvider clientId='258076002025-5r1tuineiq2nqdjauuu8o01vgv732huu.apps.googleusercontent.com'>
    <Navbar />
    <HomePage />
    {isSignedin && <Blogs />}
    </GoogleOAuthProvider>
    
    </>
  )
}

export default App