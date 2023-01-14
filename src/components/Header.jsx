import React from 'react'
import Logo from '../img/logo.png'
import Avatar from "../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config'
const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider =  new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth,provider)
    console.log(response);

  }
  return (
    <header className="fixed z-50 w-screen px-16 py-6">
      {/* menu options for mobile and for desktop */}

      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full justify-between ">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center justify-between gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center -right-2 -top-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          {/* user avatar */}
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="cursor-pointer w-8 min-w-[32px] h-8 rounded-full min-h-[32px] drop-shadow-xl"
              alt="user profile"
              onClick={login}
            />
          </div>
        </div>
      </div>
      {/* mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header