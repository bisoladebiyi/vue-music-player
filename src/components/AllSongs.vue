<template>
  <div>
    <div
      v-for="(song, index) in songList"
      :key="index"
      class="bg-white shadow-sm mb-4 p-4 rounded-md flex items-center"
    >
      <p class="font-bold text-cyan-700 text-xs">0{{ index + 1 }}</p>
      <p class="ml-3 font-bold text-gray-700 text-sm">{{ song }}</p>
    </div>
  </div>
</template>

<script>
import { listAll, ref } from "@firebase/storage";
import { storage } from "../../firebase";
export default {
  name: "AllSongs",
  data() {
    return {
      songList: [],
    };
  },
  created() {
    listAll(ref(storage, "songs/")).then((res) => {
      this.songList = res.items.map((item) => item.name);
    });
  },
};
</script>

<style>
</style>