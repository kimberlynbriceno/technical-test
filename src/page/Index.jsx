import {Link} from 'react-router-dom'
import IconS from '../img/search.svg'
import Uno from '../img/una.jpg'
import Dos from '../img/dos.jpg'
import Tres from '../img/tres.jpg'

const Index = () => {
  return (
    <>
    <div className="bg-rose-500 md:w-full ">
      <img className="" src="https://source.unsplash.com/random" alt="LOGO" />
    </div>

<div>
  <div className="container mx-8 my-8 mt-5 text-center object-cover">

      <div className="grid grid-col-1 sm:grid-cols-3 gap-3 my-3">
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img src="https://source.unsplash.com/random" alt="" />
        </div> 
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img className="w-full" src={Dos} alt="" />
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-3 my-3">
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img src="https://source.unsplash.com/random" alt="" />
        </div> 
        <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
          <img className="w-full" src={Uno} alt="" />
        </div>
      </div>
    </div>
</div>
    
    </>
  )
}

export default Index
