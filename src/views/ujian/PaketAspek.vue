<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast.js";

const route = useRoute();
const router = useRouter();
const aspek_id = route.params.aspek_id;
const dataAsli = ref(null)
const data = ref(null)
const getData = async () => {
  try {
    const response = await Api.get(`siswa/v2/data/ujian/aktif/aspek/${aspek_id}`);
    dataAsli.value = response.data;
    data.value = response.data;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
getData();

const doMulai = async () => {
  if (confirm("Apakah anda yakin memulai paket ini ?")) {
    try {
      const response = await Api.post(`siswa/v2/data/ujian/aktif/aspek/${aspek_id}/do_mulai`);
      const res = response;
      if (res.success) {
        Toast.success("Success", "Data Berhasil disimpan!");
        router.push({ name: 'ujian.psikotest.paket.proses', params: { aspek_id, no_soal: 1 } });
      } else {
        Toast.warning("Warning", "Tidak dapat memulai!");
      }
      // getData();

    } catch (error) {
      Toast.danger("Warning", "Data gagal disimpan!");
      console.error(error);
    }
  };
};
</script>
<template>
  <div v-if="data">

  <div class="p-4">
    <div class="flex m-4 lg:m-6 justify-center">

      <div class="grid-cols-1 w-96">
        <article class="prose">
          <h2>{{ data?.paketsoal_aspek?.nama }}</h2>
          <h4>Durasi : {{ data?.paketsoal_aspek?.waktu }} menit</h4>
          <h4>Jumlah Soal : {{ data?.soal_jml }} Soal</h4>
          </article>
        </div>
      </div>

      <div class="divider"></div>
      <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full"
        v-if="data?.paketsoal_aspek?.instruksi_status == 'Aktif'">
        <article class="prose">
          <h2>INSTRUKSI :</h2>

        <span v-html="data?.paketsoal_aspek?.instruksi"></span>
      </article>
    </div>
    <div class="divider"></div>
      <div v-if="data?.paketsoal_aspek?.lembar_prasoal_status == 'Aktif'">
        <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
          <article class="prose">
            <h2>LEMBAR PRASOAL :</h2>

            <span v-html="data?.paketsoal_aspek?.lembar_prasoal"></span>
          </article>
        </div>
        <div class="divider"></div>
      </div>
      <div v-if="data?.paketsoal_aspek?.instruksi_pengerjaan_status == 'Aktif'">
        <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
          <article class="prose">
            <h2>INSTRUKSI PENGERJAAN :</h2>

            <span v-html="data?.paketsoal_aspek?.instruksi_pengerjaan"></span>
          </article>
        </div>
        <div class="divider"></div>
      </div>
      <!-- <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
          <article class="prose">
            <h2>2. Instruksi :</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur vero pariatur in sint
              consectetur modi molestiae quis, culpa tenetur possimus. Omnis iste esse, nisi reprehenderit tenetur
              voluptate aspernatur praesentium.</p>
          </article>
        </div>
        <div class="divider"></div> -->
      <div>
        <div class="w-full flex justify-center px-4">
          <!-- <RouterLink :to="{ name: 'ujian.psikotest.paket.proses', params: { aspek_id, no_soal: 1 } }"> -->
          <button class="btn btn-lg btn-success" @click="doMulai()">Mulai</button>
          <!-- </RouterLink> -->
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
  </div>
</template>
