<template>
    <div>
        <counter :default="0" @increment="onIncrement" />
    </div>
</template>

<script>
import Counter from './counter';

export default {
    components: {
        Counter,
    },

    methods: {
        onIncrement(count) {
            console.log(`The count is ${ count }.`);
        },
    }
};
</script>

<style>
    div {
        padding: 10px;
    }
</style>
