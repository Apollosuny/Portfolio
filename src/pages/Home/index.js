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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={cs('information-outline-logo')}
                        viewBox="0 0 53 53"
                        fill="none"
                    >
                        <mask id="path-1-inside-1_64_1296" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0 14H13H26V27H13V40H26V53H13H0V40V27V14Z"
                            />
                        </mask>
                        <path
                            d="M0 14V13H-1V14H0ZM26 14H27V13H26V14ZM26 27V28H27V27H26ZM13 27V26H12V27H13ZM13 40H12V41H13V40ZM26 40H27V39H26V40ZM26 53V54H27V53H26ZM0 53H-1V54H0V53ZM13 13H0V15H13V13ZM26 13H13V15H26V13ZM27 27V14H25V27H27ZM13 28H26V26H13V28ZM14 40V27H12V40H14ZM13 41H26V39H13V41ZM25 40V53H27V40H25ZM26 52H13V54H26V52ZM0 54H13V52H0V54ZM-1 40V53H1V40H-1ZM-1 27V40H1V27H-1ZM-1 14V27H1V14H-1Z"
                            fill="#C778DD"
                            mask="url(#path-1-inside-1_64_1296)"
                        />
                        <mask
                            id="path-3-outside-2_64_1296"
                            maskUnits="userSpaceOnUse"
                            x="25"
                            y="0"
                            width="28"
                            height="41"
                            fill="black"
                        >
                            <rect fill="white" x="25" width="28" height="41" />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M26 1H39H52V14V27V40H39H26V27H39V14H26V1Z"
                            />
                        </mask>
                        <path
                            d="M26 1V0H25V1H26ZM52 1H53V0H52V1ZM52 40V41H53V40H52ZM26 40H25V41H26V40ZM26 27V26H25V27H26ZM39 27V28H40V27H39ZM39 14H40V13H39V14ZM26 14H25V15H26V14ZM39 0H26V2H39V0ZM52 0H39V2H52V0ZM53 14V1H51V14H53ZM53 27V14H51V27H53ZM53 40V27H51V40H53ZM39 41H52V39H39V41ZM39 39H26V41H39V39ZM27 40V27H25V40H27ZM26 28H39V26H26V28ZM38 14V27H40V14H38ZM26 15H39V13H26V15ZM25 1V14H27V1H25Z"
                            fill="#C778DD"
                            mask="url(#path-3-outside-2_64_1296)"
                        />
                    </svg>
                    <img src={images.avatar} className={cs('information-avatar')} alt="Avatar" />
                    <div className={cs('information-status')}>
                        Currently working on&nbsp;
                        <a href="/">Portfolio</a>
                    </div>
                    <svg
                        className={cs('information-dots')}
                        width="20%"
                        viewBox="0 0 104 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="4" cy="4" r="4" fill="#ABB2BF" />
                        <circle cx="4" cy="28" r="4" fill="#ABB2BF" />
                        <circle cx="4" cy="52" r="4" fill="#ABB2BF" />
                        <circle cx="4" cy="76" r="4" fill="#ABB2BF" />
                        <circle cx="4" cy="100" r="4" fill="#ABB2BF" />
                        <circle cx="28" cy="4" r="4" fill="#ABB2BF" />
                        <circle cx="28" cy="28" r="4" fill="#ABB2BF" />
                        <circle cx="28" cy="52" r="4" fill="#ABB2BF" />
                        <circle cx="28" cy="76" r="4" fill="#ABB2BF" />
                        <circle cx="28" cy="100" r="4" fill="#ABB2BF" />
                        <circle cx="52" cy="4" r="4" fill="#ABB2BF" />
                        <circle cx="52" cy="28" r="4" fill="#ABB2BF" />
                        <circle cx="52" cy="52" r="4" fill="#ABB2BF" />
                        <circle cx="52" cy="76" r="4" fill="#ABB2BF" />
                        <circle cx="52" cy="100" r="4" fill="#ABB2BF" />
                        <circle cx="76" cy="4" r="4" fill="#ABB2BF" />
                        <circle cx="76" cy="28" r="4" fill="#ABB2BF" />
                        <circle cx="76" cy="52" r="4" fill="#ABB2BF" />
                        <circle cx="76" cy="76" r="4" fill="#ABB2BF" />
                        <circle cx="76" cy="100" r="4" fill="#ABB2BF" />
                        <circle cx="100" cy="4" r="4" fill="#ABB2BF" />
                        <circle cx="100" cy="28" r="4" fill="#ABB2BF" />
                        <circle cx="100" cy="52" r="4" fill="#ABB2BF" />
                        <circle cx="100" cy="76" r="4" fill="#ABB2BF" />
                        <circle cx="100" cy="100" r="4" fill="#ABB2BF" />
                    </svg>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={cs('skills-content__outline-logo')}
                            width="128px"
                            height="128px"
                            viewBox="0 0 53 53"
                            fill="none"
                        >
                            <mask id="path-1-inside-1_64_1296" fill="white">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 14H13H26V27H13V40H26V53H13H0V40V27V14Z"
                                />
                            </mask>
                            <path
                                d="M0 14V13H-1V14H0ZM26 14H27V13H26V14ZM26 27V28H27V27H26ZM13 27V26H12V27H13ZM13 40H12V41H13V40ZM26 40H27V39H26V40ZM26 53V54H27V53H26ZM0 53H-1V54H0V53ZM13 13H0V15H13V13ZM26 13H13V15H26V13ZM27 27V14H25V27H27ZM13 28H26V26H13V28ZM14 40V27H12V40H14ZM13 41H26V39H13V41ZM25 40V53H27V40H25ZM26 52H13V54H26V52ZM0 54H13V52H0V54ZM-1 40V53H1V40H-1ZM-1 27V40H1V27H-1ZM-1 14V27H1V14H-1Z"
                                fill="#C778DD"
                                mask="url(#path-1-inside-1_64_1296)"
                            />
                            <mask
                                id="path-3-outside-2_64_1296"
                                maskUnits="userSpaceOnUse"
                                x="25"
                                y="0"
                                width="28"
                                height="41"
                                fill="black"
                            >
                                <rect fill="white" x="25" width="28" height="41" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M26 1H39H52V14V27V40H39H26V27H39V14H26V1Z"
                                />
                            </mask>
                            <path
                                d="M26 1V0H25V1H26ZM52 1H53V0H52V1ZM52 40V41H53V40H52ZM26 40H25V41H26V40ZM26 27V26H25V27H26ZM39 27V28H40V27H39ZM39 14H40V13H39V14ZM26 14H25V15H26V14ZM39 0H26V2H39V0ZM52 0H39V2H52V0ZM53 14V1H51V14H53ZM53 27V14H51V27H53ZM53 40V27H51V40H53ZM39 41H52V39H39V41ZM39 39H26V41H39V39ZM27 40V27H25V40H27ZM26 28H39V26H26V28ZM38 14V27H40V14H38ZM26 15H39V13H26V15ZM25 1V14H27V1H25Z"
                                fill="#C778DD"
                                mask="url(#path-3-outside-2_64_1296)"
                            />
                        </svg>
                        <svg
                            className={cs('skills-content__dot1')}
                            width="100%"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="4" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="100" r="4" fill="#ABB2BF" />
                        </svg>
                        <svg
                            className={cs('skills-content__dot2')}
                            width="100%"
                            viewBox="0 0 128 128"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="4" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="4" cy="124" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="28" cy="124" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="52" cy="124" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="76" cy="124" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="100" cy="124" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="4" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="28" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="52" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="76" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="100" r="4" fill="#ABB2BF" />
                            <circle cx="124" cy="124" r="4" fill="#ABB2BF" />
                        </svg>
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
