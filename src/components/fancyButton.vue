<script setup>
//allows for buttons of different types, notably submit
//eslint-disable-next-line
defineProps({
    type: String
})
</script>

<template>
    <button @click="$emit('someEvent')">
        <slot>Button</slot>
        </button>
</template>

<style scoped>
button {
    background: rgba(248, 171, 96, 0.75);
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(255, 226, 119);
    box-shadow: 0px 0px 5px 1px rgb(255, 226, 119);
    font-family: Megrim, decorative;
    font-weight: 800;
    font-size: 18px;
}

button:hover {
    background: rgba(213, 74, 87, 0.75);
    border-color: rgb(240, 129, 96);
    box-shadow: inset 0px 0px 5px 1px rgba(25, 10, 53, 0.75);
    color: white;
}
</style>