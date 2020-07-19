<template>
  <div id="footer">
    <el-footer id="footer_inner">
      <div class="top">
        <ul>
          <li class="title">行业服务</li>
          <li class="item">银行业</li>
          <li class="item">保险业</li>
          <li class="item">医疗业</li>
          <li class="item">零售业</li>
          <li class="item">天气服务</li>
        </ul>
        <ul>
          <li class="title">场景案例</li>
          <li class="item">支付风控应用</li>
          <li class="item">人工智能标签</li>
          <li class="item">投资管理</li>
          <li class="item">企业知识图谱</li>
        </ul>
        <ul>
          <li class="title">关于我们</li>
          <li class="item">松鼠山科技</li>
          <li class="item">联合实验室</li>
          <li class="item">新闻中心</li>
          <li class="item">平台介绍</li>
        </ul>
        <ul>
          <li class="title">联系我们</li>
          <li class="item">+86-10-85298781</li>
          <li class="item">在线留言</li>
          <li class="item">info@sqhtes.ch.com</li>
          <li class="item">北京市朝阳区农展馆13号瑞辰国际中心502</li>
        </ul>
        <div class="info">
          <img src="@/assets/images/layout/footer_logo.png" class="logo" />
        </div>
      </div>
      <div class="bottom">
        <p>Copyright @ 2020 SQH Tech. All Rights Reserved.</p>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  components: {},
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
#footer {
  width: 100%;
  height: 442px;
  background-color: #010b20;
}

#footer_inner {
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  height: auto!important;
}

#footer_inner > div.top {
  padding-top: 50px;
  padding-bottom: 140px;
  display: flex;
}

#footer_inner > div.top ul {
  margin-right: 128px;
  white-space: nowrap;
}

#footer_inner div.top ul li.title {
  height: 28px;
  font-family: PingFangSC;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 27px;
}

#footer_inner div.top ul li.item {
  height: 20px;
  opacity: 0.7;
  font-family: PingFangSC;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  margin-bottom: 8px;
}

#footer_inner div.top div.info {
  text-align: center;
}

#footer_inner div.bottom {
  border-top: 1px solid #4b4d59;
}

#footer_inner div.bottom p {
  text-align: center;
  height: 56px;
  line-height: 56px;
  color: #fff;
  opacity: 0.6;
}
</style>