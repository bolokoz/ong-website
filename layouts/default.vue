<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      color="white"
      dense
      app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <v-container fluid px-0>
        <nuxt />
      </v-container>
    </v-content>

  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="item in footer"
        :key="item"
        :to="item.link"
      >
        {{ item.title }}
      </v-btn>
      <v-flex xs12 py-1 text-xs-center white--text>
        &copy;2018 — <strong>asdasd</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        footer: [
          { title: 'Home', link: '/' },
          { title: 'Sobre nos', link: '/sobre' },
          { title: 'Participe', link: '/participe' },
          { title: 'Agenda', link: '/agenda' },
          { title: 'Blog', link: '/blog' },
          { title: 'Doacoes', link: '/doar' },
          { title: 'Contanto', link: '/contato' }
        ],
        icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'Sobre nos', to: '/sobre' },
          { icon: 'bubble_chart', title: 'Participe', to: '/participe' },
          { icon: 'bubble_chart', title: 'Agenda', to: '/agenda' },
          { icon: 'add', title: 'Blog', to: '/blog' },
          { icon: 'bubble_chart', title: 'Sobre o projeto', to: '/sobre' }
        ],
        title: 'Nome Exemplo ONG'
      }
    }
  }
</script>
