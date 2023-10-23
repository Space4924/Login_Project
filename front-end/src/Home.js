import React from 'react'
import { useState,useEffect } from 'react'

const Home = () => {
  const [name,setName]=useState("");
  const [college,setCollege]=useState("");
  const [email,setEmail]=useState("");
  const [image,setImage]=useState();
  // const [password,setPassword]=useState("");

  
  
  const Cloud=()=>{
    let data=localStorage.getItem('user');
    // console.log(JSON.parse(data).data.data.name,"JSON.parse vala data hai ye");
    setName(JSON.parse(data).data.name);
    setCollege(JSON.parse(data).data.college);
    setEmail(JSON.parse(data).data.email);
    // setPassword(JSON.parse(data).data.password);
    setImage(JSON.parse(data).data.photo);
  }
  // const Clopse=async()=>{
  //   let data=await fetch('http://localhost:5000/home',
  //   {
  //     method:'post',
  //     body:JSON.stringify({email,name,password}),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   });
  //   data=await data.json();
  //   setImage(data.photo);
  // }
 useEffect(()=>{
  //  Clopse();/
  Cloud();
 },[])
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">FULL NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
            <p className="leading-relaxed mb-4">It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can
             find the humor in our everyday lives. And sometimes it can be a lifesaver." – Betty White austin listicle pour-over, neutra jean.</p>
             <p >"Positive anything is better than negative nothing." – Elbert Hubbard</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">College</span>
              <span className="ml-auto text-gray-900">{college}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">E-mail</span>
              <span className="ml-auto text-gray-900">{email}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Nationality</span>
              <span className="ml-auto text-gray-900">Indian</span>
            </div>
          </div>
          
         
          <img alt="pic" src={image}    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
        </div>
      </div>
    </section>
  )
}

export default Home