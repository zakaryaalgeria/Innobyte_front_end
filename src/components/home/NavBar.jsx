import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
export const NavBar = () => {
  return (
    <div className="py-4 flex items-center justify-between container">
        <div className="text-xl">
            <Link to={'/'} className="flex items-center gap-2">
                <img src="/logo.png" alt="logo"/>
                <div className="text-[30px] font-bold"> Sync<span className="text-[#3ADAD9]">Hub</span></div>
            </Link>
        </div>
        <nav className="lg:flex hidden gap-10  ">
            <a href="#home" className="home-link">Home </a>
            <a href="#feature" className="home-link">Features</a>
            <a href="#q&a" className="home-link">Q & A</a>
            <a href="#pricing" className="home-link">Pricing </a>
            <a href="#contact" className="home-link">Contact Us </a>
        </nav>
        <div className="end-nav relative flex gap-3 items-center">
            <Link to="/Login" className="px-3  text-[18px] rounded-xl py-2 flex items-center gap-3 border-solid border-[4px] border-[#E5E7EB] " > 
                <FaRegUser  className="w-4 h-4" />
                <span>Login</span>
            </Link>
            <Link to="/sign-in" className="px-3 text-[18px]  rounded-xl py-2  text-white bg-[#3ADAD9] h-full" >
                Sign Up
            </Link>
        </div>
    </div>
  )
}
