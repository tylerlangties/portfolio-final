import React, { Component } from 'react';
import HomeIcon from '../static/home-icon.svg';
import ProfileIcon from '../static/profile-icon.svg';
import WorkIcon from '../static/work-icon.svg';
import MailIcon from '../static/mailing-icon.svg';
import Link from 'next/link';
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
        let navigation__icon = "navigation__icon"
        if(this.state.navIsOpen) {
            navigation__icon = "navigation__icon active"
            buttonToggle = "hamburger-transition"
            navigation__list = "navigation__list open"
        }
        return (
        <div className="nav-wrapper">
            <nav className="navigation">
                <div className={navigation__icon}>
                    <button onClick={this.navToggleClickHandler} className="menu-button" id="menu-button" type="button"><span className={buttonToggle} id="hamburger"></span></button>
                </div>
                <ul className={navigation__list}>
                    <li className="navigation__list--item"><p>Home</p>
                    <Link href="/">
                        <a><HomeIcon /></a>
                    </Link></li>
                    <li className="navigation__list--item"><p>Profile</p>
                    <Link href="/about">
                        <a><ProfileIcon /></a>
                    </Link></li>
                    <li className="navigation__list--item"><p>Work</p>
                    <Link href="/work">
                        <a><WorkIcon /></a>
                    </Link></li>
                    <li className="navigation__list--item"><p>Connect</p>
                    <a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!">
                        <MailIcon />
                    </a></li>
                </ul>
            </nav>
        </div>
        )
    }
};