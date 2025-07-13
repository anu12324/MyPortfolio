import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {

    const phoneNumber = '916307783358';
    const message = 'Hello, I want to know more about your you!';

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const phoneLink = `tel:${phoneNumber}`;

    return (
        <>
            <div className='container contact' id='contact'>
                <h1>CONTACE ME</h1>
                <div className='contact-icon'
                    data-aos="zoom-in-up"
                    data-aos-duration="1000">
                    {/* <a href='https://www.instagram.com' target='_blank' className='items'><FaInstagram className='icons' /></a> */}
                    {/* <a href='https://www.facebook.com' target='_blank' className='items'><CiFacebook className='icons' /></a> */}
                    <a href='https://in.linkedin.com' target='_blank' className='items'><CiLinkedin className='icons' /></a>
                    {/* <a href='https://www.twitter.com' target='_blank' className='items'><FaSquareXTwitter className='icons' /></a> */}
                    <a href='https://github.com/anu12324' target='_blank' className='items'><FaGithubSquare className='icons' /></a>
                    {/* <a href='https://mail.google.com' target='_blank' className='items'><SiGmail className='icons' /></a> */}
                    <a href='mailto:anuragg2053@gmail.com' target='_blank' className='items'><SiGmail className='icons' /></a>
                    <a href={whatsappLink} target='_blank' className='items'><FaWhatsapp className='icons' /></a>
                    <a href={phoneLink} target='_blank' className='items'><FaPhone className='icons' /></a>

                </div>
            </div>
        </>
    )
}

export default Contact;
