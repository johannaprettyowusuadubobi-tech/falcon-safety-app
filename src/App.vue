<template>
  <v-app>
  <div>
    <v-app-bar
      color="grey darken-3"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1
         class="cyan--text"
         
        >
          FALCON SAFETY APP
        </h1>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
       color="grey darken-3"
       @click="login"
       class="cyan--text"
      >
        login
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      ></v-menu>
    </v-app-bar>
  </div>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
  methods: {
    login(){
      this.$router.push({path: "login"})
    }
  }
};
</script>
