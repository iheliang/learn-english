"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "userCenter",
  setup(__props) {
    const sliderVal = common_vendor.ref(78);
    const subtextVal = common_vendor.ref(200);
    const itemCounts = common_vendor.ref([
      {
        LeftIcon: "../../static/标签1.png",
        title: "我的收藏",
        sum: "4"
      },
      {
        LeftIcon: "../../static/评论.png",
        title: "我的评论",
        sum: "3"
      },
      {
        LeftIcon: "../../static/下载.png",
        title: "我的下载",
        sum: "1"
      }
    ]);
    const clickNav = () => {
      common_vendor.index.navigateTo({
        url: "/pages/essay/essayMode/listenMode/readMode"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(subtextVal.value),
        b: common_vendor.f(itemCounts.value, (item, index, i0) => {
          return {
            a: item.LeftIcon,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.sum),
            d: "fe75008f-0-" + i0,
            e: index
          };
        }),
        c: common_vendor.p({
          type: "right",
          size: "30"
        }),
        d: common_assets._imports_0$2,
        e: common_vendor.f(2, (item, index, i0) => {
          return {
            a: common_vendor.o(clickNav, index),
            b: index
          };
        }),
        f: common_assets._imports_1,
        g: sliderVal.value,
        h: common_vendor.t(sliderVal.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fe75008f"]]);
wx.createPage(MiniProgramPage);
