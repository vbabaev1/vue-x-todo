<template>
  <div>
    <select @change="changeTab($event)">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="todo">To do</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoFilter',
  methods: {
    ...mapActions(['fetchTodos', 'updateTab']),
    changeTab ($event) {
      console.log('value: ', $event.target.value)
      this.updateTab($event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
