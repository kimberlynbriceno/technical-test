import { Link } from "react-router-dom";
import Uno from "../img/one.jpg";
import Dos from "../img/two.jpg";
import Tres from "../img/tree.jpg";
import Four from "../img/four.jpg";
import Five from "../img/five.jpg";
import Six from "../img/six.jpg";
import Seven from "../img/seven.jpg";
import equal from "../img/equal.svg";
import apps from "../img/apps.svg";

const Index = () => {
  return (
    <>
      <div className="bg-rose-500 lg:w-full ">
        <img
          className="w-full"
          src="https://source.unsplash.com/random"
          alt="LOGO"
        />
      </div>

      <div>
        <div className="w-full lg:flex lg:items-center lg:w-auto hidden">
          <div className="flex-grow items-center text-center m-3 font-dfg ">
            <img
              className="w-15 h-40 block  mt-4 lg:inline-block lg:mt-0 text-ml"
              src={apps}
              alt="apps"
            />
            <img
              className="w-50 h-20 block  mt-4 lg:inline-block lg:mt-0 text-ml"
              src={equal}
              alt="equal"
            />
          </div>
        </div>

        <div className="w-full lg:flex lg:items-center lg:w-auto hidden">
          <div className="lg:flex-grow items-center text-center m-3 font-dfg ">
            <Link
              className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml bg-rose-500 p-2"
              to="/"
            >
              All
            </Link>
            <Link
              className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml p-2"
              to="/formulario"
            >
              Contact
            </Link>
            <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">
              Branding
            </p>
            <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">
              Web
            </p>
            <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">
              Photografy
            </p>
            <p className="block mt-4 md:ml-4 lg:inline-block lg:mt-0 text-ml">
              App
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-5 text-center ">
          <div className="grid grid-col-1 sm:grid-cols-3 gap-3 my-3">
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden gap-3 object-contain">
              <img className="" src={Tres} alt="" />
              <img src={Six} alt="" />
            </div>
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
              <img src={Seven} alt="" />
            </div>
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
              <img className="w-full" src={Dos} alt="" />
              <img src={Five} alt="" />
            </div>
          </div>
          <div className="grid grid-col-1 sm:grid-cols-3 gap-3 my-3">
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
              <img src={Four} alt="" />
              <img src={Five} alt="" />
            </div>
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="bg-slate-400 max-w-sm rounded overflow-hidden">
              <img className="w-full" src={Uno} alt="" />
              <img src={Six} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow items-center text-center m-3 font-dfg ">
        <button className="bg-rose-500 md:w-1/5  ">SHOW ME MORE</button>
      </div>
      <div className="bg-white mt-5 w-full h-10"></div>
    </>
  );
};

export default Index;
