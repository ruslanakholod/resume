import React from 'react';
import './../Styles/ToggleButton.scss';

class ToggleButton extends React.Component {

    state = {
        isHidden: true,
        position: true
    };

    toggleHidden = () => {

        this.setState({
            isHidden: !this.state.isHidden,
            position: !this.state.position
        })
    };

    render() {

        let btn_class = this.state.position? 'menu__button' : 'menu__button open';

        return (
            <div className='menu'>
                <div onClick={this.toggleHidden} className={btn_class}/>
                {!this.state.isHidden &&
                    <ul className='menu__list'>
                        <li>Portfolio</li>
                        <li>CV</li>
                    </ul>
                }
            </div>
        )
    }

}

export default ToggleButton;