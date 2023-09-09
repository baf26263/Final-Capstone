import React, { useRef } from 'react';
import Background from '../assets/images/Comic.jpg';
import emailjs from '@emailjs/browser';
import './About.css';

export const About = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted");
    if (form.current) {
      emailjs.sendForm('service_jg4ha88', 'template_6p8dtk2', form.current, 'gPPJIBhHrcq1KCvba')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        (form.current as HTMLFormElement).reset()
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed text'>
      <div className='transparent'>
        <h1 className='text-center text-3xl font-bold text-white'>About Us</h1>
        <div className='page-description'>
          <p className='text-white flex justify-center text-center'>
            Discover a universe brimming with iconic heroes and villains at your fingertips. Our powerful 
            search engine grants you access to an extensive database of Marvel's finest. Dive deep into their backgrounds, powers,
            affiliations, and more!

            Get ready to unleash your inner tactician as you create and 
            manage your own elite Marvel team. Assemble the perfect lineup, pairing heroes with complementary 
            abilities. The possibilities are boundless!

            If you have any questions or suggestions for us, leave us a message below and we will get back to you as soon as we can!
          </p>
        </div>
        <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" className='name-box' placeholder='Name' name='name' required/>
          <input type="email" className='email-box' placeholder='Email Address' name='email' required/>
          <input type="subject" className='subject-box' placeholder='Subject' name='subject' required/>
          <input className='input-box' id='' placeholder='Your Message' name='message' required/>
          <button type='submit' className='submit-button'>
              Send Message
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default About;
