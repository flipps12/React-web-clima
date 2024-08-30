import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    const [statusNav, setStatusNav] = useState(false);
    const nav = () => {
        setStatusNav(true == false)
        if (statusNav) document.getElementById('nav').classList.toggle('-ml-20');
        else document.getElementById('nav').classList.toggle('ml-0');
    };

    return (
        <Fragment>
            <button onClick={nav} className="z-20 size-16 fixed center-fixed flex justify-center items-center flex-col gap-3 trasparent rounded-md">
                <div className="w-8 h-[2px] bg-slate-50"></div>
                <div className="w-8 h-[2px] bg-slate-50"></div>
                <div className="w-8 h-[2px] bg-slate-50"></div>
            </button>
            <nav id="nav" className="z-30 w-20 h-screen rounded-md fixed bg-gray-900 flex flex-col justify-center items-center gap-14 -ml-24 transition-all duration-150 ease-out">
                <div onClick={nav}><i className="fa-solid fa-arrow-left text-gray-300 text-4xl"></i></div>
                <Link to='/'><i className="fa-solid fa-house text-gray-300 text-4xl"></i></Link >
                <Link to='#'><i className="fa-solid fa-x text-gray-300 text-4xl"></i></Link >
                <Link to='#'><i className="fa-solid fa-x text-gray-300 text-4xl"></i></Link >
                <Link to='https://github.com/flipps12/React-web-clima'><i className="fa-brands fa-github text-gray-300 text-4xl"></i></Link >
            </nav>
        </Fragment>
    )
};