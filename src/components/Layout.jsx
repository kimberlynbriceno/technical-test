import React,{useState} from "react"
import { Outlet,Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom'
import IconS from '../img/search.svg'
import Logo from '../img/Diseño sin título.svg'


const Layout = () => {
  const [isMobile, setIsMobile] = useState (false);


  return (
    <div className="">
        <nav className="flex items-center p-6 flex-wrap justify-between bg-white">
            <div className="flex items-center flex-shrink-0 mr-6 font-abc ">
              <p className="fill-current h-8 w-8 mr-2 ml-2"> <img className="w-8 h-15 block mt-2 md:ml-4 lg:inline-block lg:mt-0" src={Logo} alt="LOGO" /></p>
               <span className="text-3xl tracking-tight ml-4">SNEAK</span>  
            </div>
            <div className="block lg:hidden">
              <Link to='' className="flex items-center px-3 py-2 rounded border text-rose-500 ">
              </Link>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto"> 
                <div className="lg:flex-grow lg:items-center m-3 font-dfg">
                     <Link className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml bg-rose-500 p-2"   to="/">All</Link>
                     <Link className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml p-2"to="/formulario">form</Link>
                     <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">Branding</p>
                     <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">Web</p>
                     <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">Photografy</p>
                     <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">App</p>
                     <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml"><img className= "w-7 h-9 block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml" src={IconS} alt="ICONO" /></p>
                 </div>
            </div>
        </nav>
        <main className="md:h-screen">
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Layout
