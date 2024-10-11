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
  __name: "downloadHome",
  setup(__props) {
    const array = common_vendor.ref(["蒙学", "小学", "初中", "高中", "成年"]);
    const index = common_vendor.ref(0);
    const cardList = common_vendor.ref([{
      title: "英语小短文100篇",
      description: "经过大量用户反馈精心筛选和优化的小短文，确保你能从中获得最佳的学习效果。",
      price: "10",
      points: "20",
      downloadUrl: "https://example.com/download1.pdf"
      // 假设的下载链接
    }, {
      title: "英语小短文200篇",
      description: "经过大量用户反馈精心筛选和优化的小短文，确保你能从中获得最佳的学习效果。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download2.pdf"
    }, {
      title: "场景英语100篇",
      description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download3.pdf"
    }, {
      title: "场景英语100篇",
      description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download3.pdf"
    }, {
      title: "场景英语100篇",
      description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download3.pdf"
    }, {
      title: "场景英语100篇",
      description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download3.pdf"
    }, {
      title: "场景英语100篇",
      description: "经过精心筛选和优化的场景英语，专为提升你在实际对话中的英语表达能力。",
      price: "20",
      points: "20",
      downloadUrl: "https://example.com/download3.pdf"
    }]);
    const pickerChange = (e) => {
      index.value = e.detail.value;
      console.log(e);
    };
    const download = (url) => {
      common_vendor.index.downloadFile({
        url,
        success: (res) => {
          if (res.statusCode === 200) {
            common_vendor.index.openDocument({
              filePath: res.tempFilePath,
              success: () => {
                console.log("打开文档成功");
              }
            });
          }
        },
        fail: (err) => {
          console.log("下载失败", err);
          common_vendor.index.showToast({
            title: "下载失败",
            icon: "none"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(array.value[index.value]),
        b: array.value,
        c: common_vendor.o(pickerChange),
        d: common_vendor.p({
          type: "right",
          size: "25"
        }),
        e: common_vendor.f(cardList.value, (item, index2, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.description),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.points),
            e: common_vendor.o(($event) => download(item.downloadUrl), index2),
            f: index2
          };
        }),
        f: common_assets._imports_0$5,
        g: common_assets._imports_1$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4f7cba4e"]]);
wx.createPage(MiniProgramPage);
