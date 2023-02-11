import classNames from 'classnames';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <NavLink to="/" id="home" className={classNames('page')}>
                <span className={classNames('hashtag')}>#</span>
                home
            </NavLink>
            <NavLink to="/projects" id="project" className={classNames('page')}>
                <span className={classNames('hashtag')}>#</span>
                projects
            </NavLink>
            <NavLink to="/about" id="about" className={classNames('page')}>
                <span className={classNames('hashtag')}>#</span>
                about-me
            </NavLink>
            <NavLink to="/contact" id="contact" className={classNames('page')}>
                <span className={classNames('hashtag')}>#</span>
                contact
            </NavLink>
        </>
    );
}

export default Navbar;
