<template>
    <div class="component">
        <h1>You may view the User Detail Here!</h1>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props: {
            myName: {
                type: String,
                // default: 'Max',
                // required: true,
            },
            userAge: Number,
            // testProp: {
            //     type: Object,
            //     default: function() {
            //         return {
            //             message: 'hello'
            //         }
            //     },
            //     required: true,
            // }
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Rishi';
                this.$emit('nameWasReset', this.myName);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgrey;
    }
</style>