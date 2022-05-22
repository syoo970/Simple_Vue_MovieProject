<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from '~/components/Header';

export default {
  components: {
      Header,
  }
};
</script>

<style lang="scss">
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
      flex-basis: 20%;
    }
    main {
      flex-grow: 1;
      background: linear-gradient(to bottom, #141414, transparent), url(https://vuemovie.s3.ap-northeast-2.amazonaws.com/curtain-1275200_1280.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>