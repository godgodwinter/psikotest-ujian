<template>
  <!-- <div class="px-4">
    <div class="alert alert-info shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Urutkan mulai dari yang anda sukai!</span>
      </div>
    </div>
  </div> -->
  <!-- <div class="flex m-4 lg:m-6 justify-center">

    <div class="flex w-full lg:w-2/3">
      <article class="prose">
        <h2>Soal 1 :</h2>
      </article>

    </div>
  </div> -->

  <div class="p-2">
    <div class="prose space-x-2">
      <!-- <h2 class="text-2xl font-bold">NO 1:</h2> -->

      <button class="btn btn-outline gap-2">
        NO SOAL
        <!-- <div class="badge badge-info ">1</div> -->
        <span class="font-bold text-lg">1</span>
      </button>

      <button class="btn btn-primary gap-2">
        BELUM DIJAWAB
        <div class="badge badge-warning">5</div>
      </button>
    </div>
  </div>

  <div class="m-4 pb-4 rounded shadow-md">
    <div class="p-0">
      <div class="card w-full bg-info/10 shadow-xl text-justify">
        <div class="card-body">
          <span class=" font-bold ">Pertanyaan : </span>
          <p class="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
            alias minima rerum. Soluta assumenda eveniet obcaecati maxime temporibus
            qui ab voluptas doloremque illo, odio optio ex, atque numquam tempore
            quis.
          </p>
          <div class="divider"></div>
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-10">
      <div class="p-4">
        <div class="card w-full bg-base-200 shadow-md hover:shadow-lg text-justify ">
          <div class="card-body">
            <span class=" font-bold ">A . </span>
            <p class="text-base"> Pilihan Jawaban A
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
              alias minima rerum. Soluta assumenda eveniet obcaecati maxime temporibus
              qui ab voluptas doloremque illo, odio optio ex, atque numquam tempore
              quis.
            </p>
          </div>
        </div>
      </div>
      <div class="p-4">
        <div class="card w-full bg-base-200 shadow-md hover:shadow-lg text-justify">
          <div class="card-body">
            <span class=" font-bold ">B . </span>
            <p class="text-base"> Pilihan Jawaban B
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
              alias minima rerum. Soluta assumenda eveniet obcaecati maxime temporibus
              qui ab voluptas doloremque illo, odio optio ex, atque numquam tempore
              quis.
            </p>
          </div>
        </div>
      </div>
      <div class="p-4">
        <div class="card w-full bg-info shadow-md hover:shadow-lg text-justify">
          <div class="card-body">
            <span class=" font-bold ">C . </span>
            <p class="text-base"> Pilihan Jawaban C
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
              alias minima rerum. Soluta assumenda eveniet obcaecati maxime temporibus
              qui ab voluptas doloremque illo, odio optio ex, atque numquam tempore
              quis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="w-full flex justify-end px-4">
        <button class="btn btn-lg btn-success">Simpan dan Lanjutkan</button>
      </div>
    </div>
  </div>

  <!-- <div class="divider"></div> -->
  <div class="pb-5">
    <div class="w-full flex justify-end px-4 space-x-2">
      <button class="btn btn-sm btn-accent">Sebelumnya</button>
      <button class="btn btn-sm btn-info">Selanjutnya</button>
    </div>
  </div>

</template>