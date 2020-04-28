<template>
  <b-navbar class="header d-print-none app-header">
      <b-nav v-if="authenticated">
        <b-nav-item>
          <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
            <i class='la la-bars la-lg' />
          </a>
          <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
            <i class="la la-bars la-lg" />
          </a>
        </b-nav-item>
      </b-nav>
      <b-nav v-if="authenticated">
        <b-form class="d-sm-down-none ml-5" inline>
          <b-form-group>
            <b-input-group class="input-group-no-border">
              <template v-slot:prepend>
                <b-input-group-text><i class="la la-search"/></b-input-group-text>
              </template>
              <b-form-input id="search-input" placeholder="Search Dashboard" />
            </b-input-group>
          </b-form-group>
        </b-form>
      </b-nav>
      <a  class="navbarBrand d-md-none" v-if="authenticated">
        <i class="fa fa-circle text-primary mr-n-sm" />
        <i class="fa fa-circle text-danger" />
        &nbsp;
        communitas
        &nbsp;
        <i class="fa fa-circle text-danger mr-n-sm" />
        <i class="fa fa-circle text-primary" />
      </a>

      <b-nav class="ml-auto" v-if="authenticated">
        <b-nav-item>
          <a href="http://localhost:3000/#/app/newDAO" @click='redirectNewDAO' class="nav-link btn btn-primary px-4 newDAO" style="outline: currentcolor none medium; display: inline-block;color:#fff;border:1px solid #eee;height:38px;border-radius:8px;border:0px;z-index:99999999;">
            <i class="fa fa-cubes mr-2"></i> Create New Organization
          </a>
        </b-nav-item>
      </b-nav>
    
      <b-nav class="ml-auto" v-if="authenticated">
        <b-nav-item-dropdown
          class="notificationsMenu d-md-down-none mr-2"
          menu-class="notificationsWrapper py-0 animated animated-fast fadeIn"
          right>
          <template slot="button-content">
            <span class="avatar rounded-circle thumb-sm float-left mr-2">
              <img class="rounded-circle" src="../../assets/people/a5.jpg" alt="..." />
            </span>
            <span class="small">Philip Smith</span>
            <span class="ml-1 circle bg-primary text-white fw-bold">13</span>
          </template>
          <Notifications />
        </b-nav-item-dropdown>
        <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
          <template slot="button-content">
            <i class="la la-cog px-2" />
          </template>
          <b-dropdown-item><i class="la la-user" /> My Account</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item>Calendar</b-dropdown-item>
          <b-dropdown-item>
            Inbox &nbsp;&nbsp;<b-badge variant="danger" pill class="animated bounceIn">9</b-badge>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item-button @click="logout">
            <i class="la la-sign-out" /> Log Out
          </b-dropdown-item-button>
        </b-nav-item-dropdown>
      </b-nav>

      <b-nav class="navbar navbar-expand-md" v-else style='position:absolute;right:50px;width:95%;'>
          <a class="navbar-brand" style='margin:0px 40px;' href='#/app/landing'>
            <h2 style='color:#000;'>commünitäs</h2>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class='navbar-nav m-auto'>
            <a class="nav-link mr-5" href="#/app/projectso" style="outline: currentcolor none medium; display: inline-block;color:#000;">PROJECTS</a>
            <a class="nav-link mr-5" href="#/app/newDAO" style="outline: currentcolor none medium; display: inline-block;color:#000;">Be a COMMUNER</a>
            <a class="nav-link mr-5" href="#/app/team" style="outline: currentcolor none medium; display: inline-block;color:#000;">TEAM</a>

            <a class="nav-link btn btn-light px-4" href="#/dao/dashboard" style="outline: currentcolor none medium; display: inline-block;color:#000;border:1px solid #eee;">Demo</a>
          </div>

          <div class="fr-element fr-view" dir="auto" aria-disabled="false" spellcheck="true" contenteditable="true" style='margin:0px 40px;'>
            <ul class="navbar-nav ml-auto">
              <li v-if='wallet === null && metamaskInfo === null'>
                <button class='btn btn-primary' @click='connectAccount'><i class='fa fa-bolt'></i> Connect Account</button>
                <vue-metamask v-if='userClickedConnectAccount' userMessage="msg" @onComplete="onComplete"></vue-metamask>
              </li>
              <li v-else>
                <button class='btn btn-success'>
                  <jazzicon :address="wallet" :diameter="22" style='display:inline;' />
                  <div style='display:inline;margin-left:8px;'>
                    <i class='fa fa-check'></i> <span style='font-size:9px;'>{{wallet}}</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
      </b-nav>
    
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notifications from '@/components/Notifications/Notifications';
import VueMetamask from 'vue-metamask';
import Jazzicon from 'vue-jazzicon';

export default {
  name: 'Header',
  components: { Notifications, VueMetamask, Jazzicon },
  data(){
      return {
          metamaskInfo: null,
          userClickedConnectAccount: false,
          msg: "Connect your Metamask account to the Communitas Platform",
          wallet: null,
      }
  },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic']),
    authenticated: function() {
      var authenticated = window.localStorage.getItem('authenticated') === 'false';
      var path = JSON.stringify(this.$router.history.current.path).indexOf('/dao') === -1;
      return !(authenticated || path);
    },    
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      window.localStorage.setItem('authenticated', false);
      this.$router.push('/login');
    },
    onComplete(data){
        this.userClickedConnectAccount = false;
        this.metamaskInfo = data;
        this.metamaskInfo.web3.eth.getAccounts((error, accounts) => {
          if(accounts[0] && typeof accounts[0] !== 'undefined'){
            this.wallet = accounts[0];        
          }
        });
    },
    connectAccount(){
      if(this.metamaskInfo===null && window.web3 && window.web3.currentProvider.isMetaMask){
        this.userClickedConnectAccount = true;
      }else{
        this.$toasted.show("MetaMask account not detected :(. You should install MetaMask");
      }
    },
    redirectNewDAO(){
      this.$router.push('/app/newDAO');
    }
  },
  mounted() {
    // Check if Web3 has been injected by the browser (MetaMask).
    // (since 'web3' is global, we need to use 'window')
    if (window.web3 && window.web3.currentProvider.isMetaMask) {
      window.web3.eth.getAccounts((error, accounts) => {
        if(accounts[0] && typeof accounts[0] !== 'undefined'){
          this.wallet = accounts[0];        
        }
      });
    } else {
      this.$toasted.show("MetaMask account not detected :(. \nYou should install MetaMask");
    }
  }
};
</script>

<style scoped>
.app-header.navbar .nav .nav-item .nav-link > a:hover{
  background: rgb(0, 87, 146) !important;
}
  .newDao:hover{
    background: rgb(0, 87, 146) !important;
  }
</style>

<style src="./Header.scss" lang="scss"></style>
