import React from 'react'
// import { a } from 'react-router-dom';


const Navbar = () => {
    return (
        <>

            <div className="bg-black text-white py-10 px-40 shadow-lg flex justify-between">
                <a className="text-3xl font-bold" href="#section1">
                    <h2>Home</h2>
                </a>
                <a className="text-3xl font-bold" href="#section2">
                    <h2>About</h2>
                </a>
                <a className="text-3xl font-bold" href="#section3">
                    <h2>Services</h2>
                </a>

                <a className="text-3xl font-bold" href="#section4">
                    <h2>Contact</h2>
                </a>
            </div>



            <div className='project'>

            </div>
        </>
    )
}

export default Navbar