import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Project({ image, projectTechUsed, projectContent, projectLinks }) {
    return (
        <div className={cx('project', 'col-lg-4', 'col-lg-6', 'col-lg-12')}>
            {image === '' ? (
                <></>
            ) : (
                <div className={cx('project_image-box')}>
                    <img src={image} alt="" className={cx('project_image')} />
                </div>
            )}
            <ul className={cx('project_techs')}>
                {projectTechUsed.map((tech, index) => (
                    <li key={index} className={cx('project_techs-item')}>
                        {tech}
                    </li>
                ))}
            </ul>
            <div className={cx('project_content')}>
                <div className={cx('project_content-name')}>{projectContent.name}</div>
                <div
                    id="project_content-desc"
                    className={cx('project_content-desc', {
                        oneLine: projectContent.desc.length > 28 ? false : true,
                    })}
                >
                    {projectContent.desc}
                </div>
                <div className={cx('project_content-links')}>
                    {projectLinks.map((link, index) => (
                        <Button key={index} href={link.href}>
                            {link.btn_name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
