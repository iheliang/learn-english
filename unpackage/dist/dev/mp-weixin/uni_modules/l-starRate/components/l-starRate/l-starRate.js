"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "lStarRate",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    // 星星总数
    starNum: {
      type: Number,
      default: 5
    },
    // 选中星星数量
    value: {
      type: Number,
      default: 0
    },
    // 选中颜色
    activeColor: {
      type: String,
      default: "#F2CB51"
    },
    // 未选中时的颜色
    unActiveColor: {
      type: String,
      default: "#B2B2B2"
    },
    // 是否空心
    hollow: {
      type: Boolean,
      default: false
    },
    // 禁用点击
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(index) {
      if (this.disabled)
        return;
      this.$emit("input", index + 1);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.starNum, (item, index, i0) => {
      return {
        a: common_vendor.n($props.hollow && index + 1 > $props.value ? "icon-xingxing1" : "icon-xingxing"),
        b: index + 1 <= $props.value ? $props.activeColor : $props.unActiveColor,
        c: common_vendor.o(($event) => $options.change(index), index),
        d: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e83d347a"]]);
wx.createComponent(Component);
