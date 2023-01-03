<template>
  <div>
    {{ list }}
    <hr />
    {{ list[0] }}
  </div>
  <div class="flex m-10">
    <VueDraggableNext
      v-model="list"
      class="dragArea list-group w-full"
      :list="list"
      @change="log"
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list"
        :key="element.name"
      >
        <label class="font-bold text-3xl"> {{ element.name }}</label>
      </div>
    </VueDraggableNext>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
const enabled = true;
const list = ref([
  { name: "John 123", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);
const dragging = false;
const log = (event) => {
  console.log(event);
};
</script>
