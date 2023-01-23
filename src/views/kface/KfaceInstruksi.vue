
<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { ref } from "vue"
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast.js";
const router = useRouter();
const doMulai = async () => {
    if (confirm("Apakah anda yakin memulai paket ini ?")) {
        try {
            const response = await Api.post(`siswa/v2/data/ujian/aktif/kface/do_mulai`);
            const res = response;
            if (res.success) {
                Toast.success("Success", "Data Berhasil disimpan!");
                router.push({ name: 'ujian.psikotest.kface.proses', params: { no_soal: 1 } });
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
    <div class="p-4">
        <div class="flex m-4 lg:m-6 justify-center">

            <div class="grid-cols-1 w-96">
                <article class="prose">
                    <h2>Instruksi Ujian Karakter Face :</h2>
                </article>
            </div>
        </div>

        <div class="divider"></div>
        <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
            <article class="prose">
                <h2>1. Instruksi :</h2>
                <p>Perhatikan Karakter dalam video! Kemudian isi semua aspek dengan nilai diantara 0 sampai 10
                    sesuai
                    penilaian anda saat ini</p>
            </article>
        </div>
        <!-- <div class="divider"></div> -->
        <!-- <div class=" bg-gray-100 m-1 p-3 rounded-md text-justify w-full">
            <article class="prose">
                <h2>2. Instruksi :</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur vero pariatur in sint
                    consectetur modi molestiae quis, culpa tenetur possimus. Omnis iste esse, nisi reprehenderit tenetur
                    voluptate aspernatur praesentium.</p>
            </article>
        </div> -->
        <div class="divider"></div>
        <div>
            <div class="w-full flex justify-center px-4">
                <!-- <RouterLink :to="{ name: 'karakter.proses', params: { soal_id: 1 } }">
                    <button class="btn btn-lg btn-success">Mulai</button>
                </RouterLink> -->

                <button class="btn btn-lg btn-success" @click="doMulai()">Mulai</button>
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