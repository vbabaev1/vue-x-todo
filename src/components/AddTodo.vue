<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" placeholder="Add todo..." v-model="title">
      <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit (e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    }
  }
}
</script>

<style>

</style>
