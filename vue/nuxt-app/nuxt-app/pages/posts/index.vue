<template>
  <div class="container">
    <div class="display-1">List</div>
    <div class="row justify-content-center">
      <div class="col-md-6" v-for="post in posts" :key="post.id">
        <nuxt-link :to="{name: 'post-id', params: {id: post.id}}">
          <div class="card my-3">
            <img :src="post.imageUrl" :alt="post.title" class="card-img-top">
            <div class="card-bod">
              <div class="card-title">{{post.title}}</div>
              <div class="card-subtitle mb2 text-black-50">{{post.author}}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // nuxt本质，template  不是在客户端渲染的， 是在服务器
  // api -> mysql 数据拿出来， -> template
  // mounted() fetch axios ajax 前端拉数据，
  // 页面显示之后，才有了异步的数据挂载上去，ajax seo 百度不支持，在页面上显示的html只是结构
  // api -> mysql -> template 编译 server side rendering
  // vue 运行在后端  

  // <div> v-for </div>
  async asyncData({ $axios }) {
    const posts = await $axios.$get('http://localhost:3333/posts');
    return {
      posts
    }
  }
}
</script>