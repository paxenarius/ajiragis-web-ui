<template>
  <div>Authenticating... Please Wait</div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    methods: {
      getParam(queryString, name) {
          name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
          var results = regex.exec(queryString);
          return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      },
      validateAndSaveTokenId() {
        let hash = window.location.hash;
        if (hash) {
          hash = hash.substr(1);

          const idToken = this.getParam(hash, 'id_token'),
            accessToken = this.getParam(hash, 'access_token'),
            expiresIn = this.getParam(hash, 'expires_in'),
            tokenType = this.getParam(hash, 'token_type'),
            sessionType = this.getParam(hash, 'session_state');

          // TODO: validate tokens

          this.$store.commit('setUser', accessToken);
          axios.defaults.headers.common['Authorization'] = `Token ${accessToken}`;
          window.localStorage.setItem('userToken', accessToken);
        }

        this.$router.push('/');
      }
    },
    mounted() {
      this.validateAndSaveTokenId();
    }
  }
</script>

<style scoped>
</style>