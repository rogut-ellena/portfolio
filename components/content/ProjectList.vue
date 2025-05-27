<template>
    <div class="not-prose">
        <p class="mb-10">Take a look at my GitHub projects</p>


        <section v-if="error">Something went wrong... Try again!</section>
        <section v-else>
            <ul class="grid grid-cols-1 gap-4">
                <li v-for="repository in data" :key="repository.id"
                    class="border border-gray-200 dark:border-gray-700 rounded-sm p-4 hover:bg-gray-100 dark:hover:bg-gray-800 font-mono">
                    <a :href="repository.html_url" target="_blank">
                        <div class="flex items-center justify-between text-sm">
                            <div class="font-semibold">{{ repository.name }}</div>
                            <!-- <div>{{ repository.stargazers_count }}⭐</div> -->
                        </div>
                        <p class="text-sm">
                            {{ repository.description }}
                        </p>
                    </a>
                </li>
            </ul>
        </section>
    </div>


</template>

<script setup lang="ts">

const { data, error } = await useFetch('https://api.github.com/users/rogut-ellena/repos');


//const repos = computed(
//() => data.value.filter(repo => repo.description)
//.sort((a, b) => b.stargazers_count - a.stargazers_count)
//)
</script>