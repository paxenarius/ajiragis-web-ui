<template>
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
          <v-card>
            <v-card-text class="pt-4">
              <div>

                  <!--<v-alert-->
                    <!--:value="true"-->
                    <!--v-if="loginError"-->
                    <!--type="error"-->
                  <!--&gt;-->
                    <!--{{ LoginError }}-->
                  <!--</v-alert>-->
                  <!--<v-form v-model="valid" ref="form">-->
                    <!--<v-text-field-->
                      <!--label="Enter your e-mail address"-->
                      <!--v-model="email"-->
                      <!--:rules="emailRules"-->
                      <!--required-->
                    <!--&gt;</v-text-field>-->
                    <!--<v-text-field-->
                      <!--label="Enter your password"-->
                      <!--v-model="password"-->
                      <!--min="8"-->
                      <!--:append-icon="e1 ? 'visibility' : 'visibility_off'"-->
                      <!--:append-icon-cb="() => (e1 = !e1)"-->
                      <!--:type="e1 ? 'password' : 'text'"-->
                      <!--:rules="passwordRules"-->
                      <!--counter-->
                      <!--required-->
                    <!--&gt;</v-text-field>-->
                    <!--<v-layout justify-space-between>-->
                        <!--<v-btn color="info" block @click="getAPIToken" :class=" { 'blue darken-4 white&#45;&#45;text' : valid, disabled: !valid }">Login</v-btn>-->
                    <!--</v-layout>-->
                  <!--</v-form>-->
                  <!--<h2 style="text-align: center;"> - OR - </h2>-->

                  <!--<v-btn color="error" dark block @click.native="googleSignUp">-->
                    <!--Sign in using Google-->
                  <!--</v-btn>-->

                  <!--<v-btn color="info" class="facebook" dark block>Sign in using Facebook</v-btn>-->
                  <!--<v-btn color="info" dark block>Sign in using Twitter</v-btn>-->
                  <v-btn color="info" dark block  @click.native="ajiraSignIn">Sign in with Ajira</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import axios from '~/plugins/axios'
  import Mgr from '~/services/security_service'

  let loginURL = process.env.APIBaseUrl + 'get_token/'

  export default {
    name: 'LoginForm',
    data () {
      return {
        mgr: new Mgr(),
        signedIn: true
      }
    },
    methods: {
      ajiraSignIn: function () {
        var self = this
        this.$store.dispatch('signInWithAjira').then(() => {
          self.$router.push({path: '/'})
        }).catch((e) => {
          console.log(e.message)
        })
      },
      googleSignUp: function () {
        this.$store.dispatch('signInWithGoogle').then(() => {
          console.log('inside then statement on login')
        }).catch((e) => {
          console.log(e.message)
        })
      },
      getAPIToken: function () {
        var self = this
        axios.post(loginURL, {username: this.email, password: this.password})
          .then(function (response) {
            self.$store.commit('setUser', response.data.token)
            axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.token
            window.localStorage.setItem('userToken', response.data.token)
            self.$router.push({path: '/'})
          })
          .catch(function (error) {
            self.loginError = 'Invalid credentials provided'
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
