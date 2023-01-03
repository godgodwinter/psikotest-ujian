<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="p-4">
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Judul</th>
            <th>Status</th>
            <th>Waktu Pengerjaan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Minat dan Bakat</th>
            <td>
              <RouterLink :to="{ name: 'minatbakat' }">
                <button class="btn btn-info">Lanjutkan</button>
              </RouterLink>
            </td>
            <td>10 menit</td>
          </tr>
          <tr>
            <th>2</th>
            <th>Kategori A</th>
            <td>
              <RouterLink :to="{ name: 'klasik.index' }">
                <button class="btn btn-warning">Belum</button>
              </RouterLink>
            </td>
            <td>5 menit</td>
          </tr>
          <tr>
            <th>3</th>
            <th>Kategori B</th>
            <td><button class="btn btn-primary">Selesai</button></td>
            <td>90 menit</td>
          </tr>
          <tr>
            <th>4</th>
            <th>Kategori C</th>
            <td><button class="btn btn-primary">Selesai</button></td>
            <td>90 menit</td>
          </tr>
          <tr>
            <th>5</th>
            <th>Karakter Face</th>
            <td>
              <RouterLink :to="{ name: 'karakter.instruksi' }">
                <button class="btn btn-info">Mulai</button>
              </RouterLink>
            </td>
            <td>20 menit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
