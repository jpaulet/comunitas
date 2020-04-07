<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/dao"><span class="primary-word">Demo</span> DAO</router-link>
      </header>
      <ul class="nav pt-0">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/dao/dashboard"
            iconName="fa fa-dashboard"
            index="dashboard"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Agora"
            link="/dao/agora"
            iconName="fa fa-bank"
            index="agora"
            isHeader
            :childrenLinks="[
              { header: 'Timeline', link: '/dao/agora/timeline' },
              { header: 'Documents', link: '/dao/agora/documents' },
              { header: 'Tasks', link: '/dao/agora/tasks' },
              { header: 'Forum', link: '/dao/agora/forum' },                            
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Voting"
            link="/dao/voting"
            iconName="fa fa-sliders"
            index="voting"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Commonwealth"
            link="/dao/commonwealth"
            iconName="fa fa-money"
            index="commonwealth"
            isHeader
            :childrenLinks="[
              { header: 'Finance', link: '/dao/commonwealth/finance' },
              { header: 'Pool', link: '/dao/commonwealth/pool' },
              { header: 'Tokens', link: '/dao/commonwealth/tokens' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="Court"
            link="/dao/court"
            iconName="fa fa-gavel"
            index="court"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Notifications"
            link="/dao/notifications"
            iconName="glyphicon glyphicon-bullhorn"
            index="notifications"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Membership"
            link="/dao/membership"
            iconName="fa fa-group"
            index="Membership"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Community"
            link="/dao/components"
            iconName="fi flaticon-network"
            index="components"
            :childrenLinks="[
              { header: 'Charts', link: '/dao/components/charts' },
              { header: 'Icons', link: '/dao/components/icons' },
              { header: 'Maps', link: '/dao/components/maps' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="AppCenter"
            link="/dao/messages"
            iconName="fa fa-cubes"
            index="messages"
            isHeader
        />
      </ul>
      <p>
      <h5 class="navTitle">
        DAO PROJECTS
        <a class="actionLink">
          <i class="la la-plus float-right"/>
        </a>
      </h5>
      <ul class="sidebarLabels">
        <li>
          <a href="#">
            <i class="fa fa-circle text-danger mr-2"/>
            <span class="labelName">CoHousing Madrid</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle text-primary mr-2"/>
            <span class="labelName">NFT Hostel (NY)</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-circle mr-2"/>
            <span class="labelName">Elderly Residency (Bcn)</span>
          </a>
        </li>
      </ul>
      <!--
      <h5 class="navTitle">
        PROJECTS
      </h5>
      <div class="sidebarAlerts">
        <b-alert
            v-for="alert in alerts"
            :key="alert.id"
            class="sidebarAlert" variant="transparent"
            show dismissible
        >
          <span>{{alert.title}}</span><br/>
          <b-progress class="sidebarProgress progress-xs mt-1"
                      :variant="alert.color" :value="alert.value" :max="100"/>
          <small>{{alert.footer}}</small>
        </b-alert>
      </div>
      -->
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
