import React from 'react';
import './../Styles/Portfolio.scss';
import Project from "./Project";

class Portfolio extends React.Component {

    state = {
        projects: [
            {
                title: 'Apple website',
                description: 'Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.',
                img: '/images/photo.JPG',
                instruments: 'react / bootstrap / python'
            },
            {
                title: 'Apple',
                description: 'Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.',
                img: '/images/photo.JPG',
                instruments: 'react / bootstrap / python'
            },
            {
                title: 'website',
                description: 'Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.',
                img: '/images/photo.JPG',
                instruments: 'react / bootstrap / python'
            }
        ]
    };


    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__wrapper'>
                    <div className='portfolio__head'>
                        <p>Portfolio</p>
                        <a href='#'>CV</a>
                    </div>
                    <div className='portfolio__projects'>
                        {this.state.projects.map((project, index) => (
                            <Project key={index} title={project.title} description={project.description} image={project.img}
                                     instruments={project.instruments}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;