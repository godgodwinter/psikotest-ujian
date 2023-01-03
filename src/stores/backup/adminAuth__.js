/* eslint-disable */
import { defineStore } from "pinia";

export const useStoreAdminAuth = defineStore({
    id: "storeAdminAuth",
    state: () => ({
        token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
        isLogin: localStorage.getItem("isLogin")
            ? localStorage.getItem("isLogin")
            : false,
        me: {
            id: 0,
            name: "",
        },
        kepalajurusan: false,
        penilai: false,
        jurusan: [],
    }),
    getters: {
        getToken: (state) => state.token,
        getIsLogin: (state) => state.isLogin,
        getMe: (state) => state.me,
        getKepalaJurusan: (state) => state.kepalajurusan,
        getPenilai: (state) => state.penilai,
        getJurusan: (state) => state.jurusan,
    },
    actions: {
        setToken(tokeng) {
            this.token = token;
        },
        setIsLogin(isLogin) {
            this.isLogin = isLogin;
        },
        setMe(me) {
            this.me = me;
        },
        setKepalaJurusan(kepalajurusan) {
            this.kepalajurusan = kepalajurusan;
        },
        setPenilai(penilai) {
            this.penilai = penilai;
        },
        setJurusan(jurusan) {
            this.jurusan = jurusan;
        },
    },
});
