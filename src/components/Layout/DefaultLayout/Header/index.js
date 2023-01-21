import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('menu')}>
                <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
            </div>
            <div className={cx('media-header')}>
                <span className={cx('media-header__line')}></span>
                <div className={cx('media-header__links')}>
                    <a href="https://discord.com/" className={cx('media')}>
                        <img src={images.discord} alt="discord" className={cx('media-icon')} />
                    </a>
                    <a href="https://github.com/" className={cx('media')}>
                        <img src={images.github} alt="github" className={cx('media-icon')} />
                    </a>
                    <a href="https://mail.google.com/" className={cx('media')}>
                        <img src={images.mail} alt="mail" className={cx('media-icon')} />
                    </a>
                </div>
            </div>
            <div className={cx('inner')}>
                <a href="/" className={cx('logo')}>
                    <img src={images.logo} alt="Apollo" />
                    <span className={cx('logo-name')}>Apollo</span>
                </a>
                <div className={cx('options')}>
                    <Link to="/">
                        <a href="#" id="home" className={cx('home-page', 'active', 'page')}>
                            <span className={cx('hashtag')}>#</span>
                            home
                        </a>
                    </Link>
                    <Link to="/projects">
                        <a href="#" id="project" className={cx('projects-page', 'page')}>
                            <span className={cx('hashtag')}>#</span>
                            projects
                        </a>
                    </Link>
                    <Link to="/about">
                        <a href="#" id="about" className={cx('about-page', 'page')}>
                            <span className={cx('hashtag')}>#</span>
                            about-me
                        </a>
                    </Link>
                </div>
                <div className={cx('dropdown')}>
                    {
                        <>
                            <span className={cx('current-language')}>EN</span>
                            <ul className={cx('language-list')}>
                                <li className={cx('language')}>RU</li>
                                <li className={cx('language')}>UA</li>
                            </ul>
                        </>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
