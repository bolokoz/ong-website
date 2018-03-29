<template>
  <section class="posts">
    <post-preview 
      v-for="post in posts"
      :key="post._uid"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :id="post.id" />
  </section>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  data () {
    return { story: { content: {} } }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'blog/'
    }).then((res) => {
      console.log(res)
      return {
        posts: res.data.stories.map(blogPost => {
          return {
            id: blogPost.slug,
            title: blogPost.content.title,
            summary: blogPost.content.summary,
            thumbnail: blogPost.content.thumbnail
          }
        })
      }
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>