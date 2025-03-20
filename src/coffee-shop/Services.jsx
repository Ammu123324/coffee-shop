import React from 'react'
import Img17 from'../assets/img17.png'
import Img16 from'../assets/img16.png'
import Img14 from'../assets/img14.png'

const ServicesData =[
  {
    id:1,
    img:Img17,
    name:"Espresso",
    description:" A concentrated coffee made by forcing hot water through finely-ground coffee ",
    aosDelay:"100",
  },

  {id:2,
  img:Img16,
  name:"Black Coffee",
  description:"  Pure coffee with no added milk, sugar, or other ingredients" ,
  aosDelay:"100",
},

  {id:3,
 img:Img14,
 name:"Drip Coffee",
 description:" Also known as batch brew, this coffee is made by pouring hot water over medium-fine ground coffee  ",
 aosDelay:"100",
},

];



 const Services = () => {
  return (
    <>
    <span id="Services"></span>
    <div className='py-10'>
    <div className='container'>
      {/* header title */}
      <div data-aos="fade-up"
      
      className='text-center mb-20'>
        <h1 className='text-4xl font-bold font-cursive text-gray-800'>Best Coffee for you</h1>
      </div>
     {/* services card section */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
  {
    ServicesData.map((data,index)=>{
      return(
        <div
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        key={index}
        className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200
        max-w-[300px] group relative'
        
        >
          <div className=' h-[122px]'>
            <img src={data.img} alt = ""
            className='max-w-[200px] block mx-auto
            transform -translate-y-14 
            group-hover:scale-110
             group-hover:rotate-6 duration-300'
             />
            </div>
              {/* Text content */}
              <div className='p-4 text-center'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300
                text-sm line-clamp-2'>{data.description}</p>
              </div>

            </div>
      )

    })
  }
  <div >

  </div>
</div>

    </div>
      
    </div>
    </>
  )
}

export default Services;
