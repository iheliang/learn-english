"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "readMode",
  setup(__props) {
    const modelSwitch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/essay/essayMode/listenMode/listenMode"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$4,
        b: common_assets._imports_1$2,
        c: common_assets._imports_2$2,
        d: common_vendor.o(($event) => modelSwitch()),
        e: common_assets._imports_3$1,
        f: common_vendor.o(($event) => _ctx.handleClick()),
        g: common_assets._imports_4,
        h: common_vendor.o(($event) => _ctx.handleClick())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-634ad573"]]);
wx.createPage(MiniProgramPage);
