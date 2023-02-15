import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import images from '~/assets/images';
import links from '~/Link';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <div className={cx('path')}>
                <h1 className={cx('path__name')}>contacts</h1>
                <p className={cx('path__desc')}>Who am i</p>
            </div>
            <div className={cx('content')}>
                <p className={cx('content-desc')}>{t('Contact')}</p>
                <div className={cx('contact-info')}>
                    <div className={cx('contact-media')}>
                        <p className={cx('contact-media__title')}>Message me here</p>
                        <div className={cx('contact-media__link')}>
                            <a href={links.linkedin} className={cx('media')}>
                                <img src={images.linkedin} alt="discord" />
                                <p>Trung Trần</p>
                            </a>
                            <a href={links.mail} className={cx('media')}>
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
                        <a href={links.facebook} target="_blank" rel="noreferrer" className={cx('media-item')}>
                            <img src={images.facebook} alt="Facebook" />
                            <p>Trung Trần</p>
                        </a>
                    </li>
                    <li>
                        <a href={links.instagram} target="_blank" rel="noreferrer" className={cx('media-item')}>
                            <img src={images.insta} alt="Instagram" />
                            <p>Trung Trần</p>
                        </a>
                    </li>
                    <li>
                        <a href={links.github} target="_blank" rel="noreferrer" className={cx('media-item')}>
                            <img src={images.github} alt="Github" />
                            <p>Apollosuny</p>
                        </a>
                    </li>
                    <li>
                        <a href={links.linkedin} target="_blank" rel="noreferrer" className={cx('media-item')}>
                            <img src={images.linkedin} alt="Linkedin" />
                            <p>Trung Trần</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Contact;
