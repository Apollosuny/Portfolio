import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
const languages = ['EN', 'RU', 'UA'];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="#" className={cx('logo')}>
                    <img src={images.logo} alt="Elias" />
                    <span className={cx('logo-name')}>Apollo</span>
                </a>
                <div className={cx('options')}>
                    <a
                        href=""
                        className={cx('home-page', {
                            [styles.active]: true,
                        })}
                    >
                        <span className={cx('hashtag')}>#</span>
                        home
                    </a>
                    <a
                        href=""
                        className={cx('projects-page', {
                            [styles.active]: false,
                        })}
                    >
                        <span className={cx('hashtag')}>#</span>
                        projects
                    </a>
                    <a
                        href=""
                        className={cx('about-page', {
                            [styles.active]: false,
                        })}
                    >
                        <span className={cx('hashtag')}>#</span>
                        about-me
                    </a>
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
