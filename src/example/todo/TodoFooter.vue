<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  todos: Array,
  remaining: Number,
  visibility: String,
  removeCompleted: Function,
  removeAll: Function,
});
</script>

<template>
  <footer class="footer" v-show="props.todos.length">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
    </span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: visibility === 'active' }"
          >Active</a
        >
      </li>
      <li>
        <a href="#/completed" :class="{ selected: visibility === 'completed' }"
          >Completed</a
        >
      </li>
    </ul>
    <button
      class="clear-completed"
      @click="props.removeCompleted"
      v-show="props.todos.length > remaining"
    >
      Clear completed
    </button>
    <button class="clear-all" @click="props.removeAll">Clear all</button>
  </footer>
</template>

<style>
.footer {
  padding: 10px 15px;
  height: 40px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: #db7676;
}

.filters li a.selected {
  border-color: #ce4646;
}

.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 19px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 10px;
}

.clear-completed:hover {
  text-decoration: underline;
}
</style>
