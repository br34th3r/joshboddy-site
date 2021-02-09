import React, { Component } from 'react'
import { graphql } from 'gatsby'

import SEO from "../components/SEO"
import Navigation from '../components/Navigation'
import ProjectContainer from "../components/ProjectContainer"

export default class Projects extends Component {
    render() {
        return (
            <div className="Page">
                <SEO title="Projects | Josh Boddy" />
                {
                    Array.from(Array(100)).map(() => (
                        <div className="circle-container"><div className="circle"></div></div>
                    ))
                }
                <Navigation />
                <div className="Projects Content">
                    {
                        this.props.data.allGithubData.nodes[0].data.user.repositories.nodes.map((repo) => {
                            if(repo.owner.login === "br34th3r" && !repo.isPrivate) {
                                return <ProjectContainer title={repo.name} url={repo.url} summary={repo.description} />
                            } else {
                                return null
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export const query = graphql`
    query ProjectsQuery {
        allGithubData {
            nodes {
                data {
                    user {
                        repositories {
                            nodes {
                                description
                                name
                                url
                                owner {
                                    login
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`