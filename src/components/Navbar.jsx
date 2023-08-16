import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../style';

import {navLinks}  from '../constants';
import {logo,menu,close,customlogo,contactpng} from '../assets';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const Navbar = () => {

  const [active,setActive] = useState('');
  const [toggle,setToggle] = useState(false)

  return (
   <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
         <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
         <div>
          <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive('');
        window.scrollTo(0,0)}}>

          <img src= {customlogo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Birendra &nbsp;<span className='sm:block hidden'>| Software Developer</span></p>
        </Link>
        <div className={`${styles.paddingTopOnly}`}>
        <p className='text-white text-[15px]  flex'><img  src='data:image/png;base64,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'//src={contactpng}
            alt="contact"
            className=' rounded-full text-white w-[20px] h-[20px] object-contain cursor-pointer' /> &nbsp;<span className='sm:block'>7477800305 | jhabirendra447@gmail.com</span></p>
        </div>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key ={link.id} className={`${active=== link.title ? 'text-white' :'text-secondary'} 
             hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=> setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
              <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link)=>(
            <li key ={link.id} className={`${active=== link.title ? 'text-white' :'text-secondary'} 
             font-poppins font-medium cursor-pointer text-[16px]`} onClick={()=> {setActive(link.title); setToggle(!toggle)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

                
              </div>
          </div>
         </div>
   </nav>
  )
}

export default Navbar