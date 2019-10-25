import { fetchGet } from './config'

export default {
  getSliderListInfo () {
    return fetchGet('/api/home/slider/slider_info_list')
  },
  getHomeNewsInfo () {
    return fetchGet('/api/home/homenews/homenews_info_list')
  }
}
