<template>
  <header>
    <h1>Y's Movie</h1>
    <form @submit="onSubmit">
      <input v-model="searchValue">
      <button>검색!</button>
    </form>  
  </header>
</template>

<script>
    export default {
        data() {
            return {
                searchValue: '',
            };
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                this.$router.push({ name: 'movielist' , params: { name: this.searchValue, page: 1}});
                this.searchValue = '';
            }
        }
    };
</script>

<Style lang="scss" scoped>
   header {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       background-color: #f5f5f5;
       background: #141414;
       h1 {
           color: white;
       }
   }
</Style>