import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Nav from './Nav';
import ParticlesOptions from './Particles/ParticlesOptions';
import '../styles/layout.scss';
import particlesOptions from './Particles/ParticlesOptions';

export default class Layout extends Component {
    render() {
        return (
        <div className="layout">
            <Nav />  
            {this.props.children}
            <Particles className='particles' 
                params={ParticlesOptions}
                />
        </div>
        )
    }
}