import React, { Component } from "react"
import { graphql } from 'gatsby'

import SEO from "../components/SEO"
import Navigation from "../components/Navigation"
import Socials from "../components/Socials"

import "../sass/main.scss"

export default class ContactPage extends Component {
  render() {
    return (
      <div className="Page">
        <SEO title="Contact | Josh Boddy" />
        {
          Array.from(Array(100)).map(() => (
            <div className="circle-container"><div className="circle"></div></div>
          ))
        }
        <Navigation />
        <div className="Contact Content">
            <h1>Get in Touch</h1>
            <span className="subtext">You can use the form below to send me a quick message and I'll try to get back to you ASAP.</span>
            <form className="ContactForm" data-netlify="true" name="contact" method="POST">
                <input type="hidden" name="form-name" value="Contact" />
                <input className="TypedInput" type="text" name="name" placeholder="Full Name" />
                <input className="TypedInput" type="email" name="email" placeholder="Email Address" />
                <textarea className="TypedInput Area" name="message" placeholder="Message" />
                <button type="submit" className="ButtonInput">Send Message</button>
            </form>
            <span className="subtext">or hit me up on my socials</span>
            <Socials />
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query ContactQuery {
    profile: file( relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`