import React from 'react';
import './../Styles/Project.scss';

class Project extends React.Component {

    render() {

        let image = {
            backgroundImage: `url(${this.props.image})`
        };

        return (
            <div className='project'>
                <div className='project__wrapper'>
                    <p className='project__title'> {this.props.title}</p>
                    <div className='project__description'>
                        <p> {this.props.description.text}</p>
                        {this.props.description.list &&
                            <ul>
                                {this.props.description.list.map(item => (
                                    <li key={item}>{item}</li>
                                ))
                                }
                            </ul>}
                    </div>
                    <div className='project__img' style={image} />
                    <p className='project__instruments'> {this.props.instruments}</p>
                    <p className='project__links'>
                        <a href={this.props.links.github} rel="noopener noreferrer" target='_blank'>GitHub</a>
                        {this.props.links.live &&
                            <a href={this.props.links.live} rel="noopener noreferrer" target='_blank'>Demo</a>
                        }
                    </p>
                </div>
            </div>
        )
    }
}

export default Project;