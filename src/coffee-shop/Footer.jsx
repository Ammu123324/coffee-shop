import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import FooterBg from '../assets/302.jpg';

const Footerlinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services",
    link: "#Services", // This points to the correct Services section
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
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Coffee Cafe
            </a>
            <p className="pt-4">
              Crafted Coffee, Cozy vibes, Unforgettable Moments — your perfect Espresso Escape.
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First column links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Footer links</h1>
              <ul className="space-y-4">
                {Footerlinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="inline-block hover:scale-105 duration-200">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second column links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Quick links</h1>
              <ul className="space-y-4">
                {Footerlinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="inline-block hover:scale-105 duration-250">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company address and social icons */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
              <div>
                <p className="mb-4">Coimbatore, India</p>
                <p>+1234567890</p>
                {/* Social Links */}
                <div className="space-x-3 mt-5">
                  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl inline-block hover:scale-105 duration-200" />
                  </a>
                  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl inline-block hover:scale-105 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
