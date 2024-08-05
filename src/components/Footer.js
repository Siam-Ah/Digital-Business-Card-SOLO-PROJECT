import React from "react"
import twitterImg from "../images/twitter.png"
import facebookImg from "../images/facebook.png"
import instagramImg from "../images/instagram.png"
import githubImg from "../images/github.png"

export default function Footer() {
    return (
        <div className="footer">
            <a
                href="https://x.com/"
                target= "_blank"
                rel="noopener noreferrer"
            >
                <img src={twitterImg} className="icon"/>
            </a>
            <a
                href="https://www.facebook.com/"
                target= "_blank"
                rel="noopener noreferrer"
            >
                <img src={facebookImg} className="icon"/>
            </a>
            <a
                href="https://www.instagram.com/"
                target= "_blank"
                rel="noopener noreferrer"
            >
                <img src={instagramImg} className="icon"/>
            </a>
            <a
                href="https://github.com/Siam-Ah"
                target= "_blank"
                rel="noopener noreferrer"
            >
                <img src={githubImg} className="icon"/>
            </a>
        </div>
    )
}