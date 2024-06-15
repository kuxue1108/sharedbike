<template>
  <div>
    <!-- <h1>
      {{ message }}
    </h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ElementView from './views/Element/ElementView.vue';
export default {
  components: { /*ElementView*/ },
  data() {
    return{
      message:"Hello Vue"
    }
  },
  methods:{

  }
};
</script>

<style>

</style>