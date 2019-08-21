<template>
  <button @click="logout">Logout</button>
</template>

<script>

export default {
  methods: {

    async logout () {
      const user = await this.$auth.currentUser()
      await user.logout()
      this.$user = {}
      alert('Logged Out')

    }

  }
}
</script>

<style lang="scss" scoped>
</style>