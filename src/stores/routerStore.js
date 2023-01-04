import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Toast from "@/components/lib/Toast.js";
import { useRouter } from "vue-router";
// In Setup Stores:
// ref()s become state properties
// computed()s become getters
// function()s become actions
export const useRouterStore = defineStore('routerStore', () => {
  // State
  const prosesUjian = ref(false)
  // Getter Setter
  const getProsesUjian = computed(() => prosesUjian.value);
  const setProsesUjian = (n) => {
    prosesUjian.value = n;
  }


  return { prosesUjian, getProsesUjian, setProsesUjian }
})
