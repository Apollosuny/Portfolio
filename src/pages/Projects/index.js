import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import Project from '~/components/Project';
import projects_data from '~/data/projects';
import { smallProject } from '~/data/projects';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Projects() {
    const { t } = useTranslation();
    return (
        <>
            <div className={cx('path')}>
                <h1 className={cx('path__name')}>projects</h1>
                <p className={cx('path__desc')}>{t('Projects.desc')}</p>
            </div>
            <div className={cx('decent')}>
                <h2 className={cx('h2')}>decent</h2>
                <div className={cx('project-list')}>
                    {projects_data.map((project, index) => (
                        <Project
                            key={index}
                            image={project.image}
                            projectTechUsed={project.projectTechUsed}
                            projectContent={project.projectContent}
                            projectLinks={project.projectLinks}
                        />
                    ))}
                </div>
            </div>
            <div className={cx('small')}>
                <h2 className={cx('h2')}>small</h2>
                <div className={cx('project-list')}>
                    {smallProject.map((project, index) => (
                        <Project
                            key={index}
                            image={project.image}
                            projectTechUsed={project.projectTechUsed}
                            projectContent={project.projectContent}
                            projectLinks={project.projectLinks}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
