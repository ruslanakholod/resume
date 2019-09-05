import React from 'react';
import './../Styles/Portfolio.scss';
import Project from "./Project";

class Portfolio extends React.Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio__wrapper'>
                    <div className='portfolio__head'>
                        <p>Portfolio</p>
                        <a href='#'>CV</a>
                    </div>
                    <div className='portfolio__projects'>
                        <Project title='Apple website'
                                 description='Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.'
                                 image='/images/photo.JPG'
                                 instruments='react / bootstrap / python'

                        />
                        <Project title='Apple website'
                                 description='Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.'
                                 image='/images/photo.JPG'
                                 instruments='react / bootstrap / python'

                        />
                        <Project title='Apple website'
                                 description='Lorem ipsum dolor sit amet, id harum euripidis necessitatibu. Harum euripidis necessitatibu deherhoene.'
                                 image='/images/photo.JPG'
                                 instruments='react / bootstrap / python'

                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;