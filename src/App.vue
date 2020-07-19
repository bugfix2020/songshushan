<template>
  <div id="app">
    <router-view class="appView"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: auto;
}
.appView {
  position: absolute;
  width: 100%;
  transition: opacity 0.3s ease-out;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-active {
  transform: translate(-50%, 0);
}
.slide-right-enter {
  transform: translate(-50%, 0);
}
.slide-right-leave-active {
  transform: translate(100%, 0);
}
</style>
