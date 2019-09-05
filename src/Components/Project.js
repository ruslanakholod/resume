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
                    <p className='project__description'> {this.props.description}</p>
                    <div className='project__img' style={image}/>
                    <p className='project__instruments'> {this.props.instruments}</p>
                </div>
            </div>
        )
    }
}

export default Project;