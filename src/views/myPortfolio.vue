<script setup>
// Import an object with a list of projects in it
const projects = require('../components/projects.js')
</script>

<template>
    <h2>Portfolio</h2>
    <div class="grid-3-column">
        <div class="grid-item" v-for="project in projects" :key="project.id">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <img :src="project.src">
        </div>
    </div>
</template>