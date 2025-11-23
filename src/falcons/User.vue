<template>
    <div>
    <h1 
    class="ml"
    >
        welcome User
    </h1>
            <v-select
          :items="['low', 'medium', 'high']"
          label="Solo field"
          solo
        ></v-select>
        <v-card
    class="overflow-hidden"
    color="purple lighten-1"
    dark
  >
    <v-toolbar
      flat
      color="purple"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset()"
    >
      Reset Form
    </v-btn>
     
    </v-toolbar>
    <v-card-text>
      <v-text-field
      v-model="names"
        color="white"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="description "
        color="white"
        item-text="name"
        label="description of case"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        @click="save"
      >
        Send
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      message sent successfully
    </v-snackbar>
  </v-card>
          <v-select
          :items="['Police', 'Fire-Fighter', 'Amdulance', 'Tow-Truck']"
          label="Solo field"
          solo
          class="mt-8"
        ></v-select>
        </div>
</template>

<script>


  export default {
    data () {
      return {
        hasSaved: false,
        names: [],
        description : [],
        model: null,
      }
    },

    methods: {
         reset () {
        
        this.names = null
        this.description  = null
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
        
      },
    },
  }
</script>