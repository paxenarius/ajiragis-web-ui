<template>
  <div>
    <div class="text-xs-center">
      <img src="/logo.png" alt="logo" class="logo" />
    </div>
    <login-form></login-form>
  </div>
</template>

<script>
  import LoginForm from '~/components/LoginForm'
  export default {
    name: "login",
    components: {
      LoginForm
    }
  }
</script>

<style scoped>

</style>