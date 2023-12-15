import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const HomePage = () => {
  return (
    <div style={{width:"100vw",height:"100vh",boxSizing:"border-box",backgroundColor:'#8d75e6'}}>
        <Navbar/>
        <Main/>
    </div>
  )
}

export default HomePage