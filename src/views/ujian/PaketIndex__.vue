<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";

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
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Judul</th>
            <th>Status</th>
            <th>Waktu Pengerjaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Minat dan Bakat</th>
            <td>
              <RouterLink :to="{ name: 'minatbakat' }">
                <button class="btn btn-info">Lanjutkan</button>
              </RouterLink>
            </td>
            <td>10 menit</td>
          </tr>
          <tr>
            <th>2</th>
            <th>Kategori A</th>
            <td>
              <RouterLink :to="{ name: 'klasik.index' }">
                <button class="btn btn-warning">Belum</button>
              </RouterLink>
            </td>
            <td>5 menit</td>
          </tr>
          <tr>
            <th>3</th>
            <th>Kategori B</th>
            <td><button class="btn btn-primary">Selesai</button></td>
            <td>90 menit</td>
          </tr>
          <tr>
            <th>4</th>
            <th>Kategori C</th>
            <td><button class="btn btn-primary">Selesai</button></td>
            <td>90 menit</td>
          </tr>
          <tr>
            <th>5</th>
            <th>Karakter Face</th>
            <td>
              <RouterLink :to="{ name: 'karakter.instruksi' }">
                <button class="btn btn-info">Mulai</button>
              </RouterLink>
            </td>
            <td>20 menit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
