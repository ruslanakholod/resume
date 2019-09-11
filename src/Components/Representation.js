import React from 'react';
import {IconContext} from "react-icons";
import ToggleButton from './ToggleButton'
import {IoLogoGithub, IoMdMail, IoLogoLinkedin} from "react-icons/io";
import './../Styles/Representation.scss';

class Representation extends React.Component {
    render() {
        return (
            <div className='representation'>
                <div className='representation__wrapper'>
                    <ToggleButton/>
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
                        <a href='https://github.com/ruslanakholod' target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{color: "blue", size: '40px'}}>
                                <IoLogoGithub/>
                            </IconContext.Provider>
                        </a>
                        <a href='mailto:ruslanakholod@gmail.com' target="_blank" rel="noopener noreferrer" className='representation__links_mail'>
                            <IconContext.Provider value={{color: "black", size: '25px'}}>
                                <IoMdMail/>
                            </IconContext.Provider>
                        </a>
                        <a href='https://www.linkedin.com/in/ruslana-kholod/' target="_blank" rel="noopener noreferrer">
                            <IconContext.Provider value={{color: "blue", size: '40px'}}>
                                <IoLogoLinkedin/>
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Representation;