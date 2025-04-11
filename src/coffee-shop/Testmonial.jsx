import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import sharmila from '../assets/sharmila.jpg';
import J from '../assets/56.jpg';
import Mahe from '../assets/b.jpg';
import o from '../assets/114.jpg';

const TestimonialData = [
  {
    id: 1,
    name: 'Sharmila',
    text: 'Strongly recommended if you are a true coffee lover. Best in quality as well as.',
    img: sharmila,
  },
  {
    id: 3,
    name: 'Silviya',
    text: 'The taste was not great. Have been a consumer of Davidoff Espresso',
    img: J,
  },
  {
    id: 4,
    name: 'Amirtha',
    text: 'The fresh taste, aroma and effect- all combined make this coffee exciting.',
    img: o,
  },
  {
    id: 5,
    name: 'Vignesh',
    text: 'Repeat order - great quality and I absolutely love it. The taste was not great.',
    img: Mahe,
  },
];

const Testmonial = () => {
  const [autoplaySpeed, setAutoplaySpeed] = useState(2000); 

  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setAutoplaySpeed(3000); 
      } else {
        setAutoplaySpeed(2000); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed, 
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section */}
        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Testmonials</h1>
        </div>

        {/* Testimonial Cards Section */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-1 rounded-xl bg-primary/40 relative">
                  {/* Image Section */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 mx-auto"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-800">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/60 font-cursive">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
