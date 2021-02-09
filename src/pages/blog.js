import React, { Component } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import PostContainer from '../components/PostContainer'

export default class BlogPage extends Component {
    render() {
        return (
            <div className="Page">
                <SEO title="Blog" />
                {
                Array.from(Array(50)).map((val, i) => (
                    <div key={i} className="circle-container"><div key={i} className="circle"></div></div>
                ))
                }
                <Navigation />
                <div className="Blog Content">
                    <div className="BlogHeading">
                        <p>I get a lot of ideas down in my posts and hopefully there's something in there that appeals to you. Enjoy!</p>
                    </div>
                    <div className="BlogPosts">
                        {
                            this.props.data.allMarkdownRemark.edges.map(edge => <PostContainer title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} summary={edge.node.excerpt} url={edge.node.frontmatter.slug} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                    }
                }
            }
        }
    }
`