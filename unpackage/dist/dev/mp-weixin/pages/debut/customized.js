"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
const _sfc_main = {
  __name: "customized",
  setup(__props) {
    const current = common_vendor.ref(null);
    const items = common_vendor.ref(["1遍", "2遍", "3遍", "4遍"]);
    const timeValue = common_vendor.ref(1);
    const radioList = common_vendor.ref([{
      "value": 0,
      "text": "蒙学"
    }, {
      "value": 1,
      "text": "小学"
    }, {
      "value": 2,
      "text": "初中"
    }, {
      "value": 3,
      "text": "高中"
    }, {
      "value": 4,
      "text": "成年"
    }]);
    const onClickItem = (index) => {
      console.log(index.currentIndex);
    };
    const sliderValue = (e) => {
      console.log(e.detail.value);
      timeValue.value = e.detail.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: current.value,
          values: items.value,
          styleType: "button",
          activeColor: "#626ae7"
        }),
        c: common_vendor.t(timeValue.value),
        d: common_vendor.o((...args) => _ctx.sliderChange && _ctx.sliderChange(...args)),
        e: common_vendor.o(sliderValue),
        f: common_vendor.f(radioList.value, (item, index, i0) => {
          return {
            a: item.value,
            b: index === current.value,
            c: common_vendor.t(item.text),
            d: item.value
          };
        }),
        g: common_vendor.o((...args) => _ctx.radioChange && _ctx.radioChange(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20438895"]]);
wx.createPage(MiniProgramPage);
