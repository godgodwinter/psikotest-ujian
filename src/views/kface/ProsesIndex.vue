
<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast.js";
import { useTimerStore } from "@/stores/timerStore";
const BASE_URL_FE = import.meta.env.VITE_API_URLFE
    ? import.meta.env.VITE_API_URLFE
    : "http://localhost:1000/";
const timerStore = useTimerStore();
const route = useRoute();
const router = useRouter();
const no_soal = ref(route.params.no_soal);
// timerStore.$subscribe(
//     (mutation, state) => {
//         // console.log(mutation, state);
//         // console.log(mutation);
//         // console.log(state.waktu);
//         if (state.waktu == 0) {
//             getData(no_soal.value);
//         }
//     },
//     { detached: false }
// ); //jika detached true :terpisah meskipun komponent di unmount subcrib tetap dijalankan [bug jika halaman di buka 2x akan dieksekusi 2x]
const ujianTipe = computed(() => timerStore.getUjianTipe);
const soal = ref(null);
const soal_jml = ref(0);
const aspek = ref(null);

// const doNext = (id) => {
//     router.replace({ name: 'karakter.proses', params: { no_soal: 1 } })
//     // router.go(0)
// }
// const doBefore = (id) => {
//     router.replace({ name: 'karakter.proses', params: { no_soal: 2 } })
//     // router.go(0)
// }
// const linkBefore = ref(`http://localhost:1000/karakter/proses/${parseInt(no_soal) - 1}`)
// const linkNext = ref(`http://localhost:1000/karakter/proses/${parseInt(no_soal) + 1}`)
const dataForm = ref([]);

const getData = async (nomer) => {
    try {
        const response = await Api.get(`siswa/v2/data/ujian/aktif/kface/null/soal/${nomer}`);
        soal.value = response.data?.soal;
        aspek.value = response.data?.aspek;
        soal_jml.value = response.data?.soal_jml;

        for (let i = 0; i < aspek.value.length; i++) {
            // console.log('====================================');
            // console.log(aspek.value[i].id);
            // console.log('====================================');
            dataForm.value[aspek.value[i].id] = aspek.value[i].skor;
        }
    } catch (error) {
        console.error(error);
    }
};

const goNext = (nomer) => {
    let no_go = parseInt(nomer) + 1;
    getData(no_go);
    no_soal.value = no_go;
    router.push({ name: 'ujian.psikotest.kface.proses', params: { no_soal: (no_go) } });
}
const goBack = (nomer) => {
    let no_go = parseInt(nomer) - 1;
    getData(no_go);
    no_soal.value = no_go;
    router.push({ name: 'ujian.psikotest.kface.proses', params: { no_soal: (no_go) } });
}

const doSave = async (id) => {
    // console.log('====================================');
    // console.log(id, dataForm.value[id]);
    // console.log('====================================');
    let skor = dataForm.value[id];
    if (skor > 10) {
        Toast.warning("Gagal disimpan", "Nilai tidak boleh lebih dari 10")
    } else if (skor < 0) {
        Toast.warning("Gagal disimpan", "Nilai tidak boleh kurang dari 0")
    } else {
        fnSave(id);
    }


}

const fnSave = async (id) => {
    let dataStore = {
        jawaban: dataForm.value[id],
    };
    try {
        const response = await Api.post(`siswa/v2/data/ujian/aktif/kface/null/soal/${id}`, dataStore);
        Toast.success("Success", "Data Berhasil disimpan!");
        getData(no_soal.value);

    } catch (error) {
        Toast.danger("Warning", "Data gagal disimpan!");
        console.error(error);
    }
}

setTimeout(
    () => {
        if (ujianTipe.value == 'KFace') {
            getData(no_soal.value);
        } else {
            Toast.warning("Ujian karakterface tidak aktif!");
        }

    }
    , 2000);

</script>
  
<template>
    <div>{{ ujianTipe }}</div>
    <div v-if="soal">
        <div class="p-4">
            <div class="alert alert-info shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="stroke-current flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Perhatikan Karakter dalam video ! Kemudian isi semua aspek dengan nilai diantara 0 sampai 10
                        sesuai
                        penilaian anda saat ini.</span>
                </div>
            </div>
        </div>
        <div class="text-center w-full p-5">
            <h2 class="text-2xl font-bold">Soal {{ no_soal }} :</h2>
        </div>

        <div class="w-full flex justify-center">
            <div class="card  bg-base-100 shadow-xl">
                <iframe width="455" height="809" :src="soal.soal_file + '?hl=en_GB&amp;version=3&amp;rel=0'"
                    :title="soal.soal_pertanyaan" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>
        <!-- <div class="w-full flex justify-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gambar {{ no_soal }}!</h2>
                    <p>Ini keterangan gambar {{ no_soal }}</p>
                    <div class="card-actions justify-end">
                        <a href="https://placeimg.com/400/225/arch" target="_blank">
                            <button class="btn btn-primary">Lihat Selengkapnya</button></a>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="flex m-4 lg:m-6 justify-center">
            <div class=" grid grid-cols-1 lg:grid-cols-2">
                <div class="grid-cols-1 w-96">
                    <!-- <article class="prose">
                <h2>Soal {{ no_soal }} :</h2>
            </article> -->
                    <div v-for="item, index in aspek" :key="item.id">
                        <div class="list-group-item bg-gray-100 m-1 p-3 rounded-md text-center"
                            v-if="item.aspek_prefix === 'positif'">
                            <div
                                class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                                <div class=" space-x-2">
                                    <div>
                                        <div class="form-control w-full">
                                            <label class="label">
                                                <span class="label-text">{{ item.aspek_nama }}:</span>
                                                <span class="label-text-alt capitalize">Status: {{
                                                    item.isTerjawab ? item.isTerjawab : 'Belum'
                                                }}</span>
                                            </label>
                                            <!-- <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                                class="input input-bordered w-full" /> -->

                                            <div class="px-4">
                                                <div class="form-control">
                                                    <div class="input-group">
                                                        <input type="number" min="0" max="10"
                                                            v-model="dataForm[item.id]" placeholder="Isi angka 0-10"
                                                            class="input input-bordered w-full" />
                                                        <button class="btn btn-square " @click="doSave(item.id)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <label class="label">
                                                <span class="label-text-alt text-error">Harus diisi nilai diantara 0
                                                    sampai
                                                    10 !</span>
                                            </label> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="grid-cols-1 w-96">
                    <div v-for="item, index in aspek" :key="item.id">
                        <div class="list-group-item bg-gray-100 m-1 p-3 rounded-md text-center"
                            v-if="item.aspek_prefix === 'negatif'">
                            <div
                                class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                                <div class=" space-x-2">
                                    <div>
                                        <div class="form-control w-full">
                                            <label class="label">
                                                <span class="label-text">{{ item.aspek_nama }}:</span>
                                                <span class="label-text-alt capitalize">Status: {{
                                                    item.isTerjawab ? item.isTerjawab : 'Belum'
                                                }}</span>
                                            </label>
                                            <!-- <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                                class="input input-bordered w-full" /> -->

                                            <div class="px-4">
                                                <div class="form-control">
                                                    <div class="input-group">
                                                        <input type="number" min="0" max="10"
                                                            v-model="dataForm[item.id]" placeholder="Isi angka 0-10"
                                                            class="input input-bordered w-full" />
                                                        <button class="btn btn-square " @click="doSave(item.id)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                                            </svg>

                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <label class="label">
                                                <span class="label-text-alt text-error">Harus diisi nilai diantara 0
                                                    sampai
                                                    10 !</span>
                                            </label> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- <div>
            <div class="w-full flex justify-center px-4">
                <a :href="linkNext">
                    <button class="btn btn-lg btn-success">Simpan dan Lanjutkan</button>
                </a>
            </div>
        </div> -->
        <div class="divider"></div>
        <div>
            <div class="w-full flex justify-center px-4 space-x-2">
                <button @click="goBack(no_soal)" v-if="no_soal > 1">
                    <button class="btn btn-sm btn-accent">Sebelumnya</button>
                </button>
                <button @click="goNext(no_soal)" v-if="no_soal < soal_jml">
                    <button class="btn btn-sm btn-info">Selanjutnya {{ no_soal }}</button>
                </button>
            </div>
        </div>

        <div class="divider"></div>
    </div>
    <div v-else>
        Loading . . .
    </div>
</template>