<script setup>
import fancyButton from './components/fancyButton.vue';
// Import contactinfo for footer
const contactInfo = require('./components/contactInfo.js');

const routes = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/contact', name: 'Contact' }
];
</script>

<template>
  <h1>Isaac A. McKissack</h1>
  <nav>
    <li v-for="route in routes" v-bind:key="route">
        <router-link :to="{path:route.path}">
        <fancyButton>{{ route.name }}</fancyButton>  
        </router-link>
    </li>
  </nav>

  <div class="view">
  <router-view/>
  </div>

  <footer>
    &copy; 2023 Isaac McKissack Portfolio. All rights reserved.
    <br>
    <span v-for="info in contactInfo" :key="info">
      <b>Ph:</b> {{ info.phone }} <b>Email:</b> {{ info.email }} <b>LinkedIn:</b> <a :href="info.linkedin">Here</a>
    </span>
  </footer>
</template>


<style>
@import './assets/myCSS.css';
</style>
