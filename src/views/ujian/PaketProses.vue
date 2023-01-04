<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";
import Fungsi from "@/components/lib/FungsiCampur"
import Toast from "@/components/lib/Toast.js";
const BASE_URL_FE = import.meta.env.VITE_API_URLFE
  ? import.meta.env.VITE_API_URLFE
  : "http://localhost:1000/";
const route = useRoute();
const aspek_id = route.params.aspek_id;
const no_soal = route.params.no_soal;
const dataAsli = ref(null)
const data = ref(null)
const getData = async () => {
  try {
    const response = await Api.get(`siswa/v2/data/ujian/aktif/aspek/null/soal/${no_soal}`);
    dataAsli.value = response.data;
    data.value = response.data;
    // console.log(data.value.pilihan);
    // console.log('====================================');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
getData();
const linkSoal = ref(`${BASE_URL_FE}paket/aspek/${aspek_id}/nomer/${no_soal}`)

const linkBefore = ref(`${BASE_URL_FE}paket/aspek/${aspek_id}/nomer/${parseInt(no_soal) - 1}`)
const linkNext = ref(`${BASE_URL_FE}paket/aspek/${aspek_id}/nomer/${parseInt(no_soal) + 1}`)

const doStoreData = async (kode_jawaban) => {
  let dataStore = {
    kode_jawaban: kode_jawaban,
  };
  try {
    const response = await Api.post(`siswa/v2/data/ujian/aktif/aspek/null/soal/${no_soal}`, dataStore);
    Toast.success("Success", "Data Berhasil disimpan!");
    getData();

  } catch (error) {
    Toast.danger("Warning", "Data gagal disimpan!");
    console.error(error);
  }
};
</script>
<template>
  <div v-if="data">
    <div class="px-10 pt-10">
      <div class="prose space-x-2">
        <!-- <h2 class="text-2xl font-bold">NO 1:</h2> -->

        <button class="btn btn-outline gap-2">
          NO SOAL
          <!-- <div class="badge badge-info ">1</div> -->
          <span class="font-bold text-lg">{{ no_soal }}</span>
        </button>

        <!-- <button class="btn btn-primary gap-2">
          BELUM DIJAWAB
          <div class="badge badge-warning">5</div>
        </button> -->
      </div>
    </div>

    <div class="m-4 pb-4 rounded shadow-md">
      <div class="p-0">
        <div class="card w-full bg-info/10 shadow-xl text-justify">
          <div class="card-body">
            <span class=" font-bold ">Pertanyaan : </span>
            <span class="text-base" v-html="data.paketsoal_soal?.pertanyaan">
            </span>
            <div class="divider"></div>
            <span class="font-extralight text-xs">
              <span class="font-bold">Jawaban tersimpan : </span>
              <span>{{ data.jawaban_tersimpan ? Fungsi.fnNumberToAlphabet(data.jawaban_tersimpan) : "-" }}</span>
              <!-- <div class="divider"></div> -->
              <span v-html="data?.paketsoal_pilihanjawaban?.jawaban">

              </span>
            </span>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-10" v-if="data?.pilihan">
        <div class="p-4" v-for="item, index in data.pilihan" :key="item.kode_soal"
          @click="doStoreData(item.kode_jawaban)">
          <div class="card w-full bg-info shadow-md hover:shadow-lg text-justify"
            v-if="data?.kode_jawaban == item.kode_jawaban">
            <div class="card-body">
              <span class=" font-bold ">{{ Fungsi.fnNumberToAlphabet(index + 1) }} . </span>
              <p class="text-base" v-html="item.jawaban">
              </p>
            </div>
          </div>
          <div class="card w-full bg-base-200 shadow-md hover:shadow-lg text-justify " v-else>
            <div class="card-body">
              <span class=" font-bold ">{{ Fungsi.fnNumberToAlphabet(index + 1) }} . </span>
              <p class="text-base" v-html="item.jawaban">
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="p-4">
        <div class="card w-full bg-info shadow-md hover:shadow-lg text-justify">
          <div class="card-body">
            <span class=" font-bold ">C . </span>
            <p class="text-base"> Pilihan Jawaban C
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
              alias minima rerum. Soluta assumenda eveniet obcaecati maxime temporibus
              qui ab voluptas doloremque illo, odio optio ex, atque numquam tempore
              quis.
            </p>
          </div>
        </div>
      </div> -->
      </div>

      <!-- <div>
        <div class="w-full flex justify-end px-4">
          <button class="btn btn-lg btn-success">Simpan dan Lanjutkan</button>
        </div>
      </div> -->
    </div>

    <!-- <div class="divider"></div> -->
    <div class="pb-5">
      <div class="w-full flex justify-end px-4 space-x-2">
        <a :href="linkBefore" v-if="no_soal > 1">
          <button class="btn btn-sm btn-accent">Sebelumnya</button></a>
        <a :href="linkNext" v-if="no_soal < data?.soal_jml">
          <button class="btn btn-sm btn-info">Selanjutnya</button>
        </a>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- <div class="p-4">
      <div class="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="stroke-current flex-shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Soal tidak ditemukan!</span>
        </div>
      </div>
    </div> -->
  </div>
</template>
