<template>
  <div
    class="
      fixed
      text-center
      bg-white
      rounded
      top-1/2
      left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-1/2
    "
    :style="{ boxShadow: '0 0 0 1000px rgba(33, 33, 33, 0.363)' }"
  >
    <div class="py-8">
      <!-- <label for="file" class="text-red-500">Upload file</label> -->
      <input @change="getFile" type="file" name="" id="file" />
      <div class="flex justify-center space-x-6 mt-7">
        <button
          @click="upload"
          class="
            block
            px-5
            py-2.5
            text-xs
            bg-amber-400
            rounded-3xl
            shadow-md shadow-amber-200
            text-white
          "
        >
          Upload
        </button>
        <button
          @click="show"
          class="
            block
            px-5
            py-2.5
            text-xs
            border border-amber-400
            hover:bg-amber-200 hover:text-white
            transition-all
            text-amber-400
            rounded-3xl
            shadow-md shadow-amber-300
            bg-white
          "
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, uploadBytes } from "@firebase/storage";
import { storage } from "../../firebase";
export default {
  data() {
    return {
      uploadedSong: null,
      // audioRef: ref(storage, `songs/`)
    };
  },
  props: {
    showModal: Boolean,
  },
  methods: {
    getFile(e) {
      this.uploadedSong = e.target.files[0];
      console.log(e.target.files[0]);
    },
    show() {
      this.$emit("show", false);
    },
    upload() {
      uploadBytes(
        ref(storage, `songs/${this.uploadedSong.name}`),
        this.uploadedSong
      ).then(() => {
        alert("uploaded!");
        this.show();
      });
    },
  },
};
</script>
