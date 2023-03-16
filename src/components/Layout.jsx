import { Outlet,Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom'
import IconSearch from '../img/search.svg'

 
const Layout = () => {
  return (
    <div className="">
        <nav className=" w-full fixed top-0 left-0 bg-white">
            <div className="md:flex py-4 md:px-10 px-7 items-center justify-between">
            <div className=" text-3xl flex items-center cursor-pointer font-abc ">
               <span className="mr-1 pt-2"></span> SNEAK 
            </div>
         
            <ul className="md:flex md:items-center m-3 font-dfg">
                <Link className="md:ml-5 text-ml bg-rose-500 p-2"   to="/">All</Link>
                <Link className="md:ml-5 text-ml p-2"to="/formulario">form</Link>
                <li className="md:ml-5 text-ml">Branding</li>
                <li className="md:ml-5 text-ml">Web</li>
                <li className="md:ml-5 text-ml">Photografy</li>
                <li className="md:ml-5 text-ml">App</li>
                <li className="md:ml-5 text-ml"></li>
                
            </ul>
            </div>
        </nav>
        <main className="md:h-screen overflow-scroll">
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Layout
