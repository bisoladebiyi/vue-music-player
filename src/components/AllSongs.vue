<template>
  <div>
    <div
      v-for="(song, index) in songList"
      :key="index"
      :class="[
        'bg-white shadow-sm mb-4 p-4 rounded-md flex items-center cursor-pointer',
        current.url === song.url ? 'border border-cyan-500' : '',
      ]"
      @click="playSong(song)"
    >
      <p class="font-bold text-cyan-700 text-xs">0{{ index + 1 }}</p>
      <p class="ml-3 font-bold text-gray-700 text-sm">{{ song.name }}</p>
    </div>
  </div>
</template>

<script>
import { getDownloadURL, listAll, ref } from "@firebase/storage";
import { storage } from "../../firebase";
export default {
  name: "AllSongs",
  data() {
    return {
      songList: [],
    };
  },
  props: {
    current: Object,
  },
  methods: {
    playSong(song) {
      this.$emit("playSong", song);
    },
  },
  created() {
    listAll(ref(storage, "songs/")).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((res) => {
          this.songList = [...this.songList, { name: item.name, url: res }];
        });
      });
    });
  },
};
</script>

<style>
</style>