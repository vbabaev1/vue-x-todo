import axios from 'axios'

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One',
      completed: false
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: false
    }
  ],
  tab: 'all'
}

const getters = {
  allTodos: (state: any) => state.todos,
  tab: () => state.tab
}

const actions = {
  async fetchTodos ({ commit }: any) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setTodos', response.data)
  },

  async addTodo ({ commit }: any, title: string) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, checked: false })
    console.log(response.data, title)
    commit('addTodo', response.data)
  },

  async deleteTodo ({ commit }: any, id: number) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('deleteTodo', id)
  },

  async updateTodo ({ commit }: any, todo: any) {
    commit('updateTodo', todo)
  },

  async updateTab ({ commit }: any, tab: any) {
    commit('updateTab', tab)
    console.log('tab in Action: ', tab)
  }
}

const mutations = {
  setTodos: (state: any, todos: any) => { state.todos = todos },
  addTodo: (state: any, todo: any) => { state.todos.unshift(todo) },
  deleteTodo: (state: any, id: number) => { state.todos = state.todos.filter((item: any) => item.id !== id) },
  updateTodo: (state: any, todo: any) => {
    console.log('updateTodo todo: ', todo)
    state.todos = state.todos.map((item: any) => {
      if (item.id === todo.id) {
        item = todo
      }
      return item
    })
  },
  updateTab: (state: any, tab: any) => {
    console.log('tab in Mutation: ', tab)
    state.tab = tab
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
