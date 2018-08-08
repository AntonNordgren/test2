import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    getAnimal = (evt) => {
        this.props.getAnimal(evt.target.firstChild.data.toLowerCase());
    }
    
    render() {
        return(
            <header id="header">
                <div id="headerOptions">
                    <div><span onClick={this.getAnimal}>Cat</span></div>
                    <div><span onClick={this.getAnimal}>Dog</span></div>
                    <div><span onClick={this.getAnimal}>Bird</span></div>
                </div>
            </header>
        );
    }
}