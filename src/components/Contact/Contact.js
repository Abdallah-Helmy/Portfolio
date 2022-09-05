import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import AnimatedLetters from '../Lettersanimation/AnimatedLetters';
import Loader from '../Loader/Loader';
import { useGlobalContext } from '../Context/UseContext';

function Contact() {
  const [Show, setShow] = useState(false);
  const { contactdLoader } = useGlobalContext();
  const formRef = useRef();
  const contact = [...'contact me.'];

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_gg7u34a', 'template_4copcnk', formRef.current, 'po-N2Z2x3oORS_RPc').then(
      res => {
        setShow(true);
        formRef.current.reset();
        setTimeout(() => {
          setShow(false);
        }, 3000);
      },
      error => {
        alert('Please Fill All Required Fields');
      }
    );
  };

  return contactdLoader ? (
    <>
      <div className="contact col-xl-11 col-lg-10 col-sm-11 col-11 m-sm-auto d-flex align-items-center justify-content-center">
        <div className="contact-form col-xl-8 col-lg-11 col-sm-11">
          <h1 className="contact-text">
            <AnimatedLetters letters={contact} />
          </h1>
          <form className="d-flex flex-column" ref={formRef} onSubmit={sendEmail}>
            <div className="info d-flex mb-3">
              <li>
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li>
                <input type="email" name="email" placeholder="Email" required />
              </li>
            </div>
            <li className="mb-3">
              <input type="subject" name="subject" placeholder="Subject" className="w-100" required />
            </li>
            <li className="mb-1">
              <textarea name="message" placeholder="Message" cols="30" rows="10" className="w-100" required></textarea>
            </li>
            <button type="sumbit" className="main-btn">
              send
            </button>
          </form>
        </div>
        <div className={Show ? 'msg-send showMsg' : 'msg-send'}>message sent successfully</div>
      </div>
    </>
  ) : (
    <Loader contact="contact" />
  );
}

export default Contact;
