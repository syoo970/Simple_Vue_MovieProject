<template>
  <b-card
    :title="title"
    :img-src="img"
    img-alt="card Image"
    img-top
  >
    <b-card-text>
      <slot />
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
      title: {
          type: String,
          default: '',
      },
      img: {
          type: String,
          default: '',
      }
  }  
};
</script>