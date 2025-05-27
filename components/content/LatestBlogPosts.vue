<template>
    <BlogPosts v-slot="{ posts }" :limit="parsedLimit">
        <div v-for="post in posts" :key="post.title">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </div>
    </BlogPosts>
</template>
<script setup>
const props = defineProps({
    limit: {
        type: [Number, String],
        default: null
    }
})

const parsedLimit = computed(() => Number(props.limit))
</script>