<template>
<div :class="[{root: true, sidebarClose, sidebarStatic}, 'sing-dashboard']">
  <div class="">
    <Header />
    <v-touch class="content" @swipe="handleSwipe" :swipe-options="{direction: 'horizontal'}">
      <transition name="router-animation">
        <router-view />
      </transition>
      <footer class="contentFooter row" style='width:100%;'>
        <div class='col-4'>Communitas 2020 - All Rights Reserved</div>
        <div class='col-8'>
          <ul class="nav justify-content-lg-end justify-content-center mr-5">
              <li class="nav-item"><a class="nav-link" href="" style="outline: currentcolor none medium; display: inline-block;color:#000;">Privacy</a></li>
              <li class="nav-item"><a class="nav-link" href="" style="outline: currentcolor none medium; display: inline-block;color:#000;">Terms</a></li>
              <li class="nav-item"><a class="nav-link" href="" style="outline: currentcolor none medium; display: inline-block;color:#000;">About</a></li>
          </ul>
      </div>
      </footer>
    </v-touch>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('layout');

import Header from '@/components/Header/Header';
import Helper from '@/components/Helper/Helper';
import BreadcrumbHistory from '@/components/BreadcrumbHistory/BreadcrumbHistory';

import './Layout.scss';

export default {
  name: 'LayoutApp',
  components: { Header, Helper, BreadcrumbHistory },
  methods: {
    ...mapActions(['switchSidebar', 'handleSwipe', 'changeSidebarActive', 'toggleSidebar'],
    ),
    handleWindowResize() {
      const width = window.innerWidth;

      if (width <= 768 && this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      }
    },
  },
  computed: {
    ...mapState(["sidebarClose", "sidebarStatic"]),
  },
  created() {
    const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'));

    if (staticSidebar) {
      this.$store.state.layout.sidebarStatic = true;
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }, 2500);
    }

    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
