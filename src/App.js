import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import './styles/app.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAnimal : 'cats'
        }
    }

    getAnimal = (animal) => {
        this.setState({
            currentAnimal : animal
        });
    }

    render() {
        return (
            <div className="app">
                <Header getAnimal={this.getAnimal} />
                <Content animal={this.state.currentAnimal}/>
                <Footer /> 
            </div>
        );
    }
}
