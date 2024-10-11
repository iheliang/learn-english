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
  __name: "index",
  setup(__props) {
    const contentList = common_vendor.ref([{
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }, {
      sum: "1",
      english: "Good Morning!",
      chinese: "下午好"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.f(contentList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.sum),
            b: common_vendor.t(item.english),
            c: common_vendor.t(item.chinese),
            d: "1cf27b2a-0-" + i0,
            e: index
          };
        }),
        c: common_vendor.p({
          type: "right",
          size: "25"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
