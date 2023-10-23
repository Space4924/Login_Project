import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [clue, setClue] = useState([]);
    const clone = async () => {
        let data = await fetch('http://localhost:5000/products');
        data = await data.json();
        setClue(data);
    };
    const Delete=async(ID)=>{
        alert('Want to date the product from list');
        await fetch(`http://localhost:5000/delete/${ID}`,{
        method:'delete'});
        // alert(`${data}`+"product is deleted")
        clone();
    }
    useEffect(() => {
        clone();
    }, [])
    return (
        <div>
            <section class="text-gray-600 body-font mt-12">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Products</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">These Are the products that you have mentioned and want to purchase but this is not the time for buy these</p>
                    </div>
                    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Student ID</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Course</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Address</th>
                                    <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Update/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clue.map((pro) =>
                                    <tr key={pro._id}>
                                        <td class="px-4 py-3">{pro.items}</td>
                                        <td class="px-4 py-3">{pro.brand}</td>
                                        <td class="px-4 py-3">{pro.category}</td>
                                        <td class="px-4 py-3 text-lg text-gray-900">{pro.email}</td>
                                        <td class="w-10 text-center"><button onClick={()=>Delete(pro._id)}>delete</button>
                                        <button><Link to={'/update/'+pro._id}>Update</Link></button></td>
                                    </tr>
                                )
                                }



                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Products