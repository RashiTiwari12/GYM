import React from 'react'
import serviceContent from './ServiceContent.json'
import mainImage4 from '../img/pixel4.jpg'
const Services = () => {
    return (
        <>

            <div id="section3" className="text-2xl text-white p-6" style={{
                backgroundImage: `url(${mainImage4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center-top',
                backgroundRepeat: 'repeat-x',
                opacity: "0.9",
                padding: "2rem",
                height: "calc(100% - 4rem)"
            }}>
                <p className="text-5xl text-white text-center p-5 font-bold">{serviceContent.title}</p>

                <h1 className="text-3xl text-orange-500 ">
                    <ul>
                        {serviceContent.servicesAvailable.map((member, index) => (
                            <li key={index}>
                                <strong>{member.nameOFService}</strong><br /><br />
                            </li>
                        ))}
                    </ul></h1> <br />

            </div>


        </>
    )
}

export default Services