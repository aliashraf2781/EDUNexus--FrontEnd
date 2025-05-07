import React from 'react'
import OrgSideBar from '../OrgSideBar/OrgSideBar'
import { Outlet } from 'react-router'

export default function OrganizationDashboard() {
  return (
    <div className='flex '>
        <div className='h-full bg-dark text-gray-100 sticky top-0 left-0 bottom-0 items-stretch'>
            <OrgSideBar />
        </div>
        <div className='grow-1 bg-gray-100 px-17 flex flex-col '>
            {/* <NavbarComponent/> */}
            <Outlet />
        </div>
    </div>
  )
}
