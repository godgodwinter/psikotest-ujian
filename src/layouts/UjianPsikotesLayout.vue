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
const LoadingNavbar = defineAsyncComponent(() =>
    import('@/layouts/components/LoadingNavbar.vue')
)
const LoadingSidebar = defineAsyncComponent(() =>
    import('@/layouts/components/LoadingSidebar.vue')
)
const SkolastikNavbar = defineAsyncComponent(() =>
    import('@/layouts/components/SkolastikNavbar.vue')
)
const SkolastikSidebar = defineAsyncComponent(() =>
    import('@/layouts/components/SkolastikSidebar.vue')
)
const KfaceNavbar = defineAsyncComponent(() =>
    import('@/layouts/components/KfaceNavbar.vue')
)
const KfaceSidebar = defineAsyncComponent(() =>
    import('@/layouts/components/KfaceSidebar.vue')
)
const DefaultNavbar = defineAsyncComponent(() =>
    import('@/layouts/components/DefaultNavbar.vue')
)
const DefaultSidebar = defineAsyncComponent(() =>
    import('@/layouts/components/DefaultSidebar.vue')
)
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

const timer = ref(10);
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
// else. default layout ->  ketika diperiksa tidak ada ujian aktif
</script>

<template>
    <div data-theme="winter">
        <div class="fixed z-50 navbar bg-base-300 top-0">
            <!-- NAVBAR-START -->
            <LoadingNavbar v-if="tipe === null">1.</LoadingNavbar>
            <SkolastikNavbar v-else-if="tipe === 'Skolastik'">2.</SkolastikNavbar>
            <KfaceNavbar v-else-if="tipe === 'KFace'" />
            <DefaultNavbar v-else>else {{ tipe }}</DefaultNavbar>
            <!-- NAVBAR-END -->
        </div>
        <div class="divider"></div>

        <!-- <div class="flex justify-center">
      <ul class="steps">
        <li data-content="?" class="step step-neutral">Step 1</li>
        <li data-content="!" class="step step-neutral">Step 2</li>
        <li data-content="✓" class="step step-neutral">Step 3</li>
        <li data-content="✕" class="step step-neutral">Step 4</li>
        <li data-content="★" class="step step-neutral">Step 5</li>
        <li data-content="" class="step step-neutral">Step 6</li>
        <li data-content="●" class="step step-neutral">Step 7</li>
      </ul>
    </div> -->
    </div>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <div class="pt-5">
                <RouterView />
            </div>
        </div>
        <div class="drawer-side" v-if="dataProsesUjianAktif">
            <label for="my-drawer" class="drawer-overlay"></label>
            <!-- <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul> -->
            <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                <div v-if="tipe === null">1.</div>
                <div v-else-if="tipe === 'Skolastik'">

                    <span class="py-10">
                        <div class="divider"></div>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="(item, index) in dataProsesUjianAktif.hasil" :key="item.id">
                                <a :href="linkSoal + (index + 1)" class="btn btn-md btn-info"
                                    v-if="item.kode_jawaban">{{
                                    index + 1 }}</a>
                                <a :href="linkSoal + (index + 1)" class="btn btn-md btn-warning" v-else>{{ index + 1
                                }}</a>
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
                                        <td>{{ dataProsesUjianAktif.paketsoal_soal_jml }}</td>
                                    </tr>
                                    <tr>
                                        <th>Jumlah Terjawab</th>
                                        <td>:</td>
                                        <td>
                                            {{ dataProsesUjianAktif.paketsoal_soal_jml_terjawab }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Jumlah Terjawab</th>
                                        <td>:</td>
                                        <td>{{ dataProsesUjianAktif.paketsoal_soal_jml_belum }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <KfaceSidebar v-else-if="tipe === 'KFace'"></KfaceSidebar>
                <div v-else>else {{ tipe }}</div>
            </ul>
        </div>
    </div>
</template>
