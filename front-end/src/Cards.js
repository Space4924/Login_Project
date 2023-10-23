import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {

    // const [image, setImage] = useState();
    const [pic, setPic] = useState();
    // const [name,setName]=useState();
    // const [email,setEmail]=useState();
    // const [content,setContent]=useState();

    const ShowDB = async () => {
        const result = await axios.get('http://localhost:5000/gallery');
        console.log(result.data);
        setPic(result.data);
    }

    useEffect(() => {
        ShowDB();
    }, [])
    return (
        <div>
            <section class="text-gray-600 body-font">
               
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Public Blogs</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Blogs who are accessible to all and if You want to write a blog then  <Link to='/blog' color='green'>Click here</Link></p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            pic && Array.isArray(pic) && pic.map(item => (
                                <div class="lg:w-1/3 sm:w-1/2 p-4">
                                    <div class="flex relative">
                                        <img alt="gallery" width='600' height='360' class="absolute inset-0 w-full h-full object-cover object-center" src={item.photo} />
                                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.email}</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                                            <p class="leading-relaxed">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>



            <tbody>
                {/* {clue.map((pro) =>
                    <tr key={pro._id}>
                        <td class="px-4 py-3">{pro.items}</td>
                        <td class="px-4 py-3">{pro.brand}</td>
                        <td class="px-4 py-3">{pro.category}</td>
                        <td class="px-4 py-3 text-lg text-gray-900">{pro.email}</td>
                        <td class="w-10 text-center"><button onClick={() => Delete(pro._id)}>delete</button>
                            <button><Link to={'/update/' + pro._id}>Update</Link></button></td>
                    </tr>
                )
                } */}



            </tbody>

        </div>
    )
}

export default Cards
