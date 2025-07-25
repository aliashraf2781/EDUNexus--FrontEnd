import React, { useState } from "react";
import logo from "../../assets/LOGO.svg";
import {
  Search,
  Bell,
  Heart,
  ShoppingCart,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../services/authSlice";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <div className="mx-auto bg-dark w-full px-4 sm:px-6 lg:px-8 text-gray-400">
        <div className="flex h-14 items-center justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-4 lg:gap-6 text-sm">
              <li>
                <NavLink
                  to={""}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/courses"}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/instructorRegister"}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Become an instructor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/student-dashboard"}
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className="block rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row h-auto sm:h-20 py-4 sm:py-0 items-center justify-between gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-12 w-full sm:w-auto">
            <Link to="">
              <a href="#" className="flex-shrink-0">
                <img src={logo} alt="EduNexus Logo" className="h-8 sm:h-auto" />
              </a>
            </Link>

            {/* <div className="relative border-2 border-gray-200 w-full sm:w-64 md:w-80 lg:w-96 py-2 px-10 max-w-full sm:max-w-md">
              <form>
                <input
                  type="text"
                  id="search"
                  placeholder="What do you want to learn..."
                  className="w-full outline-none bg-transparent text-sm"
                />
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <button
                    type="submit"
                    aria-label="Search"
                    className="rounded-full p-1 text-gray-700 hover:bg-gray-100"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                </span>
              </form>
            </div> */}
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-4 lg:gap-6 w-full sm:w-auto">
            <div className="flex  items-center gap-4">
              <NavLink to={"/course-notifation"}>
                <Bell className="cursor-pointer h-5 w-5" />
              </NavLink>
              <NavLink to={"/favorite-courses"}>
                <Heart className="cursor-pointer h-5 w-5" />
              </NavLink>
              <NavLink to={"cart"}>
                <ShoppingCart className="cursor-pointer h-5 w-5" />
              </NavLink>
            </div>

            <div className="flex flex-row items-center gap-2 sm:gap-3">
              {!token ? (
                <>
                  <NavLink to={"signup"} className="...">
                    <span className="...">Create Account</span>
                  </NavLink>
                  <NavLink to={"/login"} className="...">
                    <span className="...">Sign In</span>
                  </NavLink>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute z-50 w-full bg-dark py-4 px-4 sm:px-6 shadow-lg">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col space-y-4 text-sm">
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-200/75"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition hover:text-gray-200/75"
                  href="#"
                >
                  Become an instructor
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
