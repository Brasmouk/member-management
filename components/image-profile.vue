<template>
  <div class="profile-image-content">
    <v-avatar class="profile-image">
      <img alt="user" :src="imageSrc" />
    </v-avatar>
    <v-btn small icon color="#1976d2" @click="$refs.inputImageUpload.click()">
      <v-icon>mdi-camera</v-icon>
    </v-btn>
    <input
      accept="image/*"
      v-show="false"
      ref="inputImageUpload"
      type="file"
      @change="imageUploadChange"
    />
  </div>
</template>

<script>
export default {
  props: ["image"],
  data(){
    return{
      imageSrc : ''
    }

  },
  methods: {
    imageUploadChange(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        var fileReader = new FileReader();
        var vm=this;
        fileReader.addEventListener("load", function (e) {
          vm.imageSrc = e.target.result;
        });
        fileReader.readAsDataURL(files[0]);
      }
    },
  },
  mounted: function () {
    this.imageSrc =this.image
  },
};
</script>



