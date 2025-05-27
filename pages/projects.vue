<script setup>
const { data: home } = await useAsyncData('home', () =>
    queryCollection('content').path('/projects').first()
)
//console.log(JSON.stringify(home.value, null, 2))
</script>

<template>

    <article class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="home" />
    </article>
</template>