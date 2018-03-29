<template>
    <section id="parallax">
        <v-parallax gradient='to top, #7B1FA2, #E1BEE7' height="600">
            <v-layout column align-center justify-center class="white--text">
                <img src="pudim.png" height="200">
                <h1 class="white--text mb-2 display-1 text-xs-center">{{ title }}</h1>
                <div class="subheading mb-3 text-xs-center">{{ subtitle }}</div>
                <v-btn class="blue lighten-2 mt-5" dark large href="/blog">
                    {{ button }}
                </v-btn>
            </v-layout>
        </v-parallax>
    </section>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'image', 'logo', 'button', 'buttonLink']
}
</script>
