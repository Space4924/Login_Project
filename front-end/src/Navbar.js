import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {

  const auth = localStorage.getItem('user');

  const Navigate = useNavigate();
  const Function = () => {
    localStorage.clear();
    Navigate('/login')
  }
  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) Navigate('/');
  }, []);

  return (
    <div className='nav'>
      <header class="text-black-1500 bg-gray-100 body-font">
        <div class="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
          {auth ?
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <div class="mr-10 hover:text-red-900"><Link to="/">Profile</Link></div>
              <div class="mr-10 hover:text-red-900"><Link to="/products">products</Link></div>
              <div class="mr-10 hover:text-red-900"><Link to="/add_Product">Add_product</Link></div>
              <div class="mr-10 hover:text-red-900"><Link to="/card">Blogs</Link></div>
              <div class="mr-10 hover:text-red-900"><Link to="/blog">Write Your <br /> Blog here</Link></div>
              <div class="mr-10 hover:text-red-900"><button onClick={() => Function()}>LogOut</button></div>

            

            </nav>
            :
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <div class="mr-10 hover:text-red-900"><Link to="/login"> LongIn</Link></div>
              <div class="mr-10 hover:text-red-900"><Link to="/signin"> SignIn</Link></div>
            </nav>
          }
        </div>
      </header>
    </div>
  )
}

export default Navbar