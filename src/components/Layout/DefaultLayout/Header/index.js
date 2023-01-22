import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('menu')}>
                <FontAwesomeIcon className={cx('menu-icon')} icon={faBars} />
            </div>
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
                            <div className={cx('language')}>RU</div>
                            <div className={cx('language')}>UA</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
