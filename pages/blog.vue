<template>
<div id="blog">
  <section>
    <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Este eh nosso Blogo</h3>
          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb">Check out our newest features!</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  </section>
  <section class="posts">
    <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
    <post-preview 
      v-for="post in posts"
      :key="post._uid"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :id="post.id" />
          </v-layout>
    </v-container>
  </section>
</div>
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