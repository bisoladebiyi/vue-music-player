<template>
<div class="flex relative">
    <div class="w-1/4 bg-white shadow-md p-10" :style="{height:'100vh'}">
    <div class="mx-auto text-center">
        <div class="bg-cyan-400 w-28 h-28 rounded-full grid place-items-center mx-auto shadow-lg">
            <p class="text-3xl font-bold text-white">G</p>
        </div>
        <p class="text-sm text-slate-400 mt-5">Welcome Guest!</p>
    </div>
    </div>
    <div class="w-9/12 px-8">
  <navbar @show="updateShow" :showModal="showUploadModal" />
  <main-body />
  <div v-show="showUploadModal">
<upload-song @show="updateShow" :showModal="showUploadModal" />
  </div>

</div>
</div>


</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainBody from '@/components/MainBody.vue';
import UploadSong from '@/components/UploadSong.vue';
export default {
  name: "HomePage",
  components: {Navbar, MainBody, UploadSong},
  data(){
    return {
      showUploadModal: false
    }
  },
  methods: {
    updateShow(newVal){
      this.showUploadModal = newVal
    }
  }
};


</script>

<style></style>
