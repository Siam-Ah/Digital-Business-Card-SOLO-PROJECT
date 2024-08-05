import React from "react"
import profilePicture from "../images/aguero.jfif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <>
            <div className="info">
                <img src={profilePicture} className="profilePicture"/>
                <div className="info--fname">
                    <h1>Sergio Aguero</h1>    
                </div>
                <div className="info--role">
                    <h4>Football Player</h4>
                </div>
                <div className="info--website">
                    <p>
                        <a
                            className="info--websitelink" 
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sergiowebsite.com
                        </a>
                    </p>
                </div>
                <div className="button-container">
                    <a 
                        href="https://www.gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="email">
                            <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
                            Email
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com//"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="linkedin">
                            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
                            LinkedIn
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
