<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    let pushed = false;
    const currentPath = this.$router.history.current.path;
    alert(currentPath);

    if (window.localStorage.getItem('authenticated') === 'false') {
      alert('dddd');
      pushed = true;
      this.$router.push('/');
    }

    if (currentPath === '/' || currentPath === '/app' || currentPath === '#'){
      alert('aaaaa');
      pushed = true;
      this.$router.push('/app/landing');
    }

    if(currentPath === '/dao' || JSON.stringify(currentPath).indexOf('/dao') !== -1) {
      alert('dao');
      pushed = true;
      window.localStorage.setItem('authenticated', true);
      this.$router.push('/dao/dashboard');
    }

    if(!pushed){
      alert('current path: '+currentPath);
      this.$router.push(currentPath);
    }
  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
