<script setup>
import { ref } from "vue"
import Api from "@/axios/axios";

const dataAsli = ref(null)
const dataSiswa = ref(null)
const getData = async () => {
  try {
    const response = await Api.post(`siswa/auth/me`);
    dataAsli.value = response;
    dataSiswa.value = response.identitas;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
getData();
</script>
<template>
  <div class="p-4">
    <div class="alert alert-warning shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Pastikan data anda telah sesuai!</span>
      </div>
    </div>
  </div>

  <div class="md:py-2 p-4 lg:flex flex-wrap gap-4" v-if="dataSiswa">
    <div class="w-full lg:w-full">
      <div class="bg-white shadow rounded-lg px-4 py-4">
        <div class="overflow-x-auto">
          <table class="table table-compact">
            <tbody>
              <!-- row 1 -->
              <tr>
                <td class="whitespace-nowrap w-1/12">No Induk</td>
                <td class="whitespace-nowrap w-1/12">:</td>
                <td class="whitespace-nowrap w-10/12">
                  {{ dataSiswa.nomeridentitas }}
                </td>
              </tr>
              <!-- row 2 -->
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>{{ dataSiswa.nama }}</td>
              </tr>
              <!-- row 3 -->
              <!-- <tr>
                <td>Umur</td>
                <td>:</td>
                <td>{{ dataSiswa.umur }}</td>
              </tr> -->
              <!-- row 3 -->
              <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>{{ dataSiswa.jk }}</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <td>Sekolah</td>
                <td>:</td>
                <td>{{ dataSiswa.sekolah_nama }}</td>
              </tr>
              <tr>
                <td>Kelas</td>
                <td>:</td>
                <td>{{ dataSiswa.kelas_nama }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>
