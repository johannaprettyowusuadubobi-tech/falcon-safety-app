<template>
    <div>
        <h1>
            welcome to login
        </h1>

        <v-card
    class="overflow-hidden"
    color="blue-grey darken-2"
    dark
  >
    <v-toolbar
      flat
      color="grey darken-3"
    >
      <v-icon
       class="cyan--text"
      >mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light cyan--text">
        User Form
      </v-toolbar-title>
     
    </v-toolbar>
    <v-card-text>
      <v-text-field
      v-model="email"
       color="cyan"
       class="cyan--text "
       label="email"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="password "
        color="cyan"
         class="cyan--text"
        label="password"  
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="grey darken-3"
        @click="login()"
         class="cyan--text"
      >
        login
      </v-btn>
    </v-card-actions>
    </v-card>
    </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ""
  }),
  methods: {
    login(){
        if(this.password == "falcon"){
         this.$router.push({path: '/admin'})
        }else{
            alert("password is incorrect")
        }
    }
  }
}

</script>