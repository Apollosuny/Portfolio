import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <>
            <div className={cx('path')}>
                <h1 className={cx('path__name')}>contacts</h1>
                <p className={cx('path__desc')}>Who am i</p>
            </div>
            <div className={cx('content')}>
                <p className={cx('content-desc')}>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me
                </p>
                <div className={cx('contact-info')}>
                    <div className={cx('support')}>
                        <p className={cx('support-title')}>Support me here</p>
                        <p className={cx('support-number')}>0123412324123</p>
                    </div>
                    <div className={cx('contact-media')}>
                        <p className={cx('contact-media__title')}>Message me here</p>
                        <div className={cx('contact-media__link')}>
                            <a href="https://discord.com/" className={cx('media')}>
                                <img src={images.discord} alt="discord" />
                                <p>Trung Trần#4085</p>
                            </a>
                            <a href="https://mail.google.com/" className={cx('media')}>
                                <img src={images.mail} alt="mail" />
                                <p>baotrung06092003@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('all-media')}>
                <h2 className={cx('h2', 'hashtag')}>all-media</h2>
                <ul className={cx('media-lists')}>
                    <li>
                        <a href="https://twitter.com/" className={cx('media-item')}>
                            <img src={images.twitter} alt="twitter" />
                            <p>@apollo</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" className={cx('media-item')}>
                            <img src={images.twitter} alt="twitter" />
                            <p>@apollo</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Contact;
