import React, { Component } from 'react'
import { FaGithub, FaStackOverflow, FaLinkedin, FaTwitter, FaFileCode } from 'react-icons/fa'

export default class Socials extends Component {
    render() {
        return (
            <div className='Socials'>
                <a href="https://www.github.com/br34th3r" className="Social" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.stackoverflow.com/users/4765924/joshua-boddy" className="Social" aria-label="StackOverflow"><FaStackOverflow /></a>
                <a href="https://www.linkedin.com/in/joshua-boddy" className="Social" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://www.twitter.com/br34th3r" className="Social" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://cv.joshboddy.com" className="Social" aria-label="CV"><FaFileCode /></a>
            </div>
        )
    }
}