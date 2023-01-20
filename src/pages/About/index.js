import classNames from 'classnames/bind';
import styles from './About.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function About() {
    return (
        <>
            <div className={cx('path')}>
                <h1 className={cx('path__name')}>about-me</h1>
                <p className={cx('path__desc')}>Who am i</p>
            </div>
            <div className={cx('about')}>
                <div className={cx('about__illustrations')}>
                    <img src={images.aboutMe} alt="about me" className={cx('about__image')} />
                </div>
                <div className={cx('about__text')}>
                    <p className={cx('about__desc')}>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.
                    </p>
                    <p className={cx('about__desc')}>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online.
                    </p>
                    <p className={cx('about__desc')}>
                        I always strive to learn about the newest technologies and frameworks.
                    </p>
                </div>
            </div>
            <div className={cx('skills')}>
                <h2 className={cx('h2')}>skills</h2>
                <div className={cx('skill-content')}>
                    <div className={cx('skill-block')}>
                        <div className={cx('skill-block__name')}>Languages</div>
                        <ul className={cx('skill-block__lists')}>
                            <li className={cx('skill-block__item')}>TypeScript</li>
                            <li className={cx('skill-block__item')}>JavaScript</li>
                            <li className={cx('skill-block__item')}>Python</li>
                        </ul>
                    </div>
                    <div className={cx('skill-block')}>
                        <div className={cx('skill-block__name')}>Databases</div>
                        <ul className={cx('skill-block__lists')}>
                            <li className={cx('skill-block__item')}>SQL Server</li>
                            <li className={cx('skill-block__item')}>MongoDB</li>
                            <li className={cx('skill-block__item')}>MySQL</li>
                        </ul>
                    </div>
                    <div className={cx('skill-block')}>
                        <div className={cx('skill-block__name')}>Other</div>
                        <ul className={cx('skill-block__lists')}>
                            <li className={cx('skill-block__item')}>HTML</li>
                            <li className={cx('skill-block__item')}>CSS</li>
                            <li className={cx('skill-block__item')}>SASS</li>
                            <li className={cx('skill-block__item')}>SCSS</li>
                            <li className={cx('skill-block__item')}>Node.js</li>
                        </ul>
                    </div>
                    <div className={cx('skill-block')}>
                        <div className={cx('skill-block__name')}>Tools</div>
                        <ul className={cx('skill-block__lists')}>
                            <li className={cx('skill-block__item')}>VSCode</li>
                            <li className={cx('skill-block__item')}>Git & GitHub</li>
                            <li className={cx('skill-block__item')}>FontAwesome</li>
                        </ul>
                    </div>
                    <div className={cx('skill-block')}>
                        <div className={cx('skill-block__name')}>Frameworks</div>
                        <ul className={cx('skill-block__lists')}>
                            <li className={cx('skill-block__item')}>React</li>
                            <li className={cx('skill-block__item')}>Express</li>
                            <li className={cx('skill-block__item')}>Spring Boot</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('facts')}>
                <h2 className={cx('h2')}>fun-facts</h2>
                <div className={cx('fun-facts')}>
                    <div className={cx('fact')}>I like winter more than summer</div>
                    <div className={cx('fact')}>I often bike with my friends</div>
                    <div className={cx('fact')}>I like pizza and pasta</div>
                    <div className={cx('fact')}>I was in Egypt, Poland and Turkey</div>
                    <div className={cx('fact')}>I’m still studing in school</div>
                    <div className={cx('fact')}>My favorite movie is The Green Mile</div>
                </div>
            </div>
        </>
    );
}

export default About;
