<script setup>
import { defineProps } from 'vue';
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todos: Array,
  filteredTodos: Array,
  remaining: Number,
  toggleAll: Function,
  editTodo: Function,
  removeTodo: Function,
  doneEdit: Function,
  cancelEdit: Function,
  editedTodo: Object,
});
</script>

<template>
  <section class="main" v-show="props.todos.length">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="remaining === 0"
      @change="toggleAll"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodoItem
        v-for="todo in props.filteredTodos"
        :key="todo.id"
        :todo="todo"
        :editedTodo="editedTodo"
        :editTodo="editTodo"
        :removeTodo="removeTodo"
        :doneEdit="doneEdit"
        :cancelEdit="cancelEdit"
      />
    </ul>
  </section>
</template>

<style>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.toggle-all {
  width: 1px;
  height: 1px;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
}

.toggle-all + label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 65px;
  font-size: 0;
  position: absolute;
  top: -65px;
  left: -0;
}

.toggle-all + label:before {
  content: '❯';
  display: inline-block;
  font-size: 22px;
  color: #949494;
  padding: 10px 27px 10px 27px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.toggle-all:checked + label:before {
  color: #484848;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
