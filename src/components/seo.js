import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default class SEO extends Component {
  render() {
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    )

    const metaDescription = this.props.description || site.siteMetadata?.description
    const defaultTitle = this.props.title || site.siteMetadata?.title

    return (
      <Helmet
        title={defaultTitle}
        titleTemplate={this.props.title ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: this.props.title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: this.props.title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(this.props.meta)}
      />
    )
  }
}