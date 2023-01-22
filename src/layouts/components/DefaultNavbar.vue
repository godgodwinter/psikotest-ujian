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


</script>
<template>
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            <RouterLink :to="{ name: 'ujian.psikotest.paket' }">
                <span class="btn btn-ghost normal-case text-xl"> UJIAN </span>
            </RouterLink>
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
        </div>
    </div>
</template>
