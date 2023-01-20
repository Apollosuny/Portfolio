import Home from '~/pages/Home';
import Projects from '~/pages/Projects';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
