import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const nav = useNavigate();

  // Load user from sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    setUser(null);
    nav("/auth");
  };

  return (
    <nav className="w-full bg-white text-gray-900 shadow-md py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold text-gray-900">
          Raynott Fintech
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/services" className="hover:text-green-600 transition">Services</Link>
          <Link to="/about" className="hover:text-green-600 transition">About</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
        </ul>

        {/* --- RIGHT SIDE BUTTONS --- */}
        <div className="hidden md:flex items-center gap-4">

          {/* If user logged in → Show Username */}
          {user ? (
            <>
              <span className="font-semibold text-gray-800">
                👋 {user.username}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-200 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="bg-green-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </Link>
          )}

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* -------- MOBILE MENU -------- */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-lg p-4 shadow border border-gray-200">
          <ul className="flex flex-col gap-4 text-center font-medium">

            <Link to="/" className="hover:text-green-600 transition" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-green-600 transition" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/about" className="hover:text-green-600 transition" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-green-600 transition" onClick={() => setOpen(false)}>Contact</Link>

            {/* Login / Username & Logout on mobile */}
            {user ? (
              <>
                <span className="text-gray-900 font-semibold">
                  👋 {user.username}
                </span>

                <button
                  onClick={() => { setOpen(false); handleLogout(); }}
                  className="bg-red-200 text-white py-2 rounded-lg font-semibold hover:bg-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
