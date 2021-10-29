import React from "react"
import { Nav, FooterText } from "./FooterStyled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = (props) => {
    return (
        <Nav>
            <FooterText>Created by Magnifiques. My profile: <a href="https://github.com/magnifiques" target="_blank" rel="noreferrer">
             <FontAwesomeIcon icon={faGithub} /> Github </a>. All the Copyrights are belong to their respective 
            owners.</FooterText>
        </Nav>
    )
}

export default Footer