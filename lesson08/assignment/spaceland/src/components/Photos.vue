<!-- this is the parent page -->

<template>
  <div>
    <MixIns />

    <!-- photos is referring to photos prop on line 31 -->
    <!-- don't need :photo=photo, as this is only done when passing a prop to a component and section is an element -->
    <section v-if="photos" class="d-flex flex-wrap justify-content-center">
     <img
       v-for="photo in photos"
       :key="photo.id"
       :src="photo.src"
       :alt="photo.alt"
       :title="photo.title"
       />
     </section>
  </div>
</template>

<script>
import MixIns from "@/components/MixIns.vue";

export default {
  name: 'Photos',
  components: {
    MixIns
  },
  mixins: [MixIns],
  /* prop identification and validation */
  props: {
  /*this will come from Attractions.vue; needs to be an Array, as it is from Attractions as an array */
    photos: Array,
  }
}
</script>
