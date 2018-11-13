import React, { Component } from 'react';
import HomeIcon from '../static/home-icon.svg';
import ProfileIcon from '../static/profile-icon.svg';
import WorkIcon from '../static/work-icon.svg';
import MailIcon from '../static/mailing-icon.svg';
import '../styles/menu-button.scss';
import '../styles/nav.scss';

export default class Nav extends Component {
    state = {
        navIsOpen: false
    }

    navToggleClickHandler = () => {
        this.setState((prevState) => {
            return {navIsOpen: !prevState.navIsOpen}
        });
    }

    render() {
        let buttonToggle = "";
        let navigation__list = "navigation__list"
        if(this.state.navIsOpen) {
            buttonToggle = "open"
            navigation__list = "navigation__list open"
        }
        return (
        <div className="nav-wrapper">
            <nav className="navigation">
                <div className="navigation__icon">
                    <div onClick={this.navToggleClickHandler} id="nav-icon" className={buttonToggle}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </div>
                <ul className={navigation__list}>
                    <li className="navigation__list--item"><p>Home</p><a href="/"><HomeIcon /></a></li>
                    <li className="navigation__list--item"><p>Profile</p><a href="/about"><ProfileIcon /></a></li>
                    <li className="navigation__list--item"><p>Work</p><a href="/work"><WorkIcon /></a></li>
                    <li className="navigation__list--item"><p>Connect</p><a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!"><MailIcon /></a></li>
                </ul>
            </nav>
        </div>
        )
    }
};