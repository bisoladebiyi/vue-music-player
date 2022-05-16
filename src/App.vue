<template>
<home-page />
  <!-- <label for="" class="text-red-500">Upload file</label>
  <input @change="getFile" type="file" name="" id="" />
  <button @click="upload">Upload to storage</button> -->
</template>

<script>
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase'
import HomePage from './pages/HomePage.vue'

export default {
  name: "App",
  components: {HomePage},
  data() {
    return {
      uploadedSong: null,
      // audioRef: ref(storage, `songs/`)
    };
  },
  methods: {
    getFile(e) {
      this.uploadedSong = e.target.files[0]
      console.log(e.target.files[0]);
    },
    upload(){
      uploadBytes(ref(storage, `songs/${this.uploadedSong.name}`), this.uploadedSong).then(()=> alert("uploaded!"))
    }
  },
};
</script>

