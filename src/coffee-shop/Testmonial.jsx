import React from 'react';
import Slider from'react-slick';
import sharmila from '../assets/sharmila.jpg';
import Dhanu from '../assets/Dhanu.jpeg';
import J from '../assets/j.jpeg';
import Mahe from '../assets/Mahe.jpeg';
import o from '../assets/o.jpeg';



const TestimonialData =[
    {
     id:1,
     name:"sharmila",
     text:"Strongly recommended if you are a true coffee lover. Best in quality as well as delivery",
     img:sharmila,

    },

    {
        id:2,
        name:"Dhanu Sri",
        text:"Perfectly balanced blend, superb after taste. Keeps me going !",
        img:Dhanu,
   
       },
       {
        id:3,
        name:"Prasanth",
        text:"The taste was not great. Have been a consumer of Davidoff Espresso since many years",
        
        img:J,
   
       },
       {
        id:4,
        name:"Amirtha varshni",
        text:"The fresh taste, aroma and effect- all combined make this coffee exciting",
        img:o,
   
       },
       {
        id:5,
        name:"Mahendren",
        text:"Repeat order - great quality and I absolutely love it.The taste was not great ",
        img:Mahe,
   
       },
]




const Testmonial =()  =>{
   const settings = {
       dots: true,
       arrows:false,
       infinite:true,
       speed:500,
       slidesToScroll:1,
       autoplay:true,
       autoplaySpeed:2000,
       cssEase:"linear",
       pauseOnHover:true,
       pauseOnFocus:true,
       responsive:[
{
  breakpoint:10000,
  settings:{
    slidesToShow:3,
    slidesToScroll:1,
    infinite:true,
  }
},
{
  breakpoint:1024,
  settings:{
    slidesToShow:2,
    slidesToScroll:1,
    initialSlide:2,
  }
},
{
  breakpoint:640,
  settings:{
    slidesToShow:3,
    slidesToScroll:1,
    
  }
}



       ]


   }


  return (
    <div className='py-14 mb-10'>
      <div className='container'>
        {/* header section */}
        <div data-aos="fade-up"
        
        className='text-center mb-10'>
        <h1 className='text-4xl font-bold font-cursive text-gray-800'>Testmonials</h1>
      </div>
      {/* Testmonial cards section */}
      <div data-aos="zoom-in">
        <Slider {...settings}>
            {
                TestimonialData.map((data,index)=>{
                    return(
                        <div className='my-6' key={data.id}>
                         <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/30 relative'>
                            {/* image-section */}

                       <div className='mb-4'>
                       <img src={data.img} alt="" 
                       
                       className='rounded-full  w-20 h-20'/>
                      </div>
                      {/* content section */}
                      <div className='flex flex-col items-center gap-4'>
                        <div className='space-y-3'>
                          <p className='text-xs text-gray-500'>{data.text}</p>
                          <h1 className='text-xl font-bold text-black/60 font-cursive'>{data.name}</h1>
                        </div>
                      </div>
                       <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                         </div>
                        </div>
                    )
                })
            }
        </Slider>
      </div>


      </div>
    </div>
  )
}
export default Testmonial;