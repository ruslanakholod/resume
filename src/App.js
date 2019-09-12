import React from 'react';
import Representation from './Components/Representation';
import Portfolio from './Components/Portfolio';
import './Styles/App.scss';

class App extends React.Component {

    divScrollTo = React.createRef();

    handleScrollTo = () => {
        this.divScrollTo.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    };

    render() {
        return (
            <div className='main'>
                <Representation scrollTo={this.handleScrollTo}/>
                <Portfolio divScrollTo={this.divScrollTo}/>
            </div>
        )
    }
}

export default App;
