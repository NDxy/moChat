"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messages: [],
      historyOnload: false,
      emoji: {
        show: true
      },
      media: {
        show: false
      }
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.historyOnload ? "\u5DF2\u7ECF\u6CA1\u6709\u66F4\u591A\u7684\u5386\u53F2\u6D88\u606F" : "\u4E0B\u62C9\u83B7\u53D6\u5386\u53F2\u6D88\u606F"),
    b: $data.emoji.show
  }, $data.emoji.show ? {} : {}, {
    c: $data.media.show
  }, $data.media.show ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fea99d8"]]);
wx.createPage(MiniProgramPage);
