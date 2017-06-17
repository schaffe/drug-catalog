<template>
  <div id="app">
    <header class="menu">
      <div class="menu-item menu-item__logo"><h1>Lulu</h1></div>
      <div class="menu-item menu-item__nav">Manage</div>
      <div class="menu-item menu-item__nav" @click="create()">Create</div>
    </header>
    <!--<h1>{{message}}</h1>-->
    <drugs-list></drugs-list>
  </div>
</template>

<script>
import drugsList from './assets/js/components/DrugsList.vue';
export default {
  name: 'app',
  components: {
    drugsList
  },
}
</script>
<style scoped lang="scss">
$hunter-green: #121810;
$seaweed: #2F3C16;
$finch: #616244;
$tallow: #a9a389;
$bud: #a6afa1;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $hunter-green;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
}
  .menu {
    height: 50px;
    background-color: $finch;
    color: $tallow;
    //-background-color: $bud;
    &:after {
      content: '';
      height: 0;
      display: block;
      clear: both;
    }
    &-item {
      padding: 0 15px;
      line-height: 50px;
      text-transform: uppercase;
      font-size: .8em;
      &:hover {
        color: $seaweed;
        cursor: pointer;
      }
      &__logo {
        float: left;
        font-size: 1.2em;
      }
      &__nav {
        float: right;
      }
    }
  }
</style>
