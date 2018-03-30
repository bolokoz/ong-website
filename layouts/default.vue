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
      scroll-off-screen 
      color="blue"
      app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <v-container fluid px-0>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Blog', to: '/blog' },
          { icon: 'bubble_chart', title: 'Participe', to: '/participe' },
          { icon: 'bubble_chart', title: 'Agenda', to: '/agenda' },
          { icon: 'add', title: 'Fazer doação', to: '/doar' },
          { icon: 'bubble_chart', title: 'Sobre o projeto', to: '/sobre' }
        ],
        title: 'Nome Exemplo ONG'
      }
    }
  }
</script>
