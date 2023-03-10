import React from "react";


const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
            <i className="uil uil-award-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2 Years Working</span>
            </div>

            <div className="about__box">
            <i className="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">3 Projects</span>
            </div>

            <div className="about__box">
            <i className="uil uil-comment-alt-question about__icon"></i>
                <h3 className="about__title">Creavitity</h3>
                <span className="about__subtitle">Professional Advices</span>
            </div>
        </div>
    )
}

export default Info