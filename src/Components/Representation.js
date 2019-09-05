import React from 'react';
import './../Styles/Representation.scss';

class Representation extends React.Component {
    render() {
        return (
            <div className='representation'>
                <div className='representation__wrapper'>
                    <div className='representation__photo'/>
                    <div className='representation__text'>
                        <h2>RUSLANA KHOLOD</h2>
                        <p>software developer</p>
                        <span className='line'/>
                        <p>working with
                            <br/>
                            js / react / html / css</p>
                    </div>
                    <div className='representation__links'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Representation;