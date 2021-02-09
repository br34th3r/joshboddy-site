import React, { Component } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default class PostContainer extends Component {
    render() {
        return (
            <AniLink cover to={this.props.url} bg="#3a506b" className='PostContainer'>
                <h2>{this.props.title}</h2>
                <h3>{this.props.date}</h3>
                <p>{this.props.summary}</p>
            </AniLink>
        )
    }
}