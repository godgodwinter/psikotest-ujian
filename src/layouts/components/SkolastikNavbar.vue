<script setup>
import { ref, computed } from "vue";
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
const waktu = computed(() => timerStore.getWaktu);
const ujianTipe = computed(() => timerStore.getUjianTipe);

const timer = ref(0);
const tipe = ref(null);

moment.updateLocale("id", localization);
const storeAdminAuth = useStoreAdminAuth();
const router = useRouter();
const doLogout = async () => {
    if (confirm("Apakah anda yakin untuk Logout ?")) {
        const res = await API.doLogout();
        if (res === true) {
            router.push({ name: "Login" });
        }
    }
};
const token = computed(() => storeAdminAuth.getToken);
const resCheckToken = ref([]);
const checkTokenExpired = async (dataToken) => {
    resCheckToken.value = await API.doCheckToken(dataToken);
    if (resCheckToken.value === false) {
        API.doLogout(false);
        Toast.danger("Info", "Token Expired");
        router.push({ name: "Login" });
    }
};

if (token.value) {
    // console.log("isTokenExpired");
    checkTokenExpired(token.value);
} else {
    Toast.info("Info", "Silahkan login terlebih dahulu");
    router.push({ name: "LandingLogin" });
}

const dataProsesUjianAktif = ref(null);
const dataProsesUjianAktif_waktu = ref(null);
const menit = ref(null);
const getData = async () => {
    try {
        const response = await Api.get(`siswa/v2/data/ujian/proses/aktif`);
        dataProsesUjianAktif.value = response.data;
        timerStore.setUjianTipe(dataProsesUjianAktif.value.tipe);
        tipe.value = ujianTipe.value;
        // console.log('====================================');
        // console.log(dataProsesUjianAktif.value);
        // console.log('====================================');
        dataProsesUjianAktif_waktu.value =
            dataProsesUjianAktif.value?.sisa_waktu.detik;
        // menit.value = moment.utc(dataProsesUjianAktif_waktu.value * 1000).format('HH:mm:ss');
        if (dataProsesUjianAktif.value) {
            onKlik(dataProsesUjianAktif_waktu.value);
            linkSoal.value = `${BASE_URL_FE}paket/aspek/${dataProsesUjianAktif.value.id}/nomer/`;
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

// 1. loading layout -> sebelum pemeriksaan
// 2. skolastik layout -> ketika ujian skolastik aktif
// 3. kface layout -> ketika ujian kface aktif
// else. tanpa ujian layout ->  ketika diperiksa tidak ada ujian aktif
</script>

<template>
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <RouterLink :to="{ name: 'ujian.psikotest.index' }">
                        <li><a>Beranda</a></li>
                    </RouterLink>
                    <RouterLink :to="{ name: 'ujian.psikotest.paket' }">
                        <li><a>Paket</a></li>
                    </RouterLink>
                    <li><a @click="doLogout()">Logout</a></li>

                    <!-- <li><a>Proses</a></li> -->
                </ul>
            </div>

            <label for="my-drawer" class="btn btn-primary drawer-button btn-sm" v-if="dataProsesUjianAktif">
                MENU SOAL
            </label>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <RouterLink :to="{ name: 'ujian.psikotest.index' }">
                    <li><a>BERANDA</a></li>
                </RouterLink>
                <RouterLink :to="{ name: 'ujian.psikotest.paket' }">
                    <li><a>PAKET</a></li>
                </RouterLink>

                <li><a @click="doLogout()">LOGOUT</a></li>
                <!-- <li><a>Proses</a></li> -->
            </ul>
        </div>
        <div class="navbar-end space-x-2">

            <a :href="linkSoal + 1" class="btn btn-sm" v-if="waktu && dataProsesUjianAktif">
                {{ moment.utc(waktu * 1000).format("HH:mm:ss") }}</a>
            <label for="" v-else>
                <img src="@/assets/img/svg-loaders/tail-spin.svg" /></label>
            <!-- <button class="btn btn-default btn-sm" @click="doLogout()" v-else>Logout</button> -->
            <!-- <label for="my-drawer" class="btn btn-primary drawer-button">
                        Soal
                    </label> -->
            <!-- <a class="btn"
              ><span class="countdown font-mono text-2xl">
                <span style="--value: 10"></span>:
                <span style="--value: 24"></span>:
                <span style="--value: 52"></span> </span
            ></a> -->
        </div>
    </div>
</template>