<template>
  <div class="p-4">
    <div class="alert alert-info shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Urutkan mulai dari yang anda sukai!</span>
      </div>
    </div>
  </div>
  <div class="flex m-4 lg:m-6 justify-center">

    <div class="grid-cols-1 w-96">
      <article class="prose">
        <h2>Soal 1 :</h2>
      </article>
      <VueDraggableNext v-bind="dragOptions" v-model="list" class="dragArea list-group w-full" :list="list.id"
        @change="log">
        <div class="list-group-item bg-gray-100 m-1 p-3 rounded-md text-center" v-for="element, index in list"
          :key="element.nama">
          <!-- <label class="font-bold text-sm">
            {{ element.id }}. {{ element.nama }}</label> -->
          <div
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
            <div class="inline-flex items-center space-x-2">
              <div>
                <!-- <svg class="w-6 h-6 text-slate-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                  </path>
                </svg> -->

                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-slate-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg> -->
                {{ element.id }}.
              </div>
              <div class="text-slate-500 ">
                <label>
                  {{ element.nama }}</label>
              </div>
            </div>
            <div>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg> -->
              +{{ index + 1 }}
            </div>
          </div>
        </div>
      </VueDraggableNext>
    </div>
  </div>
  <div>
    <div class="w-full flex justify-center px-4">
      <button class="btn btn-lg btn-success">Simpan dan Lanjutkan</button>
    </div>
  </div>
  <div class="divider"></div>
  <div>
    <div class="w-full flex justify-center px-4 space-x-2">
      <button class="btn btn-sm btn-accent">Sebelumnya</button>
      <button class="btn btn-sm btn-info">Selanjutnya</button>
    </div>
  </div>

  <div class="divider"></div>
  <div>
    <article class="prose">
      <h1>Hasil :</h1>
      <h3>1. {{ list[0].nama }}</h3>
      <h3>2. {{ list[1].nama }}</h3>
      <h3>3. {{ list[2].nama }}</h3>
      <p>
        {{ list }}
      </p>
    </article>

    <hr />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
const enabled = true;
const list = ref([
  { nama: "Pekerjaan Pertanian", id: 1 },
  { nama: "Pengemudi Kendaraan Militer", id: 2 },
  { nama: "Akuntan", id: 3 },
  { nama: "ilmiawati", id: 4 },
  { nama: "Penjual Hasil Mode", id: 5 },
  { nama: "Seniwati", id: 6 },
  { nama: "Wartawati", id: 7 },
  { nama: "Pianis Konser", id: 8 },
  { nama: "Guru Sekolah Dasar", id: 9 },
  { nama: "Sekretaris Pribadi", id: 10 },
  { nama: "Modiste", id: 11 },
  { nama: "Dokter", id: 12 },
]);
const dragging = false;
const log = (event) => {
  console.log(event);
};

const dragOptions = {
  animation: 200,
  group: "description",
  disabled: false,
  ghostClass: "ghost"
}
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>