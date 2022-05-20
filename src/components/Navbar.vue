<template>
  <div class="py-6 flex justify-between items-center">
    <input
      type="text"
      class="
        w-1/2
        border
        bg-transparent
        border-gray-300
        outline-none
        rounded-3xl
        text-xs
        px-4
        py-2
      "
      placeholder="Search for song"
    />
    <button
      @click="show"
      class="
        px-5
        py-2.5
        text-xs
        bg-amber-400
        rounded-3xl
        shadow-md shadow-amber-200
        text-white
      "
    >
      Upload a song
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: {
      showModal: Boolean,
  },
  methods:{
    show(){
      this.$emit('show', true);
    }
  }
};
</script>

<style>
</style>