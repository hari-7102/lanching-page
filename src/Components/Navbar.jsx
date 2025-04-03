import React, { useState, useEffect } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import { motion, AnimatePresence } from "framer-motion"; // Motion for animations

const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isOpen]);

  const navbar = [
    {name:'Home' , link:'/'},
    {name:'Feature' , link:'/features'},
    {name:'Community' , link:'/community'},
    {name:'Blog' , link:'/blog'},
    {name:'Contact us' , link:'/pricing'}

  ]



  
  return (
    
    <div className="px-5 py-3 shadow-md bg-white relative">
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/14102/14102925.png"
            alt="Logo"
            className="w-7 h-7"
          />
          <p className="text-2xl font-semibold">Nexcent</p>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8">
          {navbar.map((nav) =>(
            <p className={`hover:underline hover:underline-offset-6 ${
              location.pathname == nav.link ? 'bg-green-600 text-white px-3 py-1 rounded-3xl' : 'p-0.5'
            } `}><Link to={nav.link}>{nav.name}</Link></p>
            ))
          }
          {/* <p className="hover:underline"><Link to="/">Home</Link></p>
          <p className="hover:underline"><Link to="/features">Features</Link></p>
          <p className="hover:underline"><Link to="/community">Community</Link></p>
          <p className="hover:underline"><Link to="/blog">Blog</Link></p>
          <p className="hover:underline"><Link to="/pricing">Contact Us</Link></p> */}


          <button className="bg-green-600 text-white px-5 py-2 rounded-sm">
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar with Motion Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-14 left-0 w-full bg-gray-100 py-6 shadow-md flex flex-col items-center gap-4 md:hidden"
          >
            {navbar.map((nav)=>(
              <p className="hover:scale-105 duration-150"  ><Link to={nav.link} onClick={() => setIsOpen(false)}>{nav.name}</Link></p>
            ))
              
            }
            {/* <p className="hover:scale-105 duration-150" ><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></p>
            <p className="hover:scale-105 duration-150"  ><Link to="/features" onClick={() => setIsOpen(false)}>Features</Link></p>
            <p className="hover:scale-105 duration-150"  ><Link to="/community" onClick={() => setIsOpen(false)}>Community</Link></p>
            <p className="hover:scale-105 duration-150"  ><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></p>
            <p className="hover:scale-105 duration-150"  ><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></p> */}
            <button
              className="bg-green-600 text-white px-5 py-2 rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


