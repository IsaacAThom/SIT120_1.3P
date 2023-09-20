<script setup>
import { reactive } from 'vue'
import fancyButton from './fancyButton.vue';
const formInput = reactive(
    {
        name: '',
        email: '',
        message: '',
        subscription: false
    }
)

// Output won't be alerted if fields are empty
function printOutput() {
    let x = formInput.name;
    let y = formInput.email;
    let z = formInput.message;
    //eslint-disable-next-line
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //Checks if the email matches the mail format
    let emailmatch = y.match(mailformat);
    if (x == "" || y == "" || z == "" || emailmatch == null) {
        return false;
    }
    else {
        // Changes output based on whether subscription is checked or not
        if (this.formInput.subscription == false) {
            alert(`Thank you, ` + this.formInput.name + " " + this.formInput.email + `, your message has been sent!\n"` + this.formInput.message + `"`);
        }
        else {
            alert(`Thank you, ` + this.formInput.name + " " + this.formInput.email + `, your message has been sent!\n"` + this.formInput.message + `"\nThank you for subscribing!`)
        }
    }
    
}
</script>

<template>
    <form>
        <label for="name">Name:</label>
        <br>
        <input type="text" v-model="formInput.name" required>
        <br><br>
        <label for="email">Email:</label>
        <br>
        <input type="email" v-model="formInput.email" required>
        <br><br>
        <textarea v-model="formInput.message" placeholder="Write message here" required></textarea>
        <br><br>
        <label for="subscription">Subscribe to newsletter?</label>
        <br>
        <input type="checkbox" v-model="formInput.subscription">
        <br><br>
        <fancyButton :type="submit" @some-event="printOutput()">
            Submit
        </fancyButton>
    </form>
</template>

<style scoped>
form {
    background: rgba(25, 10, 53, 0.5);
    width: 100%;
    padding: 20px 0;
    border-radius: 20px;
    border: 1px solid rgb(213, 74, 87);
    box-shadow: inset 0px 0px 5px 5px rgba(25, 10, 53, 0.5);
}
</style>