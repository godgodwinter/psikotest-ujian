import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions
export const useTimerStore = defineStore('timerStore', () => {
  // State
  const waktu = ref(10)
  // Getter Setter
  const getWaktu=computed(()=>waktu.value);
  const setWaktu = (n)=>{
    waktu.value=n;
  }

  // Fn
  function fnDecrement() {
    waktu.value--
  }

// Jalanakan Timer dengan base state interval agar tidak duplikat interval
  const interval = ref(null);
  const doJalankanTimer = (total) => {
    clearInterval(interval.value);
    interval.value=setInterval(() => {
      if (total === 0) {
          clearInterval(interval.value)
          console.log('store: Waktu habis');
      } else {
          total--
         waktu.value=total;
          // console.log('store: '+ waktu.value)
      }
    }, 1000)
    
  }

  return { waktu, getWaktu,fnDecrement,setWaktu,doJalankanTimer }
})
