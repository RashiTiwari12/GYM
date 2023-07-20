import React from 'react'
import contactContent from './ContactContent.json'

const Contact = () => {
    return (
        <>
            <div id="section4" className="bg-gradient-to-br from-orange-600 to-black via-yellow-800
             to-white text-2xl text-white p-6 flex flex-wrap">
                <div className="w-full text-center mb-6">
                    <h2 className="text-5xl text-white font-bold">{contactContent.title}</h2>
                    <p className="text-3xl text-center font-semibold text-blue-950">{contactContent.para1}</p>
                </div>
                <div className="w-full md:w-1/2">

                    <p className="text-3xl">Contact Information:</p>
                    <br />
                    Phone: {contactContent.phone}<br />
                    Email: {contactContent.email}<br />
                    Visit Us:{contactContent.address}
                    <br />
                    <br />
                    <p className="text-3xl">Operating Hours:</p>
                    <br />
                    {contactContent.openingHours1}<br />
                    {contactContent.openingHours2}
                    <br />
                    <br />
                </div>
                <div className="w-full md:w-1/2 px-4">

                    <div className="border-orange-800 border-4 rounded-lg p-6 max-w-md mx-auto">
                        <div className='font-thin' style={{ fontFamily: 'Acme' }}>
                            {contactContent.para2}</div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Contact