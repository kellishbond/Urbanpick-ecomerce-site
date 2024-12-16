import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const { SetShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

  // Logic to log the user out and trigger redirection
  const logout = () => {
    console.log('Logout triggered');
    
    // 1. Remove token from localStorage (user is no longer authenticated)
    localStorage.removeItem('token');
    
    // 2. Clear the token in the context (updates global state)
    setToken('');
    
    // 3. Clear the cart items (in case the user had items in the cart)
    setCartItems({});
    
    // 4. Redirect to login page after logout
    navigate('/login'); // Using `navigate` here for redirection
  };

  const handleProfileClick = () => {
    if (!token) {
      navigate('/login'); // Navigate to login if not logged in
    }
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logoo} className="w-36" alt="Urban Pick Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['/', '/collection', '/about', '/contact'].map((path, index) => (
          <NavLink key={index} to={path} className="flex flex-col items-center gap-1">
            <p>{path === '/' ? 'HOME' : path.slice(1).toUpperCase()}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right-side icons */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => SetShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            onClick={handleProfileClick} // Navigate to login if no token
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
                <p className="cursor-pointer hover:text-black">My profile</p>
                <Link to="/orders" className="hover:text-black">
                  <p>Orders</p>
                </Link>
                <Link to="/login" onClick={logout} className="cursor-pointer hover:text-black">
                  <p>Logout</p>
                </Link> {/* Link to login with logout trigger */}
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 min-w-5 cursor-pointer"
            alt="Cart Icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar Menu for Smaller Screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Close Menu"
            />
            <p>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={path}
            >
              {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
