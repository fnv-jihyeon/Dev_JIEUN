<script setup>
import PolyGraph from './PolyGraph.vue';
import { ref, reactive } from 'vue';

/* ref는 단일값을 반응형으로 만드는 방법 */
/* reactive는 객체나 배열과 같은 복합 데이터 구조를 반응형으로 만드는 방법 */
const newLabel = ref('');
const stats = reactive([
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 },
]);

function add(e) {
  e.preventDefault();
  if (!newLabel.value) return;
  stats.push({
    label: newLabel.value,
    value: 100,
  });
  newLabel.value = '';
}

function remove(stat) {
  if (stats.length > 3) {
    stats.splice(stats.indexOf(stat), 1);
  } else {
    alert("Can't delete more!");
  }
}
</script>

<template>
  <div class="graph">
    <svg width="200" height="200">
      <PolyGraph :stats="stats"></PolyGraph>
    </svg>

    <div v-for="(stat, index) in stats" :key="index">
      <label class="graph-label">{{ stat.label }}</label>
      <input type="range" v-model="stat.value" min="0" max="100" />
      <span>{{ stat.value }}</span>
      <button @click="remove(stat)" class="remove">X</button>
    </div>

    <form id="add">
      <input name="newlabel" v-model="newLabel" />
      <button @click="add">Add a Stat</button>
    </form>
  </div>
</template>

<style>
.graph {
  position: relative;
}

polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

.graph-label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>
