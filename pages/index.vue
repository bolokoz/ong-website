<template>
  <div id="index">
    <section id="parallax">
        <v-parallax src="elefun.jpg" height="600">
            <v-layout column align-center class="black--text">
                <!-- <img src="pudim.png" height="200"> -->
                <h1 class="black--text mb-2 display-3 text-xs-center">{{ title }}</h1>
                <div class="display-1 mb-3 text-xs-center">{{ subtitle }}</div>
                <!-- <v-btn class="blue lighten-2 mt-5" dark large href="/blog">
                    {{ button }}
                </v-btn> -->
            </v-layout>
        </v-parallax>
    </section>

      <section id="fatos">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Missão</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">História</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Impactos</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="parallax2">
        <v-parallax src="tetrahedron.jpg" height="200">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Estatísticas</div>
            <em>Veja nosso impacto ano a ano</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/blog"
            >
              Ver resultados
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section id="parceiros">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Empresas que apoiam o projeto</h2>
              <span class="subheading">
                
              </span>
            </div>
          </v-flex>
          
          <v-flex xs12>
            <v-container fluid grid-list-xl>
              <v-layout row wrap align-center>

                  <v-flex xs6 md4 class="my-3"
                    v-for="empresa in empresas"
                    :key="empresa.nome">
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">{{empresa.image}}</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">{{ empresa.nome }}</div>
                      </v-card-title>
                    </v-card>
                  </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="parallax3">
        <v-parallax src="city.jpg" height="200">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Participe</div>
            <em>Veja como ajudar</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/blog"
            >
              Ver resultados
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section id="ultimas-noticias">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
   
            <div class="text-xs-center">
              <h2 class="headline">Últimas notícias</h2>
              <span class="subheading">
                Veja o que estivemos fazendoOoOoOO através de nosso <v-btn fab to="blog">blog</v-btn>
              </span>
            </div>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
              <post-preview 
                v-for="post in posts"
                :key="post._uid"
                :title="post.title"
                :summary="post.summary"
                :thumbnail="post.thumbnail"
                :id="post.id" />
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullamin aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn
                    class="white--text"
                    fab
                    icon
                    small
                    v-for="(social, i) in socials"
                    :key="i"
                    :color="social.color"
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4 offset-sm1>
              <v-card hover>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview.vue'
import Parallax from '~/components/Parallax.vue'

export default {
  components: {
    PostPreview,
    Parallax
  },
  head: {
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.9/js/all.js' }
    ]
  },
  data () {
    return {
      types: ['Places to Be', 'Places to See'],
      cards: ['Good', 'Best', 'Finest'],
      empresas: [
        {
          nome: 'Empresa 1',
          image: 'color_lens'
        },
        {
          nome: 'Empresa 2',
          image: 'color_lens'
        },
        {
          nome: 'Empresa 3',
          image: 'build'
        },
        {
          nome: 'Empresa 3',
          image: 'build'
        },
        {
          nome: 'Empresa 3',
          image: 'build'
        },
        {
          nome: 'Empresa 3',
          image: 'build'
        }
      ],
      socials: [
        {
          icon: 'fab fa-facebook',
          color: 'indigo'
        },
        {
          icon: 'fab fa-linkedin',
          color: 'cyan darken-1'
        },
        {
          icon: 'fab fa-instagram',
          color: 'red lighten-3'
        }
      ],
      title: 'Exemplo ONG',
      subtitle: 'Um projeto social tal tal',
      image: 'test.jpg',
      button: 'HAHAHAH',
      buttonLink: 'blog'
    }
  },
  // methods: {
  //   getImage () {
  //     const min = 550
  //     const max = 560
  //     return Math.floor(Math.random() * (max - min + 1)) + min
  //   }
  // },
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