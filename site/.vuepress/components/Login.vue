<template>
  <button @click="login">Login</button>
</template>

<script>
const email = 'droyer01@gmail.com'
const password = 'Dance4life'
export default {
  methods: {
    async login () {
      const userData = await this.$auth.login(email, password, true)
      console.log("TCL: login -> userData", userData)
      this.$user = userData
      localStorage.setItem('currentUser', JSON.stringify(userData))
      alert('logged in!')
    }

  }
}
</script>

<style lang="scss" scoped>
</style>