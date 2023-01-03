<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div data-theme="winter">
        <div class="fixed z-50  navbar bg-base-300 top-0">
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
                            <!-- <li><a>Proses</a></li> -->
                        </ul>
                    </div>
                    <!-- <a class="btn btn-ghost normal-case text-xl">CBT PSIKOTES</a> -->
                    <a class="btn btn-ghost normal-case text-xl">
                        UJIAN PSIKOTES


                    </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <RouterLink :to="{ name: 'ujian.psikotest.index' }">
                            <li><a>Beranda</a></li>
                        </RouterLink>
                        <RouterLink :to="{ name: 'ujian.psikotest.paket' }">
                            <li><a>Paket</a></li>
                        </RouterLink>
                        <!-- <li><a>Proses</a></li> -->
                    </ul>
                </div>
                <div class="navbar-end">
                    <RouterLink :to="{ name: 'Login' }">

                        <button class="btn btn-default btn-sm">Logout</button>
                    </RouterLink>
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
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <!-- <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul> -->
            <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                <span>
                    <div class="flex flex-wrap  gap-2">
                        <button class="btn btn-md btn-info" v-for="i in 10">{{ i }}</button>
                    </div>
                </span>
                <div class="divider"></div>
                <span>
                    <button class="btn btn-error btn-md">Selesai</button>
                </span>
            </ul>
        </div>
    </div>
</template>
