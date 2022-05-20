<template>
  <div class="flex">
    <div class="w-3/5 pr-10">
      <h1 class="font-bold text-gray-700 text-2xl">Music List</h1>
      <div class="mt-8">
        <all-songs @playSong="play" :current="current" />
      </div>
    </div>
    <div class="w-2/5">
      <h1 class="font-bold text-gray-700 text-2xl">Now Playing</h1>
      <div class="mt-8">
        <now-playing @play="play" @pause="pause" :current="current" />
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
  data() {
    return {
      current: {},
      player: new Audio(),
      isPlaying: false,
    };
  },
  methods: {
    play(song) {
      if (typeof song?.url != undefined) {
        this.current = song;
        this.player.src = this.current?.url;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
  }
};
</script>

<style>
</style>