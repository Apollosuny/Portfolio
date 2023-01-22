import classNames from 'classnames';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Link to="/" id="home" className={classNames('page', 'active')} onClick={(e) => handleActive(e)}>
                <span className={classNames('hashtag')}>#</span>
                home
            </Link>
            <Link to="/projects" id="project" className={classNames('page')} onClick={(e) => handleActive(e)}>
                <span className={classNames('hashtag')}>#</span>
                projects
            </Link>
            <Link to="/about" id="about" className={classNames('page')} onClick={(e) => handleActive(e)}>
                <span className={classNames('hashtag')}>#</span>
                about-me
            </Link>
        </>
    );
}

// temporary solution
let handleActive = (e) => {
    let page = 'home';
    let home = document.getElementById('home');
    let project = document.getElementById('project');
    let about = document.getElementById('about');

    if ((page = 'home')) {
        if (e.target.id === 'project') {
            project.classList.add('active');
            home.classList.remove('active');
            page = 'project';
        } else if (e.target.id === 'about') {
            about.classList.add('active');
            home.classList.remove('active');
            page = 'about';
        }
    }

    if ((page = 'about')) {
        if (e.target.id === 'home') {
            home.classList.add('active');
            about.classList.remove('active');
            page = 'home';
        }
        if (e.target.id === 'project') {
            project.classList.add('active');
            about.classList.remove('active');
            page = 'project';
        }
    }

    if ((page = 'project')) {
        if (e.target.id === 'home') {
            home.classList.add('active');
            project.classList.remove('active');
            page = 'home';
        }
        if (e.target.id === 'about') {
            about.classList.add('active');
            project.classList.remove('active');
            page = 'about';
        }
    }
};

export default Navbar;
