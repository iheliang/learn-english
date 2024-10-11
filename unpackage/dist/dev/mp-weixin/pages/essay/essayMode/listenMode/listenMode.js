"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_l_starRate2 = common_vendor.resolveComponent("l-starRate");
  _easycom_l_starRate2();
}
const _easycom_l_starRate = () => "../../../../uni_modules/l-starRate/components/l-starRate/l-starRate.js";
if (!Math) {
  _easycom_l_starRate();
}
const _sfc_main = {
  __name: "listenMode",
  setup(__props) {
    const starValue = common_vendor.ref(0);
    const commentValue = common_vendor.ref("");
    const commentStar = common_vendor.ref(3);
    const getvalue = (e) => {
      starValue.value = e;
    };
    const sendComment = () => {
      if (starValue.value === 0 || commentValue.value.trim() === "") {
        common_vendor.index.showToast({
          title: "请完整填写评论",
          icon: "none",
          duration: 1500
        });
        return;
      } else {
        console.log(starValue.value, commentValue.value);
      }
    };
    const modelSwitch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/essay/essayMode/listenMode/readMode"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: common_assets._imports_1$1,
        c: common_assets._imports_2$1,
        d: common_assets._imports_3,
        e: common_vendor.o(getvalue),
        f: common_vendor.p({
          value: starValue.value,
          disabled: false
        }),
        g: common_vendor.o(sendComment),
        h: commentValue.value,
        i: common_vendor.o(($event) => commentValue.value = $event.detail.value),
        j: common_vendor.p({
          value: commentStar.value,
          disabled: true
        }),
        k: common_assets._imports_2$2,
        l: common_vendor.o(($event) => modelSwitch()),
        m: common_assets._imports_5,
        n: common_vendor.o(($event) => _ctx.handleClick()),
        o: common_assets._imports_4,
        p: common_vendor.o(($event) => _ctx.handleClick())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ab4f4f0"]]);
wx.createPage(MiniProgramPage);
