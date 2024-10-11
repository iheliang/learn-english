"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "essayHome",
  setup(__props) {
    const isShow = common_vendor.ref("false");
    const clickContent = () => {
      common_vendor.index.navigateTo({
        url: "/pages/essay/essayMode/listenMode/listenMode"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_assets._imports_0$2,
        c: common_vendor.o(() => {
        }),
        d: isShow.value,
        e: !isShow.value,
        f: common_assets._imports_2,
        g: common_assets._imports_1,
        h: common_vendor.o(clickContent),
        i: common_assets._imports_1,
        j: common_vendor.o(clickContent)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0d22955f"]]);
wx.createPage(MiniProgramPage);
