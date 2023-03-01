import React from "react";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">.NET</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Powershell</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">MSSQL</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Redis</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className="uil uil-check-circle"></i>

                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Backend