import React from 'react'
import { Outlet } from "react-router";
import Dashboard from './../InstructorDashbord/Dashboard/Dashboard';
import SideMenuComponent from './../InstructorDashbord/SideMenuComponent/SideMenuComponent';
import NavbarComponent from './../InstructorDashbord/NavbarComponent/NavbarComponent';

export default function DashboardLayout() {
  return (
    <div className='flex '>
        <div className='h-full bg-dark text-gray-100 sticky top-0 left-0 bottom-0 items-stretch'>
            <SideMenuComponent />
        </div>
        <div className='grow-1 bg-gray-100 px-17 flex flex-col '>
            <NavbarComponent/>
            <Outlet />
        </div>
    </div>
  )
}
