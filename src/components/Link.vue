<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        to:{
            type: String
        }
    })
</script>

<template>
    <RouterLink
        :to="{name: to}"
        class="rounded bg-green-500 hover:bg-green-600 font-bold py-2 px-10"
    >
        <slot></slot>
    </RouterLink>
</template>
