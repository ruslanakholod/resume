import React from 'react';
import Representation from './Components/Representation';
import Portfolio from './Components/Portfolio';
import './Styles/App.scss';

class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <Representation/>
                <Portfolio/>
            </div>
        )
    }
}

export default App;
