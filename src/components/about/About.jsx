import React from "react";
import "./about.css";
import AboutImg from "../../assets/pic.jpg";
import CV from "../../assets/Cover Letter_Anna.pdf";
import Info from "./Info";

const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle section__description">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="PictureOfMe" className="about__img" />

                <div className="about__data">
                    <Info />
                    
                    <p className="about__description">Backend developer, 
                    I create web pages, analyze business needs, and create database. 
                    I have years of experience and many clients are happy with the projects carried out.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-download-alt about__download-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About