import React from 'react'
import { useState } from 'react';
import './App.css';
import {useNavigate } from 'react-router-dom';
const LogIn = () => {
    const Navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Function = async () => {
        let data = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
         data=await data.json();
        console.log(data,"data get by front-end");
        localStorage.setItem('user',JSON.stringify(data));
        Navigate('/');
    }

   

    return (
        <div className='lgin flex flex-wrap m-16'>
            <div className="Login m-3 mb-6 " style={{ flex: "48%" }}>
                <div className="lg:w-full md:w-full bg-gray-100 rounded-lg p-8 pb-12 flex flex-col">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">LogIn</h2>
                    <div className="relative mb-4">
                        <label for="e-mail" className="leading-7 text-sm text-gray-600">E-Mail</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} id="full-name" name="full-name" 
                        className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-12">
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} id="full-name" name="full-name" 
                        className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button onClick={()=>Function()} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">LogIn</button>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
            <div className="Login m-3" style={{ flex: "48%" }}>
                <iframe width="100%" height="100%" frameborder="0" marginheight="0" title="map" src="https://maps.google.com/maps?width=100%&amp;height=50&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;iwloc=B&amp;output=embed"
                    style={{ opacity: 0.5, borderRadius: "12px", border: '1px solid black' }}></iframe>
            </div>

        </div>

    )
}

export default LogIn




