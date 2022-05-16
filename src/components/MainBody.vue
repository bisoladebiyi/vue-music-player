<template>
  <div class="flex">
    <div class="w-3/5 pr-10">
      <h1 class="font-bold text-gray-700 text-2xl">Music List</h1>
      <div class="mt-8">
        <all-songs />
      </div>
    </div>
    <div class="w-2/5">
      <h1 class="font-bold text-gray-700 text-2xl">Now Playing</h1>
      <div class="mt-8">
        <now-playing />
      </div>
    </div>
  </div>
</template>

<script>
import AllSongs from "./AllSongs.vue";
import NowPlaying from "./NowPlaying.vue";
export default {
  name: "MainBody",
  components: { AllSongs, NowPlaying },
};
</script>

<style>
</style>