<template>
  <div class="bg-white rounded w-full shadow-sm py-6 text-center">
    <div class="w-32 h-32 bg-amber-400 rounded-full relative shadow-md mx-auto">
      <div
        class="w-10 h-10 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
    <p
      class="font-semibold mt-4"
      v-text="current.name ? current.name : '- -'"
    ></p>
    <p class="italic text-gray-300 text-xs mt-10">// music controls go here</p>
    <div class="flex justify-center space-x-4 mt-5">
        <button class="px-3 py-1.5 text-sm bg-cyan-400 rounded text-white">prev</button>
        <button class="px-3 py-1.5 text-sm bg-cyan-400 rounded text-white" @click="$emit('play', current)">play</button>
        <button class="px-3 py-1.5 text-sm bg-cyan-400 rounded text-white" @click="$emit('pause')">pause</button>
        <button class="px-3 py-1.5 text-sm bg-cyan-400 rounded text-white">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NowPlaying",
  props: {
    current: Object,
  },
};
</script>

<style></style>