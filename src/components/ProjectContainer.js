import React, { Component } from 'react'

export default class ProjectContainer extends Component {
    render() {
        return (
            <a href={this.props.url} className="ProjectContainer">
                <h2 className="ProjectTitle">{this.props.title}</h2>
                <p className="ProjectSummary">{this.props.summary}</p>
            </a>
        )
    }
}