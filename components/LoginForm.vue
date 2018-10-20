<template>
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
          <v-card>
            <v-card-text class="pt-4">
              <div>

                  <v-alert
                    :value="true"
                    v-if="loginError"
                    type="error"
                  >
                    {{ LoginError }}
                  </v-alert>
                  <v-form v-model="valid" ref="form">
                    <v-text-field
                      label="Enter your e-mail address"
                      v-model="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      label="Enter your password"
                      v-model="password"
                      min="8"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      :rules="passwordRules"
                      counter
                      required
                    ></v-text-field>
                    <v-layout justify-space-between>
                        <v-btn color="info" block @click="getAPIToken" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                    </v-layout>
                  </v-form>
                  <h2 style="text-align: center;"> - OR - </h2>

                  <a :href="ssoURL" class="v-btn v-btn--block theme--dark error">Login With Ajira</a>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  import axios from '~/plugins/axios'

  const client_id = 'ajira_world',
    redirect_uri = 'https://dev1.ajira.world/translator/auth',
    ssoURL = process.env.LoginUrl + `?client_id=${encodeURIComponent(client_id)}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=id_token token&scope=openid phone email profile&nonce=123&prompt=login`;

  let loginURL = process.env.APIBaseUrl + 'get_token/';

    export default {
      name: 'LoginForm',
      data: function () {
        return {
          loginError: '',
          valid: false,
          email: '',
          emailRules: '',
          password: '',
          passwordRules: '',
          e1: true,
          ssoURL
        }
      },
      methods: {
        googleSignUp: function () {
          this.$store.dispatch('signInWithGoogle').then(() => {
            console.log('inside then statement on login')
          }).catch((e) => {
            console.log(e.message)
          })
        },
        getAPIToken: function () {
          var self = this;
          axios.post(loginURL, {username: this.email, password:this.password})
          .then(function (response) {
            self.$store.commit('setUser', response.data.token);
            axios.defaults.headers.common['Authorization'] = 'Token ' + response.data.token
            window.localStorage.setItem('userToken', response.data.token);
            self.$router.push({path: '/'});
          })
          .catch(function (error) {
            self.loginError ="Invalid credentials provided"
            console.log(error);
          });
        }
      }
    }
</script>

<style scoped>

</style>
