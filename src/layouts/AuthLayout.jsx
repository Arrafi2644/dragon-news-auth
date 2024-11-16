import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className='w-11/12 mx-auto py-3 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default AuthLayout;