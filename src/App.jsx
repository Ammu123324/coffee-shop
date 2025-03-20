import React,{useEffect} from 'react';
import AOS from"aos" ;
import"aos/dist/aos.css" ;
import Navbar from './coffee-shop/Navbar';
import Home from './coffee-shop/Home';
import Services from'./coffee-shop/Services';
import Banner from'./coffee-shop/Banner';
import AppStore from'./coffee-shop/AppStore';
import Testimonial from'./coffee-shop/Testmonial';
import Footer from'./coffee-shop/Footer';




function App  () {
  useEffect(()=>{
     AOS.init(
      {
        offset:100,
        duration:700,
        easing:"ease-in",
        delay:100

      });

  });                           

  return <div className="overflow-x-hidden">
    <Navbar />
    <Home />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    <Footer />
   </div>
  
      
  
}

export default App;
