<template>
  <div class="main--home">
    <h1>Welcome to Y's Movie!!</h1>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Smooch&display=swap');
  .main {
    &--home {
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, transparent , #141414), url(https://vuemovie.s3.ap-northeast-2.amazonaws.com/netflix-background-128505-385441-537479.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-family: 'Smooch', cursive;
        color: white;
        font-size: 5rem;
      }
    }
  }
</style>