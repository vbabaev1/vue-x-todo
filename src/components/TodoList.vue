<template>
  <div class="todo-list__container">
    <h3>Todos</h3>
    <div class="todo-list">
      <div v-for="todo in filteredTodos" v-bind:key="todo.id">
        <SingleTodo :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SingleTodo from '@/components/SingleTodo'

export default {
  name: 'TodoList',
  components: {
    SingleTodo
  },
  methods: {
    ...mapActions(['fetchTodos'])
  },
  computed: {
    ...mapGetters(['allTodos', 'tab']),
    filteredTodos () {
      console.log(this.tab)
      let arr = []
      switch (this.tab) {
        case 'all':
          console.log(1)
          arr = this.allTodos
          break
        case 'completed':
          console.log(2)
          arr = this.allTodos.filter(item => item.completed)
          break
        case 'todo':
          console.log(3)
          arr = this.allTodos.filter(item => !item.completed)
          break
        default:
          break
      }
      console.log('arr: ', arr)
      return arr
    }
  },
  created () {
    this.fetchTodos()
  }
}
</script>

<style lang="scss" scoped>
.todo-list__container {
  max-width: 50%;
  margin: 0 auto;

  .todo-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
}

</style>
