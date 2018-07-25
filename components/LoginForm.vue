<template>
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
          <v-card>
            <v-card-text class="pt-4">
              <div>
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
                        <v-btn color="info" block @click="submit" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                    </v-layout>
                  </v-form>
                  <h2 style="text-align: center;"> - OR - </h2>
                  <v-btn color="error" dark block @click.native="googleSignUp">
                    Sign in using Google
                  </v-btn>
                  <v-btn color="info" class="facebook" dark block>Sign in using Facebook</v-btn>
                  <v-btn color="info" dark block>Sign in using Twitter</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
    export default {
      name: 'LoginForm',
      methods: {
        googleSignUp () {
          this.$store.dispatch('signInWithGoogle').then(() => {
            console.log('inside then statement on login')
          }).catch((e) => {
            console.log(e.message)
          })
        }
      }
    }
</script>

<style scoped>

</style>
