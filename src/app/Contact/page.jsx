import React from 'react'
import "./contact.css"

const page = () => {


    const logos = [
        { name: "Gmail", svg: "/contact_logos/gmail.svg" },
        { name: "LinkedIn", svg: "/contact_logos/linkedin.svg" },
        { name: "Github", svg: "/contact_logos/github-white.svg" },
    ]

    return (
        <div className='contact_container'>
            <h1 className='contact_heading'>Lets connect</h1>
            <div className='logo_box'>
                {logos.map((item, index) => (
                    <div className='logo_box_small_container' key={index}>
                        <img src={item.svg} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <p className='contact_heading_2'>Feel free to contact me for opportunities, collaboration, or just to say hi. </p>
            <div className='form_box_container'>
                <input type="text" placeholder='enter your name...' />
                <input type="email" placeholder='enter your email...' />
                <textarea type="message" placeholder='enter your message...' />
            </div>
        </div>
    )
}

export default page
