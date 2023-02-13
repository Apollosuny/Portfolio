import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import links from '~/Link';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('container')}>
                <div className={cx('footer-inner')}>
                    <div className={cx('footer-info')}>
                        <div className={cx('footer-header')}>
                            <div className={cx('logo')}>
                                <img src={images.logo} alt="logo" />
                                <span>Apollo</span>
                            </div>
                            <a href={links.mail} target="_blank" rel="noreferrer" className={cx('footer-email')}>
                                baotrung06092003@gmail.com
                            </a>
                        </div>
                        <p className={cx('footer-desc')}>Web designer and front-end developer based in Vietnam</p>
                    </div>
                    <div className={cx('footer-media')}>
                        <span>Media</span>
                        <div className={cx('media-links')}>
                            <a href={links.instagram} target="_blank" rel="noreferrer" className={cx('media')}>
                                <img src={images.insta} alt="instagram" />
                            </a>
                            <a href={links.github} target="_blank" rel="noreferrer" className={cx('media')}>
                                <img src={images.github} alt="github" />
                            </a>
                            <a href={links.linkedin} target="_blank" rel="noreferrer" className={cx('media')}>
                                <img src={images.linkedin} alt="discord" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-copyright')}>© Copyright 2023. Made by Apollo</div>
            </div>
        </footer>
    );
}

export default Footer;
