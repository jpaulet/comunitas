import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import LayoutApp from '@/components/Layout/LayoutApp';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';

// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';

// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';

//New Routings

//APP 
//import Landing from '@/pages/App/Landing';
import Landing2 from '@/pages/App/Landing2';
//import Projects from '@/pages/App/Projects';
import Projects2 from '@/pages/App/Projects2';
import NewDAO from '@/pages/App/NewDAO';
import Team from '@/pages/App/Team';

//AGORA
import Timeline from '@/pages/Agora/Timeline';
import Documents from '@/pages/Agora/Documents';
import Tasks from '@/pages/Agora/Tasks';
import Forum from '@/pages/Agora/Forum';

//Voting
import Voting from '@/pages/Voting/Voting';
import VotingDetail from '@/pages/Voting/VotingDetail';

import Membership from '@/pages/Membership/Membership';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'LayoutApp',
      component: LayoutApp,
      children: [
        {
          path: 'projects',
          name: 'Projects',
          component: Projects2,
        },
        /*
        {
          path: 'projects2',
          name: 'Projects2',
          component: Projects2,
        },
        */
        {
          path: 'landing',
          name: 'landing',
          component: Landing2,
        },
        /*
        {
          path: 'landing2',
          name: 'landing2',
          component: Landing2,
        },
        */
        {
          path: 'newDAO',
          name: 'newDAO',
          component: NewDAO
        },
        {
          path: 'Team',
          name: 'Team',
          component: Team
        }
      ]
    },
    {
      path: '/dao',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        {
          path: 'membership',
          name: 'Membership',
          component: Membership,
        },
        {
          path: 'agora/timeline',
          name: 'Timeline',
          component: Timeline,
        },
        {
          path: 'agora/documents',
          name: 'Documents',
          component: Documents,
        },
        {
          path: 'agora/tasks',
          name: 'Tasks',
          component: Tasks,
        },
        {
          path: 'agora/forum',
          name: 'Forum',
          component: Forum,
        },
        {
          path: 'voting',
          name: 'Voting',
          component: Voting,
        },
        {
          path: 'voting/41',
          name: 'VotingDetail',
          component: VotingDetail,
        },
      ],
    },
  ],
});
