<script setup>
const route = useRoute()
const slug = Array.isArray(route.params.slug)
    ? route.params.slug.join('/')
    : route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})
useSeoMeta({
    title: post.value.title,
    description: post.value.description,
    publishedAt: post.value.publishedAt,
    ogTitle: post.value.title,

})
const toc = post.value.body.toc;
const links = post.value.body.toc.links;
const activeId = ref(null)

onMounted(() => {


    const callback = (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                activeId.value = entry.target.id
                break;
            }
        }
    }
    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.5
    })
    const elements = document.querySelectorAll('h2, h3')
    for (const element of elements) {
        observer.observe(element)
    }


    onBeforeUnmount(() => {
        for (const element of elements) {
            observer.unobserve(element)
        }
    })
})

</script>

<template>

    <article v-if="post"
        class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300">

        <div class="grid grid-cols-6 gap-16">
            <div :class="{ 'col-span-6 md:col-span-4': toc, 'col-span-6': !toc }">
                <ContentRenderer :value="post" />
            </div>
            <div class="hidden md:col-span-2 md:block not-prose" v-if="toc">
                <aside class="sticky top-8">
                    <div class="font-semibold mb-2">
                        Table of Contents
                    </div>
                    <nav>
                        <TocLinks :links="links" :active-id="activeId" />
                    </nav>
                </aside>
            </div>

        </div>


    </article>
    <div v-else>
        Loading...
    </div>
</template>
<style></style>
