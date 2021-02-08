import React, { Component } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <AniLink cover to="/" className="Link" activeClassName="Active" bg="#3a506b">home</AniLink>
                <AniLink cover to="/projects" className="Link" activeClassName="Active" bg="#3a506b">projects</AniLink>
                <AniLink cover to="/contact" className="Link" activeClassName="Active" bg="#3a506b">contact</AniLink>
            </div>
        )
    }
}