import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Projects() {
    return (
        <>
            <div className={cx('path')}>
                <h1 className={cx('path__name')}>projects</h1>
                <p className={cx('path__desc')}>All of my project</p>
            </div>
            <div className={cx('decent')}>
                <h2 className={cx('h2')}>decent</h2>
                <div className={cx('project')}>
                    <div className={cx('project-item')}>
                        <img src={images.project1} alt="project1" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Flask</li>
                            <li className={cx('project-item__tech')}>Python</li>
                            <li className={cx('project-item__tech')}>SCSS</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>ChertNodes</h2>
                            <p className={cx('project-item__desc')}>Minecraft servers hosting</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://chernodes.ru/">Live =&gt;</Button>
                                <Button href="https://figma.com/community/file/1149829028455305659">Figma =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <img src={images.project2} alt="project2" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Express</li>
                            <li className={cx('project-item__tech')}>Node.js</li>
                            <li className={cx('project-item__tech')}>React</li>
                            <li className={cx('project-item__tech')}>RTK</li>
                            <li className={cx('project-item__tech')}>Discord.js</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>ProtectX web</h2>
                            <p className={cx('project-item__desc')}>Discord anti-crash bot</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://isecurity-protectx.tk/">Live =&gt;</Button>
                                <Button href="https://figma.com/community/file/1168662007492356291">Figma =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <img src={images.project3} alt="project3" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Express</li>
                            <li className={cx('project-item__tech')}>Node.js</li>
                            <li className={cx('project-item__tech')}>EJS</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>Kahoot Answers</h2>
                            <p className={cx('project-item__desc')}>Get answers from kahoot quiz</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Live =&gt;</Button>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <img src={images.project4} alt="project4" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>HTML</li>
                            <li className={cx('project-item__tech')}>CSS</li>
                            <li className={cx('project-item__tech')}>JavaScript</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>KotikBot</h2>
                            <p className={cx('project-item__desc')}>Landing for multi-funtional cute discord bot</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Live =&gt;</Button>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <img src={images.project5} alt="project5" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>SASS</li>
                            <li className={cx('project-item__tech')}>HTML</li>
                            <li className={cx('project-item__tech')}>JavaScript</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>This Portfolio</h2>
                            <p className={cx('project-item__desc')}>My personal portfolio</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Figma =&gt;</Button>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <img src={images.project6} alt="project6" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Pug</li>
                            <li className={cx('project-item__tech')}>Less</li>
                            <li className={cx('project-item__tech')}>Gulp</li>
                            <li className={cx('project-item__tech')}>Node.js</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>MadHost</h2>
                            <p className={cx('project-item__desc')}>Minecraft and websites hosting with low prices</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Live =&gt;</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('small')}>
                <h2 className={cx('h2')}>small</h2>
                <div className={cx('project')}>
                    <div className={cx('project-item')}>
                        <img src={images.smallProject} alt="Small Project" className={cx('project-item__image')} />
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Vue</li>
                            <li className={cx('project-item__tech')}>SCSS</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>My blog</h2>
                            <p className={cx('project-item__desc')}>Front-end of my future blog website</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Discord.js</li>
                            <li className={cx('project-item__tech')}>Node.js</li>
                            <li className={cx('project-item__tech')}>TypeScript</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>Discord Bot Boilerplate</h2>
                            <p className={cx('project-item__desc')}>
                                Start creating scalable discord.js bot with typescript in seconds
                            </p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Github =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Figma</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>Chess PRO</h2>
                            <p className={cx('project-item__desc')}>
                                Landing page about service for viewing chess tournaments
                            </p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://github.com/EliasDevis/kahoot-answers">Figma =&gt;</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('project-item')}>
                        <ul className={cx('project-item__techs')}>
                            <li className={cx('project-item__tech')}>Python</li>
                            <li className={cx('project-item__tech')}>Flask</li>
                        </ul>
                        <div className={cx('project-item__content')}>
                            <h2 className={cx('project-item__name')}>Ooku</h2>
                            <p className={cx('project-item__desc')}>Link shortener with discord auth</p>
                            <div className={cx('project-item__links')}>
                                <Button href="https://khanswers.vercel.app/">Live =&gt;</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
