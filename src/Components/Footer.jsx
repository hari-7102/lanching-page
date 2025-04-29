import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { TbBrandInstagram } from "react-icons/tb";

import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const navigate = useNavigate()
  const footer = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Community", link: "/community" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/pricing" },
  ];

const link = [
  {icon : TbBrandInstagram },
  {icon : FaTwitter },
  {icon : FaYoutube },
  {icon : FaWhatsapp }

]

 const support = [
  {name:'Help Center'},
  {name:'Term of Service'},
  {name:'Legal'},
  {name:'Privacy Policy'},
  {name:'Status'},
 ]
  return (
    <div>
      <div className="flex w-full bg-gray-800 lg:px-28 px-12 py-14 gap-5 lg:flex-nowrap flex-wrap">
        <div className="flex flex-col lg:items-start items-center w-full lg:w-1/3">
          <div className="flex items-center gap-2 py-4  cursor-pointer "  onClick={() => navigate('/')}  >
            <img
              src="https://cdn-icons-png.flaticon.com/128/14102/14102925.png"
              alt="Nexcent Logo"
              className="w-9 h-9 cursor-pointer" 
            />

            <p className="text-2xl sm:text-3xl text-white font-semibold">
              Nexcent
            </p>
          </div>

          <p className="text-gray-400 text-sm text-start sm:text-base">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-gray-400 text-sm  text-start sm:text-base">
            All rights reserved
          </p>

          <div className="my-6 flex items-center gap-3">
            {link.map((lin, index) =>(
                <div  
                key={index}
                className="border cursor-pointer border-gray-700 bg-gray-700  text-white p-1 rounded-2xl hover:rotate-12 duration-300"
                >
                  <lin.icon size={22}/>

                </div>
            ))}
            {/* <TbBrandInstagram
              size={28}
              className="border cursor-pointer border-gray-700 bg-gray-700  text-white p-1 rounded-2xl hover:rotate-12 duration-300"
            />
            <FaTwitter
              size={28}
              className="border cursor-pointer border-gray-700 bg-gray-700  text-white p-1 rounded-2xl hover:rotate-12 duration-300 "
            />
            <FaYoutube
              size={28}
              className="border cursor-pointer border-gray-700 bg-gray-700  text-white p-1 rounded-2xl hover:rotate-12 duration-300 "
            />
            <FaWhatsapp
              size={28}
              className="border cursor-pointer border-gray-700 bg-gray-700  text-white p-1 rounded-2xl hover:rotate-12 duration-300 "
            /> */}
          </div>
        </div>

        <div
          className="lg:w-2/3 w-full  justify-center items-center 
         text-center gap-24 lg:flex mg:flex-col mg:items-center"
        >
          <div className="flex flex-col lg:items-start justify-center gap-3 text-white  my-7  items-center ">
            <p className="text-xl ">Company</p>
            {footer.map((nav , index) =>(
                          <a href={nav.link} className="text-gray-400 text-start hover:text-white hover:scale-105 duration-150">
                              {nav.name}
                          </a>
            ))}
            {/* <p className="text-gray-400 text-start ">
              <Link to="/">Home</Link>
            </p>
            <p className="text-gray-400 text-start ">
              <Link to="/features">Features</Link>
            </p>
            <p className="text-gray-400 text-start ">
              <Link to="/community">Community</Link>
            </p>
            <p className="text-gray-400 text-start ">
              <Link to="/blog">Blog</Link>
            </p>
            <p className="text-gray-400 text-start ">
              <Link to="/pricing">Contact Us</Link>
            </p> */}
          </div>

          <div className="flex flex-col lg:items-start justify-center gap-3 text-white items-center my-7 ">
            <p className="text-xl ">Support</p>
            {support.map((word) =>(
              <p className="text-gray-400 text-start ">{word.name}</p>
            ))}
            {/* <p className="text-gray-400 text-start ">Help Center</p>
            <p className="text-gray-400 text-start ">Term of Service</p>
            <p className="text-gray-400 text-start ">Legal</p>
            <p className="text-gray-400 text-start ">Privacy Policy</p>
            <p className="text-gray-400 text-start ">Status</p> */}
          </div>

          <div className="flex flex-col lg:items-start gap-3 text-white my-7 items-center ">
            <p className="text-xl ">Stay Up To date</p>
            <input
              type="email"
              placeholder="Your's Email address"
              name=""
              id=""
              className="bg-gray-600 px-2 pe-7 py-1 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
