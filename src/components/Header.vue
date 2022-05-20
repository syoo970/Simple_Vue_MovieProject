<template>
  <h1>Y's Movie</h1>
  <form @submit="onSubmit">
    <input v-model="searchValue">
    <button>검색!</button>
  </form>
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
            }
        }
    };
</script>

<Style lang="scss" scoped>
   h1 {
    color: red;
   } 
</Style>