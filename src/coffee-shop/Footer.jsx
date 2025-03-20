import React from 'react'
// import {FaFacebook,FaInstagram,Falinkedin} from'react-icons/fa6'

import FooterBg from'../assets/img12.jpg'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';


const Footerlinks = [
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`, 
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Footer =() =>{
  return (
    <div style={bgImage} className='text-white'>
        <div className='bg-black/40 min-h-[400px]'>
        <div className='container grid md:grid-cols-3 pb-20 pt-5'>
             {/* company details */}
             <div className='py-8 px-4'>
             <a href="#" className='font-semibold tracking-widset  text-2xl sm:text-3xl font-cursive'>
                {""}
                
                Coffee Cafe</a>
               <p className='pt-4'> 
                {""}

                Crafted Coffee, Cozy vibes,Unforgettable Moments your perfect Espresso Escape
               </p>
               


             </div>

             {/* footer links */}
             <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>

                {/* first col links */}
                <div className='py-8 px-4'>
                 <h1 className='text-xl font-semibold sm:text-left mb-3'>
                    Footer links</h1>
                 <ul className='space-y-4'>
                  {
                    Footerlinks.map((data,index)=>(
                        <li key={index}>

                      <a href={data.link}
                      className='inline-block hover:scale-105 duration-200'
                      
                      >{data.title}</a>

                        </li>
                    ))
                  }

                 </ul>
                </div>
         {/* second col section */}


<div className='py-8 px-4'>
                 <h1 className='text-xl font-semibold sm:text-left mb-3'>
                    Quick links</h1>
                 <ul className='space-y-4'>
                  {
                    Footerlinks.map((data,index)=>(
                        <li key={index}>

                      <a href={data.link}
                      className='inline-block hover:scale-105 duration-250'
                      
                      >{data.title}</a>

                        </li>
                    ))
                  }

                 </ul>
                </div>

                {/* company address section */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
               <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
               <div>
                <p className='mb-3'>Coimbatore,India</p>
                <p>+1234567890</p>
               {/* social links */}
               <div className='Space-x-3 mt-6'>
              <a href ="#">
                <FaFacebook  className=' text-3xl inline-block hover:scale-105 duration-200' />
              </a>

              <a href ="#">
                <FaLinkedin  className=' text-3xl inline-block hover:scale-105 duration-200' />
              </a>

              <a href ="#">
                <FaInstagram  className=' text-3xl inline-block hover:scale-105 duration-200' />
              </a>

               </div>



               </div>


                </div>

             </div>
             
        </div>
        
        </div>
      
    </div>
  )
}


export  default Footer;







