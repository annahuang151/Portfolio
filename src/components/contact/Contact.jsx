import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_juhnyvt', 'template_sybvrz4', form.current, 'M0r1Eib3hK0tLs0VI')
        e.target.reset()
    };
  
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <div className="span contact__card-data">annahuang151@gmail.com</div>

                        <a href="mailto:annahuang151@gmail.com" className="contact__button">Write Me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name..." />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email..." />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Message</label>
                            <textarea name="project" cols="30" rows="10"
                                className="contact__form-input"
                                placeholder="Write your project"></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message
                            <i className="uil uil-message home__mail-icon"></i>
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact