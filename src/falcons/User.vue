<template>
    <div>
      <center>
    <h1 >
        welcome User
    </h1>
    </center>

        <v-btn
      color="blue-grey darken-2"
      class="ml-4 cyan--text"
      @click="resetAll()"
    > 
      Reset all
    </v-btn>
    <br>
    <br>
            <v-select
          :items="['low', 'medium', 'high']"
          label="LEVEL OF EMERGENCY" 
          v-model="levelOfEmergency"
          filled
        ></v-select>
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
      <v-spacer></v-spacer>
    <v-btn
      color="blue-grey darken-2"
      class="mr-4 cyan--text"
      @click="reset()"
    >
      Reset Form
    </v-btn>
     
    </v-toolbar>
    <v-card-text>
      <v-text-field
      v-model="names"
       color="cyan"
       class="cyan--text "
       label="Name"
      ></v-text-field>
            <v-text-field
        v-model="phoneNumber "
        color="black"
         class="cyan--text"
        label="phone"  
      ></v-text-field>
      <v-text-field
        v-model="description "
        color="black"
         class="cyan--text"
        label="description of case"  
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="grey darken-3"
        @click="send()"
         class="cyan--text"
      >
        Send
      </v-btn>
    </v-card-actions>
    <v-snackbar
    v-model="sent"
    :timeout="2000"
    absolute
    bottom
    left
    class="cyan--text"
    >
      message sent successfully
    </v-snackbar>
  </v-card>
          <v-select
          :items="['SAPS', 'EMERGENCY', 'Amdulance', 'FIRE']"
          label="OPTION OF TRANSFER"
          v-model="responsibleDepartment"
          filled
          class="mt-8 cyan--text"
        ></v-select>
        </div>
</template>

<script>


  export default {
    computed:{
    getApiUrl(){
      return this.$store.getters.getApiUrl
    }              
    },
    mounted(){
      navigator.geolocation.getCurrentPosition(this.success,this.error)
    },
    data () {
      return {
    sent: false,
    isEditing: null,
    phoneNumber: null,
    names: null ,
    description: null,
    levelOfEmergency: null,
    responsibleDepartment: null,
    report:{
    phoneNumber: null,
    names: null ,
    description: null,
    levelOfEmergency: null,
    responsibleDepartment: null,
    coords: []
    }
      }
    },

    methods: {
         reset () {
        this.phoneNumber = null
        this.names = null
        this.description  = null
      },
      resetAll () {
        this.phoneNumber = null
        this.levelOfEmergency = null
        this.responsibleDepartment = null
        this.names = null
        this.description  = null
      },
      send () {
      this.isEditing = !this.isEditing
      this.sent = true
      this.report.phone = this.phoneNumber 
      this.report.urgency = this.levelOfEmergency 
      this.report.department = this.responsibleDepartment 
      this.report.name = this.names
       this.report.description = this.description
       this.saveReport(report)
      // this.sendSMS()
      
      },
      saveReport(report){
        fetch(this.getApiUrl+'/save-safety-report',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(report)
        }).then(res =>{
          console.log(res)}).catch(err => console.log(err)).catch(err => console.log(err))
      },
      success(position){
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        this.report.coords = [latitude, longitude]
      },
     error(error){
     alert('Allow app to get your location to continue!')
     },
     sendSMS(){
      fetch(this.getApiUrl+'/notify-admin-of-safety-app-submission',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({
          phone:this.phoneNumber,
          message:this.description
        })
      }).then(res => {
        console.log(res)
      }).catch(err => console.log(err))
     }
    }
  }
</script>