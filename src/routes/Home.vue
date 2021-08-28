<template>
  <div class="container">
    <h1>Home</h1>

    <h3>You can input message here:</h3>
    <input
      class="form-control"
      v-model="msg" />
    <button
      @click="reverseMsg"
      class="btn btn-light">
      reverseMsg
    </button>
    <button
      @click="updateMsg"
      class="btn btn-light">
      updateMsg
    </button>
    <button
      @click="resetMsg"
      class="btn btn-light">
      resetMsg
    </button>
  </div>
</template>


<script>
export default {
  computed: {
    msg:
    {
    get () {
      return this.$store.state.message.msg
    },
    set (value) {
      this.$store.commit('message/updateMsg', value)
    }
    }
  },
  methods: {
    updateMsg() {
      this.$store.commit('message/updateMsg', 'msg updated!')
    },
    reverseMsg() {
      this.$store.dispatch('message/reverseMsg')
    },
    resetMsg(){
      this.$store.commit('message/updateMsg', '')
    }
  }
 
}
</script>

<style lang="scss">


body { 
   font-family: 'Raleway', sans-serif;
}

h1{
  font-weight: 600;
}

</style>