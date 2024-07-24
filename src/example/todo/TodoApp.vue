<script setup>
import { ref, computed, watchEffect } from 'vue';
import TodoHeader from './TodoHeader.vue';
import TodoList from './TodoList.vue';
import TodoFooter from './TodoFooter.vue';

const STORAGE_KEY = 'vue-todomvc';

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
};

const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
const visibility = ref('all');
const editedTodo = ref();

const filteredTodos = computed(() => filters[visibility.value](todos.value));
const remaining = computed(() => filters.active(todos.value).length);

window.addEventListener('hashchange', onHashChange);
onHashChange();

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value));
});

function toggleAll(e) {
  todos.value.forEach((todo) => (todo.completed = e.target.checked));
}

function addTodo(e) {
  const value = e.target.value.trim();
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false,
    });
    e.target.value = '';
  }
}

function removeTodo(todo) {
  todos.value.splice(todos.value.indexOf(todo), 1);
}

let beforeEditCache = '';
function editTodo(todo) {
  beforeEditCache = todo.title;
  editedTodo.value = todo;
}

function cancelEdit(todo) {
  editedTodo.value = null;
  todo.title = beforeEditCache;
}

function doneEdit(todo) {
  if (editedTodo.value) {
    editedTodo.value = null;
    todo.title = todo.title.trim();
    if (!todo.title) removeTodo(todo);
  }
}

function removeCompleted() {
  todos.value = filters.active(todos.value);
}

function removeAll() {
  todos.value = [];
}

/* URL 변경에 따라 업데이트 */
function onHashChange() {
  const route = window.location.hash.replace(/#\/?/, '');
  if (filters[route]) {
    visibility.value = route;
  } else {
    window.location.hash = '';
    visibility.value = 'all';
  }
}
</script>

<template>
  <section class="todoapp">
    <TodoHeader :addTodo="addTodo" />
    <TodoList
      :todos="todos"
      :filteredTodos="filteredTodos"
      :remaining="remaining"
      :toggleAll="toggleAll"
      :editTodo="editTodo"
      :removeTodo="removeTodo"
      :doneEdit="doneEdit"
      :cancelEdit="cancelEdit"
      :editedTodo="editedTodo"
    />
    <TodoFooter
      :todos="todos"
      :remaining="remaining"
      :visibility="visibility"
      :removeCompleted="removeCompleted"
      :removeAll="removeAll"
    />
  </section>
</template>

<style>
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
}

.hidden {
  display: none;
}

.todoapp {
  background: #fff;
  margin: 130px auto 40px auto;
  position: relative;
  max-width: 550px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.info {
  margin: 65px auto 0;
  color: #4d4d4d;
  font-size: 11px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

.info p {
  line-height: 1;
}

.info a {
  color: inherit;
  text-decoration: none;
  font-weight: 400;
}

.info a:hover {
  text-decoration: underline;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }

  .todo-list li .toggle {
    height: 40px;
  }
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }

  .filters {
    bottom: 10px;
  }
}

.toggle:focus + label,
.toggle-all:focus + label {
  box-shadow: 0 0 2px 2px #cf7d7d;
  outline: 0;
}
.filters {
  right: 100px;
}

.clear-all,
html .clear-all:active {
  float: right;
  position: relative;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
}

.clear-all:hover {
  text-decoration: underline;
}

.clear-completed {
  margin-left: 10px;
}
</style>
