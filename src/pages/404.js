import React, { Component } from "react"

import SEO from "../components/seo"

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <SEO title="404 | Josh Boddy" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}
