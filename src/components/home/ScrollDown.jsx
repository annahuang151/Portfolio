import React from "react";

const ScrollDown = () => {
    return(
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt-2 home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown