<template>
  <v-app light class="blue lighten-1">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      v-if="user"
    >
      <v-list>
        <!--
          Check if the item is an array in order to determine whether to treat it as a link with
          sub-links
        -->
        <v-list-tile v-if="Array.isArray(item) === false"
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

        <v-list v-else>

        <!-- Main link of a sub menu -->
          <v-list-tile v-if="y == 0"
            router
            :to="sub_link.to"
            :key="y"
            v-on:click="toggleSubMenu(sub_link.toggle_on)"
            v-for="(sub_link, y) in items[i]"
            exact
          >
          <v-list-tile-action>
            <v-icon v-html="sub_link.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="sub_link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- End of main link of a sub menu -->


        <!-- Start of a single sub-menu -->

          <v-list-tile v-if="y !== 0"
            router
            :to="sub_link.to"
            :key="y"
            v-show="submenuToggles[sub_link.toggle_on] === true"
            v-for="(sub_link, y) in items[i]"
            exact
          >

         <v-list-tile-action>
            <v-icon v-html="sub_link.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="sub_link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- End of a single sub-menu -->
        </v-list>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar v-if="user" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer" v-if="user"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user" id="user" class="text-xs-center">
        <v-list-tile-action>
          <v-btn primary class="mt-2" color="red darken-2" @click.native="logout">
            Logout
          </v-btn>
        </v-list-tile-action>
      </div>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer v-if="user" :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'compare_arrows', title: 'Translate', to: '/translations/translate' },
          { icon: 'compare_arrows', title: 'Translations', to: '/translations/translations' },
          { icon: 'compare_arrows', title: 'Collect', to: '/collect/contribute' },
          { icon: 'compare_arrows', title: 'Contributions', to: '/collect/contributions' }
        ],
        submenuToggles: {dataCollectorClick:false},
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Ajira GIS',
        menu: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.activeUser
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('signOut').then(() => {
          this.$router.push('/')
        })
      },
      toggleSubMenu(menu_activation_variable){
        if(this.$data.submenuToggles[menu_activation_variable] ===  false){
          this.$data.submenuToggles[menu_activation_variable] =  true;
        }
        else{
          this.$data.submenuToggles[menu_activation_variable] =  false;
        }
      }
    }
  }
</script>
