
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const soal_id = route.params.soal_id;

// const doNext = (id) => {
//     router.replace({ name: 'karakter.proses', params: { soal_id: 1 } })
//     // router.go(0)
// }
// const doBefore = (id) => {
//     router.replace({ name: 'karakter.proses', params: { soal_id: 2 } })
//     // router.go(0)
// }
const linkBefore = ref(`http://localhost:1000/karakter/proses/${parseInt(soal_id) - 1}`)
const linkNext = ref(`http://localhost:1000/karakter/proses/${parseInt(soal_id) + 1}`)

</script>
  
<template>
    <div v-if="soal_id">
        <div class="p-4">
            <div class="alert alert-info shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="stroke-current flex-shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Perhatikan gambar ! Kemudian isi semua aspek dengan nilai diantara 0 sampai 10 sesuai
                        penilaian anda saat ini.</span>
                </div>
            </div>
        </div>
        <div class="text-center w-full p-5">
            <h2 class="text-2xl font-bold">Soal {{ soal_id }} :</h2>
        </div>

        <div class="w-full flex justify-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gambar {{ soal_id }}!</h2>
                    <p>Ini keterangan gambar {{ soal_id }}</p>
                    <div class="card-actions justify-end">
                        <a href="https://placeimg.com/400/225/arch" target="_blank">
                            <button class="btn btn-primary">Lihat Selengkapnya</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex m-4 lg:m-6 justify-center">
            <div class=" grid grid-cols-1 lg:grid-cols-2">
                <div class="grid-cols-1 w-96">
                    <!-- <article class="prose">
                <h2>Soal {{ soal_id }} :</h2>
            </article> -->
                    <div class="list-group-item bg-gray-100 m-1 p-3 rounded-md text-center">
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">GEMBIRA:</span>
                                            <span class="label-text-alt">Status: Tersimpan</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">SENANG:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">TERSENYUM:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">TERTAWA:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class="inline-flex items-center space-x-2">
                                <div>Telah Diisi
                                </div>
                                <div class="text-slate-500 ">
                                    <label>:</label>
                                </div>
                            </div>
                            <div>4 Aspek
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class="inline-flex items-center space-x-2">
                                <div>Belum Diisi
                                </div>
                                <div class="text-slate-500 ">
                                    <label>:</label>
                                </div>
                            </div>
                            <div>2 Aspek
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid-cols-1 w-96">
                    <!-- <article class="prose">
                <h2>Soal {{ soal_id }} :</h2>
            </article> -->
                    <div class="list-group-item bg-gray-100 m-1 p-3 rounded-md text-center">
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">MARAH:</span>
                                            <span class="label-text-alt">Status: Tersimpan</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">DENDAM:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">AGRESIF:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class=" space-x-2">
                                <div>
                                    <div class="form-control w-full">
                                        <label class="label">
                                            <span class="label-text">MENGANCAM:</span>
                                            <span class="label-text-alt">Status: Belum diisi</span>
                                        </label>
                                        <input type="number" value="1" min="0" max="10" placeholder="Isi angka 0-10"
                                            class="input input-bordered w-full" />
                                        <label class="label">
                                            <span class="label-text-alt text-error">Harus diisi nilai diantara 0 sampai
                                                10 !</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class="inline-flex items-center space-x-2">
                                <div>Telah Diisi
                                </div>
                                <div class="text-slate-500 ">
                                    <label>:</label>
                                </div>
                            </div>
                            <div>4 Aspek
                            </div>
                        </div>
                        <div
                            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent">
                            <div class="inline-flex items-center space-x-2">
                                <div>Belum Diisi
                                </div>
                                <div class="text-slate-500 ">
                                    <label>:</label>
                                </div>
                            </div>
                            <div>2 Aspek
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
                <a :href="linkBefore">
                    <button class="btn btn-sm btn-accent">Sebelumnya</button></a>
                <a :href="linkNext">
                    <button class="btn btn-sm btn-info" @click="doNext(soal_id)">Selanjutnya</button>
                </a>
            </div>
        </div>

        <div class="divider"></div>
    </div>
    <div v-else>
        Loading . . .
    </div>
</template>