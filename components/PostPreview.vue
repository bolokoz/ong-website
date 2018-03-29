<template>
      <v-card nuxt :to="id">
        <v-card-media :src="thumbnail" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{title}}</h3>
            <div>{{summary}}</div>
          </div>
        </v-card-title>
      </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>