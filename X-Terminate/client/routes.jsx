import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from  './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import ResolutionDetail from  './resolutions/ResolutionDetail.jsx';

FlowRouter.route('/workshops', {
    action () {
        mount(MainLayout, {
            content:(<ResolutionsWrapper />)
        })
    }
});

FlowRouter.route('/', {
    action () {
        mount(MainLayout, {
            content:(<Home />)
        })
    }
});

FlowRouter.route('/about', {
    action () {
        mount(MainLayout, {
            content:(<About />)
        })
    }
});

FlowRouter.route('/resolutions/:id', {
    action (params) {
        mount(MainLayout, {
            content:(<ResolutionDetail id={params.id} />)
        })
    }
});






//On a fait la suppression des packages inscure et autopublish 