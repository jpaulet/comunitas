<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    const currentPath = this.$router.history.current.path;

    if (window.localStorage.getItem('authenticated') === 'false') {
      this.$router.push('/');
    }

    if (currentPath === '/' || currentPath === '/app'){
      this.$router.push('/app/landing');
    }

    if(currentPath === '/dao' || JSON.stringify(currentPath).indexOf('/dao') !== -1) {
      window.localStorage.setItem('authenticated', true);
      this.$router.push('/dao/dashboard');
    }

    this.$router.push(currentPath);

  },
};
</script>

<style src="./styles/theme.scss" lang="scss" />
