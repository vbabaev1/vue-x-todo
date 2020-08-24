<template>
  <div @dblclick="toggleCheck($event)" v-bind:class="{ 'checked': isChecked, 'todo-container': true }" class="todo-container">
    <div @dblclick="editTodo($event)" class="todo-title">
      <span v-if="!editMode">{{todo.title}}</span>
      <form v-if="editMode" @submit="updateCurrentTodo($event, todo)">
        <input  type="text" v-model="todo.title">
      </form>
    </div>
    <div class="todo-trash">
      <i @click="deleteTodo(todo.id)" class="far fa-angry" ></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingleTodo',
  data () {
    return {
      editMode: false
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    toggleCheck ($event) {
      $event.stopPropagation()
      this.todo.completed = !this.todo.completed
      this.updateTodo(this.todo)
    },
    editTodo ($event) {
      this.editMode = true
      $event.stopPropagation()
    },
    updateCurrentTodo ($event, todo) {
      this.updateTodo(todo)
      $event.preventDefault()
      this.editMode = false
    }
  },
  computed: {
    isChecked () {
      return this.todo.completed
    }
  }
}
</script>

<style scoped lang="scss">
.todo-container {
  display: flex;
  background: lightblue;
  padding: 1rem;
  margin-bottom: 1rem;
  height: 50px;

  .todo-title {
    margin: auto;
    max-height: 55px;
    overflow-y: hidden;
  }

  .todo-trash {
    align-self: flex-end;
    margin-left: 0.5rem;
  }

  .todo-trash:hover {
    color: darkgrey;
  }
}

.checked {
  background: lightgreen;
}

</style>
