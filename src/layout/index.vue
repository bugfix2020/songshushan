<template>
  <div>
    <el-container direction="vertical">
      <layout-header />
      <div id="main">
        <router-view></router-view>
      </div>
      <layout-footer />
    </el-container>
  </div>
</template>

<script>
import LayoutHeader from "@/layout/header";
import LayoutFooter from "@/layout/footer";

export default {
  components: { LayoutHeader, LayoutFooter },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
#main{
  padding: 0;
}
</style>