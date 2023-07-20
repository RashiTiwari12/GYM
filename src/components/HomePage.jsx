import React from 'react'
import mainImage2 from '../img/pixel2.jpg'
const HomePage = () => {
    return (
        <>
            {/* <img className='main-image' style={{ height: "35%", width: "100%" }} src={mainImage3} alt="Woman Avatar" /> */}


            <div id="section1"
                className="flex items-center justify-center h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${mainImage2})`, opacity: 0.7 }}
            >
                <h1 className="text-5xl font-bold text-white text-center leading-tight">
                    {/* INNOVATIVE FITNESS <br /> */}
                    <p style={{ fontFamily: 'Russo One' }}> UNLEASH &nbsp; YOUR  &nbsp;POTENTIAl <br /></p>
                    <span className="text-4xl text-orange-500 ">
                        CUT &amp;<br />
                        <span >
                            EDGE
                            <p className="text-4xl inline"> &nbsp;GYM</p>
                        </span>
                    </span>

                </h1>
            </div>

            {/* <video className='main-image' style={{ height: "100px", width: "100px" }} src={mainImage1} alt="Woman Avatar" />
            <img className='main-image' style={{ height: "100px", width: "100px" }} src={mainImage2} alt="Woman Avatar" /> */}
        </>
    )
}

export default HomePage