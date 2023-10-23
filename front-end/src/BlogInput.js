import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogInput = () => {

    const Navigate = useNavigate();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [content, setContent] = useState();

    const submitImage = async (e) => {
        e.preventDefault();
        console.log('submitted');
        const formData = new FormData();
        formData.append('photo', image);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('content', content);
        console.log(formData);
        await axios.post('http://localhost:5000/card', formData, {
            headers: { "Content-Type": 'multipart/form-data' }
        }).then(res => console.log(res)).catch(err => console.log(err));
        // ShowDB();
        Navigate('/card');
    }
    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Post Your Blog Here</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 px-5  mx-auto  ">
                        <div class="flex flex-wrap  ">
                            <form onSubmit={(e) => submitImage(e)} action="">
                            <div className='flex flex-wrap ' >
                                <div class="p-2 w-1/2 md:w-1/2 sm:w-full">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" onChange={(e) => setName(e.target.value)} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2 md:w-1/2 sm:w-full">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Upload Your Blog Photo</label>
                                        <input type="file" accept='image/*' onChange={(e) => setImage(e.target.files[0])} style={{ fontSize: "14px" }} id="file" name="file" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="message" class="leading-7 text-sm text-gray-600">Blog Content</label>
                                        <textarea id="message" name="message" onChange={(e) => setContent(e.target.value)} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button type='submit' class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogInput