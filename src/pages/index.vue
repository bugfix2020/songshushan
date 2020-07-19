<template>
  <el-main id="main_inner">
    <!-- banner -->
    <div class="banner">
      <div class="banner_inner">
        <p class="title">CDE认知发现引擎</p>
        <p class="little_title">全球领先的认知智能平台服务商</p>
        <a href="javascirpt:;">立即体验</a>
      </div>
      <div class="menu">
        <div class="menu_inner">
          <div class="news">
            <p class="title">最新消息</p>
            <p class="content">CDE系统最全的步骤解析，每一步都对认知更近一步</p>
          </div>
          <div class="box">
            <div class="item active">
              <img src="@/assets/images/index/menu_icon_1.png" class="icon" />
              <div>
                <p class="title">最新消息</p>
                <p class="content">CDE系统最全的步骤解析，每一步都对认知…</p>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/images/index/menu_icon_2.png" class="icon" />
              <div>
                <p class="title">全新场景</p>
                <p class="content">CDE系统针对医疗行业设计</p>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/images/index/menu_icon_3.png" class="icon" />
              <div>
                <p class="title">特色资源</p>
                <p class="content">松鼠山科技与世界四大评级机构惠誉达成合作</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 引擎 -->
    <div class="engine">
      <p class="title">
        CDE
        <span>认知发现引擎</span>
      </p>
      <p class="content">
        <strong>Congnitive Discoveer Engine</strong>
        即认知发现引擎，认知赋予系统人的智慧，彰显人工智能的核心理念，引擎是我们的追求也是我们的理念，我们希望系统像引擎一样，牵引着人工智能体系不断前进，认知发现引擎将是我们探索新领域的巨大动力来源。
      </p>
    </div>

    <!-- 引擎动态效果 -->
    <div class="engine_process">
      <p class="title">CDE引擎如何交付企业AI</p>
      <p class="little_title">CDE引擎提供了先进的企业AI平台，该平台使数据科学民主化，并自动化了端到端流程，以大规模构建，部署和维护人工智能和机器学习</p>
      <img src="@/assets/images/index/engine_process.png" />
      <img src="@/assets/images/index/engine_process_split.png" class="split" />
    </div>

    <!-- 使用场景 -->
    <div class="scene">
      <div class="scene_inner">
        <p class="title">使用场景</p>
        <div class="img_box">
          <div>
            <img
              :src="src('insurance')"
              @mouseenter="mouseenter('insurance')"
              @mouseleave="mouseleave('insurance')"
              ref="insurance"
            />
            <img
              :src="src('healthcare')"
              @mouseenter="mouseenter('healthcare')"
              @mouseleave="mouseleave('healthcare')"
              ref="healthcare"
            />
            <img
              :src="src('manufacture')"
              @mouseenter="mouseenter('manufacture')"
              @mouseleave="mouseleave('manufacture')"
              ref="manufacture"
            />
            <img
              :src="src('retail')"
              @mouseenter="mouseenter('retail')"
              @mouseleave="mouseleave('retail')"
              ref="retail"
            />
          </div>
          <div>
            <img
              :src="src('bank')"
              @mouseenter="mouseenter('bank')"
              @mouseleave="mouseleave('bank')"
              ref="bank"
            />
            <img
              :src="src('financialMarket')"
              @mouseenter="mouseenter('financialMarket')"
              @mouseleave="mouseleave('financialMarket')"
              ref="financialMarket"
            />
          </div>
          <div class="bg"></div>
        </div>
      </div>
    </div>

    <!-- 认知&发现 -->
    <div class="cognition">
      <div class="cognition_inner">
        <p class="title">认知&发现</p>
        <div class="tabs">
          <div class="tab_title">
            <p>
              <span :class="{active : tab == 0}" @click="tab = 0">认知准备</span>
            </p>
            <p>
              <span :class="{active : tab == 1}" @click="tab = 1">认知加工</span>
            </p>
            <p>
              <span :class="{active : tab == 2}" @click="tab = 2">认知计算</span>
            </p>
          </div>
          <div class="tab_content" ref="tabContent">
            <div>
              <p>一种数据载入方法、系统。可处理结构化数据、非结构化数据、时序数据、感知智能数据等等。高质量的数据集是高精度模型的基础，也是认知准备环节的核心目标。</p>
              <img src="@/assets/images/index/cognition_tab_1.png" />
            </div>
            <div>
              <p>包含知识库构建方法及装置，知识库更新方法及装置，面向异构数据的数据管理方法及装置。涵盖元素抽取、知识库构建、探索性分析、描述性分析、特征工程、特征值选择等。</p>
              <img src="@/assets/images/index/cognition_tab_2.png" />
            </div>
            <div>
              <p>包括基于Swq2Seq模型的SparOL预测方法，基于深度学习的图数据库自适应检索方法，可挖掘：包含图计算、机器学习、深度学习等。</p>
              <img src="@/assets/images/index/cognition_tab_3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 更多选择CDE引擎的理由 -->
    <div class="reason">
      <div class="reason_inner">
        <p class="title">
          更多选择
          <span>CDE引擎</span>
          的理由
        </p>
        <div class="box">
          <div class="item" @mouseenter="reasonProcess = 1" @mouseleave="reasonProcess = 0">
            <img src="@/assets/images/index/reason_1.png" />
            <p class="title">开放式云平台</p>
            <p class="split"></p>
            <p class="content">基于云的产品，自动部署，自动调参</p>
            <p class="process" :style="{width: reasonProcess == 1 ? '100%': '0'}"></p>
          </div>
          <div class="item" @mouseenter="reasonProcess = 2" @mouseleave="reasonProcess = 0">
            <img src="@/assets/images/index/reason_2.png" />
            <p class="title">多端数据同步</p>
            <p class="split"></p>
            <p class="content">多平台客户端数据同步随时随地享受</p>
            <p class="process" :style="{width: reasonProcess == 2 ? '100%': '0'}"></p>
          </div>
          <div class="item" @mouseenter="reasonProcess = 3" @mouseleave="reasonProcess = 0">
            <img src="@/assets/images/index/reason_3.png" />
            <p class="title">专业级服务</p>
            <p class="split"></p>
            <p class="content">全面的培训服务和技术支持解决您的难题</p>
            <p class="process" :style="{width: reasonProcess == 3 ? '100%': '0'}"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- 效率加速 -->
    <div class="efficiency">
      <div class="efficiency_inner">
        <p class="title">
          CDE认知发现引擎为企业
          <span>效率加速</span>
        </p>
        <div class="box">
          <div class="item">
            <div class="item_bg">
              <p>
                5
                <span style="margin-left:12px;">倍</span>
              </p>
            </div>
            <p class="content">工作效率提升</p>
          </div>
          <div class="item">
            <div class="item_bg">
              <p>
                5
                <span style="margin-left:12px;">倍</span>
              </p>
            </div>
            <p class="content">工作效率提升</p>
          </div>
          <div class="item">
            <div class="item_bg">
              <p>
                5
                <span style="margin-left:12px;">倍</span>
              </p>
            </div>
            <p class="content">工作效率提升</p>
          </div>
          <div class="item">
            <div class="item_bg">
              <p>
                5
                <span style="margin-left:12px;">倍</span>
              </p>
            </div>
            <p class="content">工作效率提升</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 相关新闻 -->
    <div class="related_news">
      <div class="related_news_inner">
        <p class="title">相关新闻</p>
        <div class="box">
          <div class="box_inner" ref="relatedNewsBox">
            <div class="item" @mouseenter="newsProcess = 1" @mouseleave="newsProcess = 0">
              <p class="date">
                12/17
                <span>2018</span>
              </p>
              <p class="content">2018第十一届中国信息主管年会召开 | 松鼠山科技斩获两项大奖</p>
              <img src="@/assets/images/index/related_news_logo.png" />
              <p class="process" :style="{width: newsProcess == 1 ? '100%': '0'}"></p>
            </div>
            <div class="item" @mouseenter="newsProcess = 2" @mouseleave="newsProcess = 2">
              <p class="date">
                12/11
                <span>2018</span>
              </p>
              <p class="content">松鼠山科技入选“比哈佛还难进”的微软加速器</p>
              <img src="@/assets/images/index/related_news_logo.png" />
              <p class="process" :style="{width: newsProcess == 2 ? '100%': '0'}"></p>
            </div>
            <div class="item" @mouseenter="newsProcess = 3" @mouseleave="newsProcess = 3">
              <p class="date">
                12/03
                <span>2018</span>
              </p>
              <p class="content">中标喜讯 | 松鼠山科技中标平安科技图数据库项目</p>
              <img src="@/assets/images/index/related_news_logo.png" />
              <p class="process" :style="{width: newsProcess == 3 ? '100%': '0'}"></p>
            </div>
            <div class="item" @mouseenter="newsProcess = 3" @mouseleave="newsProcess = 3">
              <p class="date">
                12/03
                <span>2018</span>
              </p>
              <p class="content">中标喜讯 | 多出来的测试</p>
              <img src="@/assets/images/index/related_news_logo.png" />
              <p class="process" :style="{width: newsProcess == 3 ? '100%': '0'}"></p>
            </div>
          </div>
        </div>
        <img
          src="@/assets/images/index/related_news_left.png"
          class="left"
          @click="newsTab('left')"
        />
        <img
          src="@/assets/images/index/related_news_right.png"
          class="right"
          @click="newsTab('right')"
        />
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tab: 0,
      sceneImageList: {
        insurance: {
          status: "default",
          default: require("@/assets/images/index/scene_item_1.png"),
          active: require("@/assets/images/index/scene_item_1_active.png")
        },
        healthcare: {
          status: "default",
          default: require("@/assets/images/index/scene_item_2.png"),
          active: require("@/assets/images/index/scene_item_2_active.png")
        },
        manufacture: {
          status: "default",
          default: require("@/assets/images/index/scene_item_3.png"),
          active: require("@/assets/images/index/scene_item_3_active.png")
        },
        retail: {
          status: "default",
          default: require("@/assets/images/index/scene_item_4.png"),
          active: require("@/assets/images/index/scene_item_4_active.png")
        },
        bank: {
          status: "default",
          default: require("@/assets/images/index/scene_item_5.png"),
          active: require("@/assets/images/index/scene_item_5_active.png")
        },
        financialMarket: {
          status: "default",
          default: require("@/assets/images/index/scene_item_6.png"),
          active: require("@/assets/images/index/scene_item_6_active.png")
        }
      },
      reasonProcess: 0,
      newsProcess: 0,
      relatedNewsStatus: 0
    };
  },
  watch: {
    /**
     * 切换选项卡
     * @param {Number} val 当前选项卡
     */
    tab(val) {
      this.$refs.tabContent.style.transform = `translateX(${val * -1200}px)`;
    }
  },
  computed: {},
  methods: {
    /**
     * 鼠标悬停 添加动画 更改图片src
     * @param {String} ref 组件标识
     */
    mouseenter(ref) {
      this.sceneImageList[ref].status = "active";
      this.$refs[ref].style.transform = "scale(1.05)";
      this.$refs[ref].style.transition = "all 0.2s";
    },
    /**
     * 鼠标离开 添加动画 更改图片src
     * @param {String} ref 组件标识
     */
    mouseleave(ref) {
      this.sceneImageList[ref].status = "default";
      this.$refs[ref].style = "";
    },
    /**
     * 动态设置图片src
     * @param {String} ref 组件标识
     */
    src(ref) {
      let status = this.sceneImageList[ref].status;
      return this.sceneImageList[ref][status];
    },
    /**
     * 相关新闻切换
     */
    newsTab(type) {
      if (type == "left") {
        this.relatedNewsStatus >= 0 && --this.relatedNewsStatus;
      } else {
        this.relatedNewsStatus < 0 && ++this.relatedNewsStatus;
      }
      this.$refs.relatedNewsBox.style.transform = `translateX(${this
        .relatedNewsStatus * 400}px)`;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
#main_inner {
  padding: 0;
  overflow: hidden;
}

#main_inner > p {
  margin: auto;
  color: #fff;
  font-size: 30px;
}

.banner {
  width: 100%;
  min-height: 928px;
  background-image: url("~@/assets/images/index/banner_bg.png");
  background-size: 100% 100%;
}

.banner_inner {
  width: 1200px;
  margin: 0 auto;
}

.banner_inner > .title {
  padding-top: 298px;
  padding-bottom: 16px;
  height: 81px;
  line-height: 81px;
  font-family: PingFangSC;
  font-size: 58px;
  font-weight: 600;
  color: #ffffff;
}

.banner_inner > .little_title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 43px;
}

.banner_inner > a {
  display: block;
  width: 170px;
  height: 54px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  text-align: center;
  line-height: 54px;
  font-family: PingFangSC;
  font-size: 24px;
  color: #fff;
  margin-bottom: 170px;
}

.menu {
  width: 100%;
  height: 216px;
  background-image: linear-gradient(
    to bottom,
    rgba(8, 30, 111, 0.3),
    rgba(8, 30, 111, 0.9)
  );
}

.menu_inner {
  width: 1200px;
  margin: 0 auto;
}

.menu_inner > div.news {
  overflow: hidden;
}

.menu_inner > div.news > p.title {
  height: 28px;
  line-height: 28px;
  font-family: PingFangSC;
  font-size: 20px;
  color: #ffffff;
  margin: 24px 0 6px;
}

.menu_inner > div.news > p.content {
  height: 44px;
  line-height: 44px;
  font-family: PingFangSC;
  font-size: 31px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 30px;
}

.menu_inner > .box {
  display: flex;
}

.menu_inner > .box > .item {
  height: 84px;
  background-color: rgba(216, 216, 216, 0);
  flex: 1;
  display: flex;
  align-items: center;
}
.menu_inner > .box > .item > .icon {
  margin: 26px 16px 26px 24px;
}

.menu_inner > .box > .item p.title {
  width: 72px;
  height: 25px;
  left: 25px;
  font-family: PingFangSC;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 3px;
}

.menu_inner > .box > .item p.content {
  width: 306px;
  height: 21px;
  line-height: 21px;
  opacity: 0.9;
  font-family: PingFangSC;
  font-size: 15px;
  color: #ffffff;
}

.menu_inner > .box > .active {
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
}

/* 认知发现引擎 */
.engine {
  background-color: #ffffff;
  text-align: center;
  padding: 98px 0 193px 0;
}

.engine > p.title {
  height: 50px;
  line-height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  color: #000000;
}

.engine > p.title > span {
  width: 230px;
  display: inline-block;
  height: 50px;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  color: #ffffff;
}

.engine > p.content {
  width: 794px;
  font-family: PingFangSC;
  font-size: 18px;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
  margin: 49px auto 0 auto;
}

.engine > p.content > strong {
  font-size: 22px;
  font-weight: 500;
}

/* 引擎流程动画 */
.engine_process {
  width: 100%;
  position: relative;
}

.engine_process p.title {
  width: 100%;
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 65px;
  left: 0;
}

.engine_process p.little_title {
  width: 100%;
  height: 24px;
  opacity: 0.8;
  font-family: PingFangSC;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 120px;
  left: 0;
}

.engine_process img:first-of-type {
  width: 100%;
}

.engine_process img:last-of-type {
  position: absolute;
  top: 205px;
  left: 50%;
  height: 400px;
}

/* 使用场景 */
.scene {
  width: 100%;
  min-height: 880px;
  background-image: url("~@/assets/images/index/scene_bg.png");
  background-size: 100% 100%;
}

.scene_inner {
  width: 1200px;
  margin: 0 auto;
}

.scene_inner .img_box {
  position: relative;
  z-index: 9;
  display: flex;
  justify-content: space-between;
}

.scene_inner .title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  color: #000000;
  padding: 90px 0 54px 0;
}

.scene_inner .img_box > div:first-of-type {
  width: 325px;
}

.scene_inner .img_box img {
  margin-bottom: 26px;
}

.scene_inner .img_box > div:nth-of-type(2) {
  width: 773px;
}

.scene_inner .img_box img:last-of-type {
  margin-bottom: 0;
}

.scene_inner > .img_box > .bg {
  width: 851px;
  height: 372px;
  background-color: #0560ff;
  position: absolute;
  z-index: -1;
  top: -22px;
  right: -19px;
}

/* 认知&发现 */
.cognition {
  width: 100%;
  min-height: 1033px;
  background-image: url("~@/assets/images/index/cognition_bg.png");
  background-size: 100% 100%;
}

.cognition_inner {
  width: 1200px;
  margin: 0 auto;
}

.cognition_inner > p.title {
  height: 50px;
  line-height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  color: #ffffff;
  padding: 90px 0 72px 0;
  text-align: center;
}

.cognition_inner > .tabs > div.tab_title {
  display: flex;
  border-bottom: 1px solid rgba(216, 216, 216, 0.5);
  cursor: pointer;
}

.cognition_inner > .tabs > div.tab_title > p {
  flex: 1;
}

.cognition_inner > .tabs > div.tab_title span {
  display: block;
  margin: 0 auto;
  padding-bottom: 16px;
  width: 88px;
  height: 30px;
  line-height: 30px;
  font-family: PingFangSC;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  opacity: 0.8;
  color: #ffffff;
  border-bottom: 4px solid transparent;
}

.cognition_inner > .tabs > div.tab_title .active {
  border-bottom: 4px solid #fff;
  opacity: 1;
}

.cognition_inner > .tabs > div.tab_content {
  width: 3600px;
  display: flex;
  transition: all 0.2s linear;
}
.cognition_inner > .tabs > div.tab_content > div {
  margin-top: 37px;
  width: 1200px;
  margin: 0 auto;
}

.cognition_inner > .tabs > div.tab_content p {
  width: 762px;
  line-height: 22px;
  opacity: 0.8;
  font-family: PingFangSC;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  padding: 37px 0 33px 0;
  margin: 0 auto;
}

.cognition_inner > .tabs > div.tab_content img {
  display: block;
  margin: 0 auto;
}

/* 更多选择CDE的理由 */
.reason {
  width: 100%;
  height: 726px;
  background-color: #f9f9f9;
}

.reason_inner {
  width: 1200px;
  margin: 0 auto;
}

.reason_inner > p.title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color: #000000;
  text-align: center;
  padding: 89px 0 92px 0;
}

.reason_inner p.title span {
  display: inline-block;
  width: 162px;
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: normal;
  color: #ffffff;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  text-align: center;
}

.reason_inner .box {
  display: flex;
  justify-content: space-between;
}

.reason_inner .box .item {
  width: 364px;
  height: 398px;
  background-color: #fff;
  position: relative;
}

.reason_inner .box .item img {
  display: block;
  margin: 46px auto 32px auto;
}

.reason_inner .box .item p.title {
  height: 40px;
  line-height: 40px;
  font-family: PingFangSC;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #333333;
}

.reason_inner .box .item p.split {
  width: 35px;
  height: 3px;
  margin: 6px auto 30px;
  background-color: #0560ff;
}

.reason_inner .box .item p.content {
  width: 233px;
  height: 28px;
  font-family: PingFangSC;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #666666;
  text-align: center;
  margin: 0 auto;
}

.reason_inner .box .item p.process {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  transition: width 0.2s;
}

/* 更多选择CDE的理由 */
.reason {
  width: 100%;
  height: 726px;
  background-color: #f9f9f9;
}

.reason_inner {
  width: 1200px;
  margin: 0 auto;
}

.reason_inner > p.title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color: #000000;
  text-align: center;
  padding: 89px 0 92px 0;
}

.reason_inner p.title span {
  display: inline-block;
  width: 162px;
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: normal;
  color: #ffffff;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  text-align: center;
}

.reason_inner .box {
  display: flex;
  justify-content: space-between;
}

.reason_inner .box .item {
  width: 364px;
  height: 398px;
  background-color: #fff;
  position: relative;
}

.reason_inner .box .item img {
  display: block;
  margin: 46px auto 32px auto;
}

.reason_inner .box .item p.title {
  height: 40px;
  line-height: 40px;
  font-family: PingFangSC;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: #333333;
}

.reason_inner .box .item p.split {
  width: 35px;
  height: 3px;
  margin: 6px auto 30px;
  background-color: #0560ff;
}

.reason_inner .box .item p.content {
  width: 233px;
  height: 28px;
  font-family: PingFangSC;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #666666;
  text-align: center;
  margin: 0 auto;
}

.reason_inner .box .item p.process {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  transition: width 0.2s;
}

/* 效率加速 */
.efficiency {
  width: 100%;
  height: 717px;
  background-image: url("~@/assets/images/index/efficiency_bg.png");
  background-size: 100% 100%;
}

.efficiency_inner {
  width: 1200px;
  margin: 0 auto;
}

.efficiency_inner > .title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color: #ffffff;
  text-align: center;
  padding: 90px 0 101px 0;
}

.efficiency_inner > .title span {
  display: inline-block;
  width: 150px;
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color: #0560ff;
  background-color: #ffffff;
  text-align: center;
}

.efficiency_inner > .box {
  display: flex;
  text-align: center;
  justify-content: space-between;
}

.efficiency_inner > .box > .item {
}

.efficiency_inner > .box > .item > .item_bg {
  position: relative;
  width: 260px;
  height: 260px;
  background-size: 100% 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.59);
}

.efficiency_inner > .box > .item > .item_bg > p {
  background-image: url("~@/assets/images/index/progress.png");
  width: 229px;
  height: 229px;
  line-height: 229px;
  font-family: DINPro;
  font-size: 76px;
  font-weight: 500;
  color: #ffffff;
  margin: 16px;
}

.efficiency_inner > .box > .item > .item_bg > p > span {
  font-family: PingFangSC;
  font-size: 42px;
  color: #ffffff;
  vertical-align: middle;
}

.efficiency_inner > .box > .item > p.content {
  height: 45px;
  font-family: PingFangSC;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  margin-top: 52px;
}

/* 相关新闻 */
.related_news {
  width: 100%;
  height: 726px;
  background-color: #f9f9f9;
}

.related_news_inner {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.related_news_inner img.left {
  position: absolute;
  top: 356px;
  left: -64px;
  cursor: pointer;
}

.related_news_inner img.right {
  position: absolute;
  top: 356px;
  right: -64px;
  cursor: pointer;
}

.related_news_inner > .title {
  height: 50px;
  font-family: PingFangSC;
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
  color: #000000;
  padding: 74px 0 60px 0;
}

.related_news_inner > .box {
  width: 1200px;
  overflow: hidden;
}

.related_news_inner > .box > .box_inner {
  width: 1600px;
  display: flex;
  transition: transform 0.2s;
}

.related_news_inner > .box > .box_inner > .item {
  width: 328px;
  height: 328px;
  box-shadow: 0 8px 15px 0 rgba(223, 229, 241, 0.92);
  background-color: #ffffff;
  padding: 45px 25px 89px 11px;
  margin-right: 54px;
  position: relative;
}

.related_news_inner > .box > .box_inner > .item:last-of-type {
  margin-right: 0;
}

.related_news_inner > .box > .box_inner > .item > p.date {
  height: 81px;
  font-family: DINPro;
  font-size: 63px;
  font-weight: 500;
  line-height: 81px;
  letter-spacing: 1px;
  text-align: left;
  color: #333333;
}

.related_news_inner > .box > .box_inner > .item > p.date > span {
  width: 44px;
  height: 25px;
  font-family: PingFangSC;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 1px;
  text-align: center;
  color: #333333;
}

.related_news_inner > .box > .box_inner > .item > p.content {
  height: 38px;
  font-family: PingFangSC;
  font-size: 24px;
  line-height: 38px;
  letter-spacing: normal;
  color: #333333;
  margin: 5px 0 107px 0;
}

.related_news_inner > .box > .box_inner > .item > img {
  margin-left: 7px;
}

.related_news_inner > .box > .box_inner > .item > p.process {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: linear-gradient(to right, #1ba3f9 0%, #0040d8 100%);
  transition: width 0.2s;
}
</style>