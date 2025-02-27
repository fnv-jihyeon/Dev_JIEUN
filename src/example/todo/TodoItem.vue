<script setup>
import { ref } from 'vue';
import { defineProps, watch } from 'vue';

const props = defineProps({
  todo: Object,
  editedTodo: Object,
  editTodo: Function,
  removeTodo: Function,
  doneEdit: Function,
  cancelEdit: Function,
});

const localTodo = ref({ ...props.todo });

watch(
  () => props.todo,
  (newTodo) => {
    localTodo.value = { ...newTodo };
  },
  { deep: true }
);

const handleDoneEdit = () => {
  props.doneEdit(localTodo.value);
};

const handleCancelEdit = () => {
  props.cancelEdit(localTodo.value);
};
</script>

<template>
  <li
    class="todo"
    :class="{
      completed: todo.completed,
      editing: props.todo === props.editedTodo,
    }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="localTodo.completed" />
      <label @dblclick="props.editTodo">{{ localTodo.title }}</label>
      <button class="destroy" @click="props.removeTodo"></button>
    </div>
    <input
      v-if="isEditing"
      class="edit"
      type="text"
      v-model="localTodo.title"
      @blur="handleDoneEdit"
      @keyup.enter="handleDoneEdit"
      @keyup.escape="handleCancelEdit"
    />
  </li>
</template>

<style>
.todo {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo:last-child {
  border-bottom: none;
}

.todo .editing {
  border-bottom: none;
  padding: 0;
}

.todo .editing .edit {
  display: block;
  width: calc(100% - 43px);
  padding: 12px 16px;
  margin: 0 0 0 43px;
}

.todo .editing .view {
  display: none;
}

.todo .toggle {
  text-align: center;
  width: 40px;
  /* auto, since non-WebKit browsers doesn't support input styling */
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none; /* Mobile Safari */
  -webkit-appearance: none;
  appearance: none;
}

.todo .toggle {
  opacity: 0;
}

.todo .toggle + label {
  /*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}

.todo .toggle:checked + label {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E');
}

.todo label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
  font-weight: 400;
  color: #484848;
}

.todo.completed label {
  color: #949494;
  text-decoration: line-through;
}

.todo .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #949494;
  transition: color 0.2s ease-out;
}

.todo .destroy:hover,
.todo .destroy:focus {
  color: #c18585;
}

.todo .destroy:after {
  content: '×';
  display: block;
  height: 100%;
  line-height: 1.1;
}

.todo:hover .destroy {
  display: block;
}

.todo .edit {
  display: none;
}

.todo .editing:last-child {
  margin-bottom: -1px;
}
</style>
