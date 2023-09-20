<script setup>
import profTable from '../components/profTable.vue'
// Import an object with a list of projects in it
const projects = require('../components/projects.js')
</script>

<template>
  <h2>Welcome to my Portfolio!</h2>

  <div class="grid-3-column dynamic">
    <div class="grid-item">
      <profTable />
    </div>
    <div class="grid-item">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue id odio vel aliquet. Maecenas a tellus aliquam, blandit ex ac, pulvinar neque. Vestibulum eu eros ornare, interdum arcu quis, congue quam. Donec nec vulputate mi, in finibus dolor. Mauris sodales aliquet ex, a commodo metus tempus vel. Morbi dapibus sit amet magna in posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vehicula libero in odio hendrerit mattis. Etiam arcu mauris, malesuada eget est sit amet, ultricies imperdiet est. Duis condimentum nunc non porttitor suscipit. Nam vitae cursus nibh, aliquam mattis lorem. Duis vel convallis risus. Morbi nec ipsum pharetra, congue tellus ut, euismod mauris. Vivamus eu ligula vel tellus bibendum efficitur. In maximus eros vel mauris gravida, eget pulvinar quam rhoncus. Nam massa libero, fringilla consequat sem eu, viverra semper velit. </p>
    </div>
    <div class="grid-item">
      <img src="/android-chrome-192x192.png">
    </div>
  </div>

  <h2>Featured Projects</h2>
  <div class="grid-3-column">
    <template v-for="project in projects" :key="project.id">
      <div class="grid-item" v-if="project.fav == 'true'">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <img :src="project.src">
      </div>
      
    </template>
  </div>
</template>

<style scoped>
.grid-3-column.dynamic {
  grid-template-columns: auto auto auto;
}

@media screen and (max-width:800px) {
  .grid-3-column.dynamic {
  grid-template-columns: auto;
}
}
</style>