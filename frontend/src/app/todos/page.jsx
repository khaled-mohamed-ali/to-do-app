import React from 'react';
import Todos from "@/app/components/todos";
import Navbar from "@/app/components/navbar";


const Page = () => {
    return (
        <div>
            <Navbar/>
            <Todos/>
        </div>
    );
};

export default Page;