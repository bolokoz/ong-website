<template>
  <section>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  asyncData (context) {
    return context.app.$storyapi
      .get('cnd/stories/sobre', {
        version: 'draft'
      })
      .then(res => {
        console.log(res.data)
        return {
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          image: res.data.story.content.image
        }
      })
  }
}
</script>
