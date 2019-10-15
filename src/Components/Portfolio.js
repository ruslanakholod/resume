import React from 'react';
import './../Styles/Portfolio.scss';
import Project from "./Project";

class Portfolio extends React.Component {

    state = {
        projects: [
            {
                title: 'Dashboard',
                description: {
                    text: 'An experiment to clone the User Interface and Experience of Apple TV and bring it to the web. When you open it, you see button in the upper right corner. The app allows you searching and adding an app to the dashboard. Once its added its possible to remove it or change its image. The app support keyboard navigation. Implemented apps:',
                    list: ['Calculator app;', 'BookFly app: booking flight form providing a fetch-ready  query;']
                },
                img: '/images/photo.JPG',
                instruments: 'react / emotion / react Router',
                links: {
                    github: 'https://github.com/ruslanakholod/dashboard',
                    live: 'https://appdashboard.netlify.com/'
                }
            },
            {
                title: 'WeatherNow',
                description: {
                    text: 'The WeatherNow app shows the current weather a city and allows sharing it by link.',
                    list: null
                },
                img: '/images/photo.JPG',
                instruments: 'react / emotion / react-router',
                links: {
                    github: 'https://github.com/ruslanakholod/weather',
                    live: null
                }
            },
            {
                title: 'GitHubSearch',
                description: {
                    text: 'The GitHubSearch app gives the basic GitHub user info by username and allows sharing it by link.',
                    list: null
                }, img: '/images/photo.JPG',
                instruments: 'react / emotion / react-router / graphQL / Apollo',
                links: {
                    github: 'https://github.com/ruslanakholod/githubsearch',
                    live: 'https://appdashboard.netlify.com/'
                }
            }
        ]
    };


    render() {
        return (
            <div ref={this.props.divScrollTo} className='portfolio'>
                <div className='portfolio__wrapper'>
                    <div className='portfolio__head'>
                        <p>Portfolio</p>
                        <a href='/resume.pdf' target='_blank'>CV</a>
                    </div>
                    <div className='portfolio__projects'>
                        {this.state.projects.map((project, index) => (
                            <Project key={index} title={project.title} description={project.description} image={project.img}
                                instruments={project.instruments} links={project.links} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;