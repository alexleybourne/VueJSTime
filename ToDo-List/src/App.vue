<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>

import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo]
    },
    mounted() {
      axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => (console.log(res.data)))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #56beff;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.2s;
  }

  .btn:hover {
    background: #3fb5ff;
    transform: scale(1.1);
  }
</style>
