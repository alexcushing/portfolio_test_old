import Router from 'routr';

import Home from 'app/components/pages/Home';
import Skills from 'app/components/pages/Skills';
import Projects from 'app/components/pages/Projects';
import About from 'app/components/pages/About';

const router = new Router({
  index: {
    path: '/',
    method: 'get',
    component: Home
  },
  about: {
    path: '/about',
    method: 'get',
    component: About,
    action: 'AboutActions'
  },
  skills: {
    path: '/skills',
    method: 'get',
    component: Skills,
    action: 'AboutActions'
  },
  projects: {
    path: '/projects',
    method: 'get',
    component: Projects,
    action: 'AboutActions'
  }
});

export default router;
