<script setup>
import contactForm from '../components/contactForm.vue'

// Imports an object with "my" contact info in it
const contactInfo = require('../components/contactInfo.js')
</script>

<template>
    <h2>Contact Me</h2>
    <div class="grid-3-column">
        <div class="grid-item item1">
            <contactForm />
        </div>
        <div class="grid-item" v-for="info in contactInfo" :key="info">
            <h3>{{ info.name }}</h3>
            <p><b>Phone Number:</b> {{ info.phone }}</p>
            <p><b>Email:</b> {{ info.email }}</p>
            <p><b>LinkedIn:</b> <a :href="info.linkedin">Here</a></p>
        </div>
    </div>
</template>