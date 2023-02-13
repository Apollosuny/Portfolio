import classNames from 'classnames/bind';
import styles from './About.module.scss';
import images from '~/assets/images';
import SkillBox from '~/components/SkillBox';
import { skills, tools } from '~/data/skills';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function About() {
    const { t } = useTranslation();
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
                    <p className={cx('about__desc')}>{t('About.desc.part1')}</p>
                    <p className={cx('about__desc')}>{t('About.desc.part2')}</p>
                    <p className={cx('about__desc')}>{t('About.desc.part3')}</p>
                </div>
            </div>
            <div className={cx('skills')}>
                <h2 className={cx('h2')}>skills</h2>
                <div className={cx('skill-content')}>
                    <h3>
                        Some of my <strong>skills</strong>
                    </h3>
                    <div className={cx('my-skills')}>
                        {skills.map((skill, index) => (
                            <SkillBox key={index} image={skill.image} name={skill.name} />
                        ))}
                    </div>
                    <h3>
                        <strong>Tools</strong> I use
                    </h3>
                    <div className={cx('tools')}>
                        {tools.map((skill, index) => (
                            <SkillBox key={index} image={skill.image} name={skill.name} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('facts')}>
                <h2 className={cx('h2')}>fun-facts</h2>
                <div className={cx('fun-facts')}>
                    <div className={cx('fact')}>{t('About.fun-facts.fact1')}</div>
                    <div className={cx('fact')}>{t('About.fun-facts.fact2')}</div>
                    <div className={cx('fact')}>{t('About.fun-facts.fact3')}</div>
                    <div className={cx('fact')}>{t('About.fun-facts.fact4')}</div>
                    <div className={cx('fact')}>{t('About.fun-facts.fact5')}</div>
                    <div className={cx('fact')}>{t('About.fun-facts.fact6')}</div>
                </div>
            </div>
        </>
    );
}

export default About;
