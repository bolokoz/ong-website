<template>
  <v-flex x12 md6>
    <v-card height="250" hover nuxt :to="id">
      <v-card-media :src="thumbnail" height="150px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{title}}</h3>
          <div>{{summary}}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
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