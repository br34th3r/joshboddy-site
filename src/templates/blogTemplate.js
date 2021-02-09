import React, { Component } from 'react'
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Navigation from "../components/Navigation"

export default class BlogTemplate extends Component {
    render() {
        return (
            <div className='BlogTemplate'>
                <SEO title={`${this.props.data.markdownRemark.frontmatter.title} | Josh Boddy`} />
                {
                    Array.from(Array(50)).map((val, i) => (
                        <div key={i} className="circle-container"><div key={i} className="circle"></div></div>
                    ))
                }
                <Navigation />
                <div className="PostPage">
                    <div className="PostHeader">
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