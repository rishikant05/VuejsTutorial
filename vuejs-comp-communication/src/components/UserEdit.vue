<template>
    <div class="component">
        <h1>You may edit the user Here!</h1>
        <p>Edit Me!</p>
        <p>User Age {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 30;
                // this.$emit('ageWasEdited', this.userAge);
                // eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>