import React from "react";

const Data = () => {
    return(
        <div className="home__data">
            <h1 className="home__title">
                    Anna Huang
            </h1>
            <h3 className="home__subtitle">Fullstack Developer</h3>
            <p className="home__description">
            I'm a Fullstack Developer based in the United States, and I'm passionate and dedicated to my work. 
            </p>

            <a href="#contact" className="button button--flex">
                Say Hello
                <i className="uil uil-message home__mail-icon"></i>
            </a>
        </div>
    )
}

export default Data