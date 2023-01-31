import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cs = classNames.bind(styles);

function Home() {
    return (
        <>
            <div className={cs('information')}>
                <div className={cs('information-content')}>
                    <h1 className={cs('information-title')}>
                        Apollo is a <span>web designer </span>
                        and <span>front-end&nbsp;</span>
                        developer
                    </h1>
                    <p className={cs('information-desc')}>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <Button to="/contact">Contact ME ##</Button>
                </div>
                <div className={cs('information-image')}>
                    <img src={images.outlineLogo} className={cs('information-outline-logo')} alt="Avatar" />
                    <img src={images.avatar} className={cs('information-avatar')} alt="Avatar" />
                    <div className={cs('information-status')}>
                        Currently working on&nbsp;
                        <a href="/">Portfolio</a>
                    </div>

                    <img src={images.dot1} className={cs('information-dots')} alt="Avatar" />
                </div>
            </div>
            <figure className={cs('quote')}>
                <blockquote className={cs('quote-text')}>With great power comes great electricity bill</blockquote>
                <figcaption className={cs('quote-author')}>Dr. Who</figcaption>
            </figure>
            <div className={cs('projects')}>
                <div className={cs('projects-header')}>
                    <h2 className={cs('h2')}>projects</h2>
                    <a href="/projects" className={cs('projects-header__link')}>
                        View all ~~&gt;
                    </a>
                </div>
                <div className={cs('project')}>
                    <div className={cs('project-item')}>
                        <img src={images.project1} alt="project1" className={cs('project-item__image')} />
                        <ul className={cs('project-item__techs')}>
                            <li className={cs('project-item__tech')}>Flask</li>
                            <li className={cs('project-item__tech')}>Python</li>
                            <li className={cs('project-item__tech')}>SCSS</li>
                        </ul>
                        <div className={cs('project-item__content')}>
                            <h2 className={cs('project-item__name')}>ChertNodes</h2>
                            <p className={cs('project-item__desc')}>Minecraft servers hosting</p>
                            <div className={cs('project-item__links')}>
                                <Button href="https://chernodes.ru/">Live =&gt;</Button>
                                <Button href="https://figma.com/community/file/1149829028455305659">Figma =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cs('project-item')}>
                        <img src={images.project2} alt="project2" className={cs('project-item__image')} />
                        <ul className={cs('project-item__techs')}>
                            <li className={cs('project-item__tech')}>Express</li>
                            <li className={cs('project-item__tech')}>Node.js</li>
                            <li className={cs('project-item__tech')}>React</li>
                            <li className={cs('project-item__tech')}>RTK</li>
                            <li className={cs('project-item__tech')}>Discord.js</li>
                        </ul>
                        <div className={cs('project-item__content')}>
                            <h2 className={cs('project-item__name')}>ProtectX web</h2>
                            <p className={cs('project-item__desc')}>Discord anti-crash bot</p>
                            <div className={cs('project-item__links')}>
                                <Button href="https://isecurity-protectx.tk/">Live =&gt;</Button>
                                <Button href="https://figma.com/community/file/1168662007492356291">Figma =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cs('project-item')}>
                        <img src={images.project3} alt="project3" className={cs('project-item__image')} />
                        <ul className={cs('project-item__techs')}>
                            <li className={cs('project-item__tech')}>Express</li>
                            <li className={cs('project-item__tech')}>Node.js</li>
                            <li className={cs('project-item__tech')}>EJS</li>
                        </ul>
                        <div className={cs('project-item__content')}>
                            <h2 className={cs('project-item__name')}>Kahoot Answers</h2>
                            <p className={cs('project-item__desc')}>Get anwsers from kahoot quiz</p>
                            <div className={cs('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Live =&gt;</Button>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cs('skills')}>
                <h2 className={cs('h2')}>skills</h2>
                <div className={cs('skills-content')}>
                    <div className={cs('skills-content__decor')}>
                        <img src={images.outlineLogo} className={cs('skills-content__outline-logo')} alt="Avatar" />
                        <img src={images.dot1} className={cs('skills-content__dot1')} alt="Avatar" />
                        <img src={images.dot2} className={cs('skills-content__dot2')} alt="Avatar" />
                    </div>
                    <div className={cs('skills-content__skill-lists')}>
                        <div className={cs('skill-lists__block')}>
                            <p className={cs('block-name')}>Languages</p>
                            <ul className={cs('block-list')}>
                                <li className={cs('block-item')}>TypeScript</li>
                                <li className={cs('block-item')}>JavaScript</li>
                                <li className={cs('block-item')}>Java</li>
                            </ul>
                        </div>
                        <div className={cs('skill-lists__block')}>
                            <p className={cs('block-name')}>Database</p>
                            <ul className={cs('block-list')}>
                                <li className={cs('block-item')}>SQL Server</li>
                                <li className={cs('block-item')}>MongoDB</li>
                                <li className={cs('block-item')}>MySQL</li>
                            </ul>
                        </div>
                        <div className={cs('skill-lists__block')}>
                            <p className={cs('block-name')}>Other</p>
                            <ul className={cs('block-list')}>
                                <li className={cs('block-item')}>HTML</li>
                                <li className={cs('block-item')}>CSS</li>
                                <li className={cs('block-item')}>SASS</li>
                                <li className={cs('block-item')}>SCSS</li>
                                <li className={cs('block-item')}>Node.js</li>
                            </ul>
                        </div>
                        <div className={cs('skill-lists__block')}>
                            <p className={cs('block-name')}>Frameworks</p>
                            <ul className={cs('block-list')}>
                                <li className={cs('block-item')}>React</li>
                                <li className={cs('block-item')}>Express</li>
                                <li className={cs('block-item')}>Spring Boot</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cs('about')}>
                <div className={cs('about-content')}>
                    <h2 className={cs('about-header')}>about</h2>
                    <div className={cs('about-content')}>
                        <p className={cs('about-desc')}>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites from scratch and raise them into modern user-friendly web experiences.
                        </p>
                        <p className={cs('about-desc')}>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year. I have been helping various clients to establish their presence online. I always
                            strive to learn about the newest technologies and frameworks.
                        </p>
                    </div>
                    <Button medium to="/about">
                        View all -&gt;
                    </Button>
                </div>
                <img src={images.aboutMe} className={cs('about-image')} alt="avatar" />
            </div>
            <div className={cs('contact')}>
                <h2 className={cs('h2')}>contact</h2>
                <div className={cs('contact-content')}>
                    <p className={cs('contact-text')}>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </p>
                    <div className={cs('contact-info')}>
                        <p className={cs('contact-info__text')}>Message me here</p>
                        <a href="https://discord.com" className={cs('contact-media')}>
                            <img src={images.discord} alt="discord" />
                            <p>Trung Trần#4085</p>
                        </a>
                        <a href="https://mail.google.com" className={cs('contact-media')}>
                            <img src={images.mail} alt="mail" />
                            <p>baotrung06092003@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
