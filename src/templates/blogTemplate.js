import React, { Component } from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import SEO from "../components/seo"
import Navigation from "../components/Navigation"

export default class BlogTemplate extends Component {
    render() {
        return (
            <div className='BlogTemplate'>
                <SEO title={this.props.data.markdownRemark.frontmatter.title} />
                {
                    Array.from(Array(50)).map((val, i) => (
                        <div key={i} className="circle-container"><div key={i} className="circle"></div></div>
                    ))
                }
                <Navigation />
                <div className="PostPage">
                    <div className="PostHeader">
                        <AniLink cover to="/blog" className="PostBack" bg="#3a506b">{"< Back to Blog"}</AniLink>
                        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
                        <h2>{this.props.data.markdownRemark.frontmatter.date}</h2>
                    </div>
                    <div
                        className="PostContent"
                        dangerouslySetInnerHTML={{ __html:  this.props.data.markdownRemark.html}}
                    />
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`