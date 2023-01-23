
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Api from "@/axios/axios";
const route = useRoute();
const router = useRouter();
const no_soal = ref(route.params.no_soal);
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


const getData = async () => {
    try {
        const response = await Api.get(`siswa/v2/data/ujian/aktif/kface/null/soal/${no_soal.value}`);
        soal.value = response.data?.soal;
        aspek.value = response.data?.aspek;
        soal_jml.value = response.data?.soal_jml;
    } catch (error) {
        console.error(error);
    }
};
getData();


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
</script>
  
<template>
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
                                                <span class="label-text-alt">Status: Tersimpan</span>
                                            </label>
                                            <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                                class="input input-bordered w-full" />
                                            <label class="label">
                                                <span class="label-text-alt text-error">Harus diisi nilai diantara 0
                                                    sampai
                                                    10 !</span>
                                            </label>
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
                                                <span class="label-text-alt">Status: Tersimpan</span>
                                            </label>
                                            <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                                class="input input-bordered w-full" />
                                            <label class="label">
                                                <span class="label-text-alt text-error">Harus diisi nilai diantara 0
                                                    sampai
                                                    10 !</span>
                                            </label>
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
                    <button class="btn btn-sm btn-info">Selanjutnya</button>
                </button>
            </div>
        </div>

        <div class="divider"></div>
    </div>
    <div v-else>
        Loading . . .
    </div>
</template>