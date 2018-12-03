import React, { Component } from 'react';
import Head from 'next/head';
import Particles from 'react-particles-js';
import Nav from './Nav';
import ParticlesOptions from './Particles/ParticlesOptions';
import '../styles/layout.scss';

export default class Layout extends Component {
    render() {
        return (
        <div className="layout">
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/png" href="../static/favicon.ico" sizes="32x32"></link>
        </Head>
            <Nav />  
            {this.props.children}
            <Particles className='particles' 
                params={ParticlesOptions}
                />
        </div>
        )
    }
}