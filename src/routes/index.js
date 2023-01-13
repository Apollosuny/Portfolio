import Home from '~/pages/Home';
import Projects from '~/pages/Projects';
import About from '~/pages/About';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
