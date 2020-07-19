<template>
  <div id="header" :class="{scroll:isScroll}">
    <el-header id="header_inner">
      <img src="@/assets/images/layout/header_logo.png" class="logo" />
      <el-menu
        background-color="transparent"
        text-color="#fff"
        active-text-color="#006aff"
        :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-submenu index="1">
          <template slot="title">平台</template>
          <el-menu-item index="1-1">平台总览</el-menu-item>
          <el-menu-item index="1-2">特性</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">解决方案</template>
          <el-menu-item index="2-1">解决方案1</el-menu-item>
          <el-menu-item index="2-2">解决方案2</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">联合实验室</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>
      </el-menu>
      <button class="contact">联系我们</button>
    </el-header>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isScroll: false,
      scrollTop: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleScorll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop >= 80
      ) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScorll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScorll);
  },
  mounted() {}
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 999;
}

#header_inner {
  width: 1200px;
  height: 100% !important;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
}

#header_inner img.logo {
  margin-right: 90px;
}

#header_inner .menu {
  border: none;
}

#header_inner .contact {
  width: 110px;
  height: 41px;
  border-radius: 4px;
  border: solid 2px #006aff;
  color: #006aff;
  background-color: transparent;
  margin-left: auto;
}

.scroll {
  background-color: rgba(0, 0, 0, 1) !important;
}
</style>