<script setup>
const { data: home } = await useAsyncData('home', () =>
    queryCollection('content').path('/').first()
)

</script>

<template>

    <article class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="home" />
    </article>

</template>
