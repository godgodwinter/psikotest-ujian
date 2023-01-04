<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";

const route = useRoute();
const aspek_id = route.params.aspek_id;
const dataAsli = ref(null)
const data = ref(null)
const getData = async () => {
  try {
    const response = await Api.get(`siswa/v2/data/ujian/aktif`);
    dataAsli.value = response.data;
    data.value = response.data;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
getData();
</script>
<template>
  <div class="p-4">
    <div class="flex m-4 lg:m-6 justify-center">

      <div class="grid-cols-1 w-96">
        <article class="prose">
          <h2>JUDUL</h2>
        </article>
      </div>
    </div>

    <div class="divider"></div>
    <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
      <article class="prose">
        <h2>1. Instruksi :</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur vero pariatur in sint
          consectetur modi molestiae quis, culpa tenetur possimus. Omnis iste esse, nisi reprehenderit tenetur
          voluptate aspernatur praesentium.</p>
      </article>
    </div>
    <div class="divider"></div>
    <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
      <article class="prose">
        <h2>2. Instruksi :</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur vero pariatur in sint
          consectetur modi molestiae quis, culpa tenetur possimus. Omnis iste esse, nisi reprehenderit tenetur
          voluptate aspernatur praesentium.</p>
      </article>
    </div>
    <div class="divider"></div>
    <div>
      <div class="w-full flex justify-center px-4">
        <RouterLink :to="{ name: 'ujian.psikotest.paket.proses', params: { aspek_id, no_soal: 1 } }">
          <button class="btn btn-lg btn-success">Mulai</button>
        </RouterLink>
      </div>
    </div>
    <div class="divider"></div>
    <!-- <div>
          <div class="w-full flex justify-center px-4 space-x-2">
              <button class="btn btn-sm btn-accent">Sebelumnya</button>
              <button class="btn btn-sm btn-info">Selanjutnya</button>
          </div>
      </div> -->
  </div>
</template>
