<template>
  <div
    class="h-screen flex flex-col gap-5 items-center justify-center bg-white"
  >
    <!-- Card 1 -->
    <card class="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
      <div class="grid grid-cols-6 gap-3">
        <!-- Image -->
        <div class="col-span-2">
          <img src="https://events.duolingo.com/images/why_global.svg" />
        </div>

        <!-- Description -->
        <div class="col-span-4">
          <p class="text-gray-700 font-bold">Make Global Connections</p>
          <p class="text-gray-500 mt-4">
            Meet learners from around the world, build your reputation, and
            expand your network
          </p>
        </div>
      </div>
    </card>

    <!-- Card 2 -->
    <card class="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
      <div class="grid grid-cols-6 gap-3">
        <!-- Description -->
        <div class="col-span-4">
          <p class="text-gray-700 font-bold">Create an impact</p>
          <p class="text-gray-500 mt-4">
            Share your language expertise and help learners have fun, relax, and
            speak confidently
          </p>
        </div>

        <!-- Image -->
        <div class="col-span-2">
          <img src="https://events.duolingo.com/images/why_impact.svg" />
        </div>
      </div>
    </card>

    <!-- Card 3 -->
    <card class="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
      <div class="grid grid-cols-6 gap-3">
        <!-- Image -->
        <div class="col-span-2">
          <img src="https://events.duolingo.com/images/why_access.svg" />
        </div>

        <!-- Description -->
        <div class="col-span-4">
          <p class="text-gray-700 font-bold">Gain insider access</p>
          <p class="text-gray-500 mt-4">
            Enjoy access to Duolingo staff and learning materials, unreleased
            features, and a special profile badge
          </p>
        </div>
      </div>
    </card>
  </div>
</template>
