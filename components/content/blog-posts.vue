<script setup lang="ts">
const props = defineProps({
    limit: {
        type: Number,
        default: null
    }
})
const { data: data } = await useAsyncData('blog',
    () => {
        const query = queryCollection('blog')
            .where('path', '<>', '/blog')
            .select('path', 'title', 'date')
            .order('date', 'DESC')

        if (props.limit) {
            query.limit(props.limit)
        }

        return query.all()
    }
)
//console.log(posts.value)
//const handle = (ele: any) => console.log('handle' + JSON.stringify(ele));
const posts = computed(() => {
    if (!data.value) {
        return []
    }
    const result = []
    let lastYear = null

    for (const post of data.value) {
        const year = new Date(post.date).getFullYear()

        const displayYear = year !== lastYear

        result.push({
            ...post,
            displayYear,
            year
        })

        lastYear = year
    }
    return result
})
</script>

<template>
    <slot :posts="posts">
        <section class="not-prose font-mono">
            <div class="column text-gray-400 text-sm">
                <div>date</div>
                <div>title</div>
            </div>
            <ul>
                <li v-for="post in posts" :key="post.path">
                    <NuxtLink :to="post.path" class="column group hover:bg-gray-100 dark:hover:bg-gray-800">
                        <div
                            :class="{ 'text-white group-hover:text-gray-100 dark:group-hover:text-gray-800 dark:text-gray-900': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
                            {{ post.year }}</div>
                        <div>{{ post.title }}</div>
                        <div>{{ post.date }}</div>
                    </NuxtLink>
                </li>
            </ul>
        </section>
    </slot>

</template>

<style scoped lang="postcss">
.column {
    @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;

}
</style>