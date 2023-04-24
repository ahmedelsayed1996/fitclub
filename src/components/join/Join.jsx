import React from 'react';
import './Join.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qfbe138', 'template_7p8cl1m', form.current, 'nJ9E7tPtewU5U-oGs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'> READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span> YOUR BODY</span>
                    <span className='stroke-text'> WITH US</span>
                </div>
            </div>
            <div className='right-j'>
                <form onSubmit={sendEmail} ref={form} className="email-container">
                    <input type="email" name="from_name" id="" placeholder='Enter your Email Address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    );
}

export default Join;
