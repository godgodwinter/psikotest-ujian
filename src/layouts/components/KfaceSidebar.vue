
<script setup>
import { ref, computed, defineAsyncComponent } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import Toast from "@/components/lib/Toast.js";
import API from "@/services/authServices";
import Api from "@/axios/axios";
import { useStoreAdminAuth } from "@/stores/adminAuth";
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
import { useTimerStore } from "@/stores/timerStore";
const BASE_URL_FE = import.meta.env.VITE_API_URLFE
    ? import.meta.env.VITE_API_URLFE
    : "http://localhost:1000/";
const timerStore = useTimerStore();
timerStore.$subscribe(
    (mutation, state) => {
        // console.log(mutation, state);
        // console.log(mutation);
        // console.log(state.waktu);
        if (state.waktu == 0) {
            getData();
        }
    },
    { detached: false }
); //jika detached true :terpisah meskipun komponent di unmount subcrib tetap dijalankan [bug jika halaman di buka 2x akan dieksekusi 2x]
// timerStore.decrement();
const ujianTipe = computed(() => timerStore.getUjianTipe);

const tipe = ref(null);

moment.updateLocale("id", localization);
const storeAdminAuth = useStoreAdminAuth();
const router = useRouter();

const dataProsesUjianAktif = ref(null);
const dataProsesUjianAktif_waktu = ref(null);
const getData = async () => {
    try {
        const response = await Api.get(`siswa/v2/data/ujian/proses/aktif`);
        dataProsesUjianAktif.value = response.data;
        timerStore.setUjianTipe(dataProsesUjianAktif.value?.tipe);
        tipe.value = ujianTipe.value;
        // console.log('====================================');
        // console.log(dataProsesUjianAktif.value);
        // console.log('====================================');
        dataProsesUjianAktif_waktu.value =
            dataProsesUjianAktif.value?.sisa_waktu.detik;
        // menit.value = moment.utc(dataProsesUjianAktif_waktu.value * 1000).format('HH:mm:ss');
        if (dataProsesUjianAktif.value) {
            onKlik(dataProsesUjianAktif_waktu.value);
            linkSoal.value = `${BASE_URL_FE}kface/soal/`;
            // console.log(linkSoal.value);
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
getData();
const onKlik = (time) => {
    timerStore.doJalankanTimer(time);
    // timerStore.fnDecrement();
};

const linkSoal = ref(null);
const doSelesai = async () => {
    if (confirm("Apakah anda yakin mengakhiri sesi ujian ini ?")) {
        try {
            const response = await Api.post(
                `siswa/v2/data/ujian/aktif/aspek/null/datasoal/finish`
            );
            Toast.success("Success", "Sesi ujian berakhir!");
            // router.go();
            router.push({
                name: "ujian.psikotest.paket",
            });
        } catch (error) {
            Toast.danger("Warning", "Data gagal disimpan!");
            console.error(error);
        }
    }
};

</script>
<template>
    <span class="py-10">
        <div class="divider"></div>
        <div class="flex flex-wrap gap-2" v-if="dataProsesUjianAktif?.paketsoal_soal_jml">

            <span v-for="(item, index) in dataProsesUjianAktif?.paketsoal_soal_jml" :key="item.id">
                <a :href="linkSoal + (index + 1)" class="btn btn-md btn-warning">{{
                index + 1 }}</a>
            </span>
        </div>
    </span>
    <div class="divider"></div>
    <span>
        <button class="btn btn-error btn-md" @click="doSelesai()">
            Selesai
        </button>
    </span>
    <div class="divider"></div>
    <span>
        <button class="btn btn-primary btn-md" @click="getData()">
            Refresh Data
        </button>
    </span>
    <div class="divider"></div>
    <div>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <tbody>
                    <tr>
                        <th>Jumlah Soal</th>
                        <td>:</td>
                        <td>{{ dataProsesUjianAktif?.paketsoal_soal_jml }}</td>
                    </tr>
                    <!-- <tr>
                        <th>Jumlah Terjawab</th>
                        <td>:</td>
                        <td>
                            {{ dataProsesUjianAktif.paketsoal_soal_jml_terjawab }}
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>Jumlah Terjawab</th>
                        <td>:</td>
                        <td>{{ dataProsesUjianAktif.paketsoal_soal_jml_belum }}</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>