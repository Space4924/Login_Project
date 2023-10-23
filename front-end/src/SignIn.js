import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
const SignIn = () => {

    const Navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [pic, setPic] = useState("");
    const [password, setPassword] = useState("");


    const Functionxyz = async () => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
            const uploads_url = 'http://localhost:5000/insert';
            let formData = new FormData();     
            formData.append("photo",pic);
            formData.append("email", email);
            formData.append('name', name);
            formData.append("password", password);
            formData.append("college",college);
            console.log(formData);
            await axios.post(uploads_url, formData , config).then((res)=>{
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                Navigate('/');
             }).catch((err)=>console.log(err,"clone sahab ke record"));
         

    }

    return (

        <div className="center mt-20">
            <div class="lg:w-full md:w-full bg-gray-100 rounded-lg p-8 flex flex-col  ">
                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
                <div class="relative mb-4 ">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" value={email} id="email" required onChange={(e) => setEmail(e.target.value)} name="email" class="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" value={name} id="full-name" required name="full-name" onChange={(e) => setName(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">College</label>
                    <input type="text" value={college} id="full-name"  name="full-name" onChange={(e) => setCollege(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="relative mb-4 ">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Upload Your Photo</label>
                    <input type="file" enctype="multipart/form-data"   id="full-name" accept="image/*" onChange={(e) => setPic(e.target.files[0])} style={{ fontSize: "14px" }} name="photo" class="w-full bg-red rounded border border-gray-300 focus:border-black-900 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div class="flex flex-wrap mb-8">
                    <div class="relative w-1/2 " >
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="text" id="full-name" required value={password} onChange={(e) => setPassword(e.target.value)} name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-black-900 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative w-1/2 pl-2">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Confirm Password</label>
                        <input type="text" id="full-name"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-black-900 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => Functionxyz()}>SignIn</button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>

    )
}

export default SignIn




