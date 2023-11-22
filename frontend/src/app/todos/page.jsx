'use client'
import React from 'react';
import Todos from "@/app/components/todos";
import Navbar from "@/app/components/navbar";




const Page = () => {
    return (
        <div className='todos-container'>
            <Navbar/>
            <Todos/>
        </div>
    );
};

export default Page;