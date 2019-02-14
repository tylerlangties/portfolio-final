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
    navIsOpen: false,
    width: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  navToggleClickHandler = () => {
    this.setState(prevState => {
      return { navIsOpen: !prevState.navIsOpen };
    });
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
    console.log(this.state.width);
  };

  render() {
    const { width } = this.state;
    let buttonToggle = '';
    let navigation__list = 'navigation__list';
    let navigation__icon = 'navigation__icon';
    if (this.state.navIsOpen) {
      navigation__icon = 'navigation__icon active';
      buttonToggle = 'hamburger-transition';
      navigation__list = 'navigation__list open';
    }
    return width <= 767 ? (
      <div className="nav-wrapper">
        <nav className="navigation">
          <div className={navigation__icon}>
            <button
              onClick={this.navToggleClickHandler}
              className="menu-button"
              id="menu-button"
              type="button"
            >
              <span className={buttonToggle} id="hamburger" />
            </button>
          </div>
          <ul className={navigation__list}>
            <li className="navigation__list--item">
              <p>Home</p>
              <Link href="/">
                <a>
                  <HomeIcon />
                </a>
              </Link>
            </li>
            <li className="navigation__list--item">
              <p>Profile</p>
              <Link href="/about">
                <a>
                  <ProfileIcon />
                </a>
              </Link>
            </li>
            <li className="navigation__list--item">
              <p>Work</p>
              <Link href="/work">
                <a>
                  <WorkIcon />
                </a>
              </Link>
            </li>
            <li className="navigation__list--item">
              <p>Connect</p>
              <a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!">
                <MailIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    ) : (
      <div className="nav-wrapper">
        <div className="navigation-full">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Profile</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <a href="mailto:tylerlangties@gmail.com?Subject=Hello,%20Tyler!">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
