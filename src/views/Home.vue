<template>
  <div class="home">
    <AddTodo/>
    <TodoFilter/>
    <TodoList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import TodoFilter from '@/components/FilterTodos'

export default {
  name: 'Home',
  components: {
    TodoList,
    AddTodo,
    TodoFilter
  }
}
</script>
