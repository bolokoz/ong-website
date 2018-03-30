<template>
  <v-jumbotron gradient='to top, #7B1FA2, #E1BEE7' color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">{{ title }}</h3>
          <span class="subheading">{{ content }}</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/sobre', {
      version: 'draft'
    }).then(res => {
      console.log(res.data)
      return {
        title: res.data.story.content.title,
        content: res.data.story.content.content
      }
    })
  }
}
</script>
