import { fetchGet } from './config'

export default {
  getSliderListInfo () {
    return fetchGet('/api/home/slider/slider_info_list')
  },
  getHomeNewsInfo () {
    return fetchGet('/api/home/homenews/homenews_info_list')
  },
  getImageNewsInfo () {
    return fetchGet('/api/home\/imagenews\/imagenews_info_list/')
  },
  getVideoNewsInfo () {
    return fetchGet('/api/home\/videonews\/videonews_info_list/')
  },
  getMatchInfo () {
    return fetchGet('/\/api\/home\/match\/match_info_list/')
  },
  getDataInfo () {
    return fetchGet('/\/api\/home\/data\/data_info_list/')
  },
  getNewsInfo () {
    return fetchGet('/\/api\/home\/news\/news_info_list/')
  }
}
