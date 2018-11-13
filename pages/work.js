import React, { Component } from 'react';
import Layout from '../components/layout';
import MailIcon from '../static/mailing-icon.svg';
import '../styles/work.scss';

export default class Work extends Component {
    render() {
        return (

    <Layout>
        <div className="work-page">
            <div className="page-wrapper">
            <h1>Work</h1> 
                <div className="rich-text"> 
                <div className="img-container">
                            <img className="proj-1" src="../static/proj-imgone.jpeg" />
                            <hr />
                            <img className="proj-2" src="../static/proj-imgtwo.jpeg" />
                            <hr />
                            <img className="proj-3" src="../static/proj-imgthree.jpeg" />
                            <hr />
                            <img className="proj-4" src="../static/proj-imgfour.jpeg" />
                            <hr />
                    </div>
                    <a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!">
                        <button className="button-primary">Get in touch</button>
                    </a>
                </div>
            </div>
        </div>
    </Layout>

        )
    }
}
    