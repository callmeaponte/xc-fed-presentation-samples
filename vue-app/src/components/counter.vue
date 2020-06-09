<template>
    <aside>
        <span v-if="count > 0">
            {{ count }}
        </span>

        <button type="button" @click="increment">
            Increment
        </button>
    </aside>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            count: state => state.count,
        })
    },

    methods: {
        ...mapMutations({
            increment: 'INCREMENT',
        })
    }
};
</script>

<style>
    span {
        font-weight: 700;
    }
</style>
