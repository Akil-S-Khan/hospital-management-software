import React from 'react'
import SideNav from './SideNav'
import Header from './Header'

const Layout = ({children , pageTitle}) => {
  return (
    <div className='d-flex'style={{width:"100%", height:"90%"}}>
      <div style={{width:"15%"}}>
        <SideNav/>
      </div>
      <div className='bg-color ' style={{width:"85%"}}>
        <Header title={pageTitle} />

        <div className='bg-color ' style={{height:"88%"}}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout