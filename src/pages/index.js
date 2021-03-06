import React, { Component } from "react"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Socials from "../components/Socials"

import "../sass/main.scss"

export default class IndexPage extends Component {
  render() {
    return (
      <div className="Page">
        <SEO title="Home" />
        {
          Array.from(Array(50)).map((val, i) => (
            <div key={i} className="circle-container"><div key={i} className="circle"></div></div>
          ))
        }
        <Navigation />
        <div className="Index Content">
          <Image className="Image" fluid={this.props.data.profile.childImageSharp.fluid} />
          <h1>Hi there,<br /> I'm <span>Josh</span>.</h1>
          <span className="subtext">Take a look around and learn more about me</span>
          <Socials />
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    profile: file( relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`