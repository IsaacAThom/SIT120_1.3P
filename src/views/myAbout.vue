<script setup>
import profTable from '../components/profTable.vue'
import fancyButton from '../components/fancyButton.vue'
</script>

<template>
    <h2>About Me</h2>
    <div class="grid-3-column">
        <div class="grid-item item1">
            <div class="grid-3-column">
                <div style="display: flex; justify-content: center; align-items: center;">
                    <profTable/>
                </div>
                <div class="item1">
                    <p>Hello! I'm Isaac, a passionate web developer with over 3 years of experience creating dynamic and responsive websites. I specialise in HTML, CSS, and Vue.js.</p>
                    <p>I graduated from Deakin University with a degree in Arts majoring in Creative Arts, and am currently completing a degree in Information Technology majoring in Application Development. In this time, I have worked with various clients to deliver high-quality web solutions.</p>
                    <p>In my free time, I love drawing fantasy characters, going for long walks throughout the suburbs, and thrift shopping for hidden gems!</p>
                    <fancyButton>Download My Resume</fancyButton>
                    <p>Thank you for visiting my portfolio. If you'd like to collaborate or just chat, feel free to <router-link to="/contact">reach out!</router-link></p>
                </div>
            </div>
        </div>

        <div class="grid-item">
            <img src="/profile.png">
        </div>
    </div>
</template>