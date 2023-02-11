import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar from './Navbar';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [checked, setChecked] = useState(false);

    const getClass = (event) => {
        if (event.currentTarget.className) setChecked(false);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('media-header')}>
                <span className={cx('media-header__line')}></span>
                <div id="media-links" className={cx('media-header__links')}>
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
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <a href="/" className={cx('logo')}>
                        <img src={images.logo} alt="Apollo" />
                        <span className={cx('logo-name')}>Apollo</span>
                    </a>
                    <div id="options" className={cx('options')}>
                        <Navbar />
                    </div>
                    <div id="dropdown" className={cx('dropdown')}>
                        <div className={cx('current-language')}>
                            EN
                            <div className={cx('language-list')}>
                                <div className={cx('language')}>VI</div>
                                <div className={cx('language')}>JP</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('mobile')}>
                    <a href="/" className={cx('mobile__logo')}>
                        <img src={images.logo} alt="Apollo" />
                        <span className={cx('mobile__logo-name')}>Apollo</span>
                    </a>
                    <input
                        type="checkbox"
                        id="mobile__input"
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                        onChange={(e) => {}}
                        className={cx('mobile__input')}
                    />
                    <div className={cx('mobile__options')}>
                        <div id="options" onClick={getClass} className={cx('mobile__links')}>
                            <Navbar />
                        </div>
                        <div id="dropdown" className={cx('mobile__dropdown')}>
                            <div className={cx('mobile__current-language')}>
                                EN
                                <div className={cx('mobile__language-list')} onClick={getClass}>
                                    <div className={cx('mobile__language')}>VI</div>
                                    <div className={cx('mobile__language')}>JP</div>
                                </div>
                            </div>
                        </div>
                        <div id="media-links" className={cx('mobile__media-header__links')}>
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
                </div>
            </div>
        </header>
    );
}

export default Header;
