import classNames from 'classnames/bind';
import styles from './SkillBox.module.scss';

const cx = classNames.bind(styles);

function SkillBox({ image, name }) {
    return (
        <div className={cx('tech-icon')}>
            <img src={image} alt="Tech-icon" className={cx('tech-icon__image')} />
            <h6 className={cx('tech-icon__name')}>{name}</h6>
        </div>
    );
}

export default SkillBox;
