<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast.js";

const router = useRouter();
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

const doMulai = (id, tipe) => {
  // console.log('====================================');
  // console.log('mulai', id);
  // console.log('====================================');
  if (tipe == 'Skolastik') {
    router.push({
      name: 'ujian.psikotest.paket.aspek',
      params: { aspek_id: id }
    })
  } else if (tipe == 'KFace') {
    Toast.warning("Info", 'Menu belum tersedia!');
  }
}
const doLanjutkan = (id) => {
  router.push({
    name: 'ujian.psikotest.paket.proses',
    params: { aspek_id: id, no_soal: 1 }
  })
  // console.log('====================================');
  // console.log('lanjutkan', id);
  // console.log('====================================');
}
</script>
<template>
  <div class="p-4" v-if="data == null">
    <div class="alert alert-error shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Ujian aktif tidak ditemukan!</span>
      </div>
    </div>
  </div>
  <div class="p-4">
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Judul</th>
            <th>Status</th>
            <th>Waktu Pengerjaan</th>
            <th>Jumlah Soal</th>
            <th>Tipe</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in data" :key="item.id">
            <th>{{ index + 1 }}</th>
            <th>{{ item.paketsoal_nama }}</th>
            <td>
              <button class="btn btn-info" v-if="item.status == 'lanjutkan'"
                @click="doLanjutkan(item.id)">LANJUTKAN</button>
              <button class="btn btn-warning" v-else-if="item.status == 'selesai'">SELESAI</button>
              <button class="btn btn-primary" v-else @click="doMulai(item.id, item.tipe)">MULAI</button>

            </td>
            <td>{{ item.paketsoal_waktu }} menit</td>
            <td>{{ item.paketsoal_soal_jml }} soal</td>
            <td>{{ item.tipe }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
