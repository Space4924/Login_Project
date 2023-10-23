import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import './App.css'


const AddProducts = () => {
 
    const Navigate=useNavigate();

    const [items,setItems]=useState("");
    const [brand,setBrand]=useState("");
    const [category,setCategory]=useState("");
    const [email,setEmail]=useState("");

    const Function=async()=>{
         let data=await fetch('http://localhost:5000/add_product',{
            method:'post',
            body:JSON.stringify({items,brand,category,email}),
            headers:{
                'Content-Type':'application/json'
            }
         });
         data=await data.json();
         console.log(data);
         localStorage.setItem('user',JSON.stringify(data));
         if(data)Navigate('/products')

    }

  return (
     <div className="clone mt-20">
            <div className="lg:w-full md:w-full bg-gray-100 rounded-lg p-8 flex flex-col  ">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add_Products</h2>
                <div className="relative mb-4">
                    <label for="full-name" className="leading-7 text-sm text-gray-600">Items</label>
                    <input type="text" onChange={(e)=>{setItems(e.target.value)}} id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label for="full-name" className="leading-7 text-sm text-gray-600">Brand</label>
                    <input type="text" onChange={(e)=>{setBrand(e.target.value)}} id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                    <div className="relative mb-4 " >
                        <label for="full-name" className="leading-7 text-sm text-gray-600">Category</label>
                        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-black-900 focus:ring-2 focus:ring-black-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                  
                <div className="relative mb-8 ">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" className="w-full bg-white rounded border border-gray-300 focus:border-black-500 focus:ring-2 focus:ring-black-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={()=>{Function()}} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Add Products</button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>

  )
}

export default AddProducts