'use strict';

import util from '../../utils/index';
import config from '../../utils/config';
import WxParse from '../../lib/wxParse/wxParse';
import HtmlFormater from '../../lib/htmlFormater';

let app = getApp();
Page({
  onLoad() {
    let id = option.contentId || 0;
    this.setData({
      isFromShare: !!option.share
    });
    this.init(id);
  },
  data: {
    scrollTop: 0,
    detailData: {}
  },
  articleRevert() {
    let htmlContent = this.data.detailData && this.data.detailData.content;
    WxParse.wxParse('article', 'html', htmlContent, this, 0);
  },
  init(contentId) {
    if (contentId) {
      this.goTop()
      this.requestDetail(contentId)
        .then(data => {
          this.configData(data)
        })
        .then(() => {
          this.articleRevert()
        })
    }
  },
  configPageData(data) {
    if(data) {
      this.setData ({
        detailData: data
      });
      let title = this.data.detailData.title || config.defaultBarTitle
      wx.setNavigationBarTitle({
        title: title
      })
    }
  },
  requestDetail(contentId) {
    return util.request({
      url: 'detail',
      mock: true,
      data: {
        source:1
      }
    })
      .then(res => {
        let formateUpdateTime = this.formmateTime(res.data.lastUpdateTime)
        res.data.formateUpdateTime = formateUpdateTime
        return res.data
      })
  },
  formmateTime(timeStr = '') {
    let year = timeStr.slice(0, 4),
      month = timeStr.slice(5, 7),
      day = timeStr.slice(8, 10);
      return `${year}/${month}/${day}`;
  },
  next() {
    this.requestNextContentId()
      .then(data => {
        
      })
  }
})