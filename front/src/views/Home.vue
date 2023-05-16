<template>
    <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div v-for="article in articles" :key="article.id" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            
            <article  class="overflow-hidden rounded-lg shadow-lg">
                <div>
                    <router-link :to="'/article/' + article.slug"><img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"></router-link>
                </div>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <div class="no-underline hover:underline text-black" href="#">
                            <router-link :to="'/article/' + article.slug">{{article.title}}</router-link>
                        </div>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        <!--<input type="text" :value="formatDate(article.created)">-->
                    </p>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                        <p class="ml-2 text-sm">
                            {{ article.description }}
                        </p>
                        <div class="px-6 pt-4 pb-2">
                            <span v-for="tag in article.tags" :key="tag.id" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag.name }}</span>
                        </div>
                </footer>

            </article>
        </div>
    </div>
</div>
</template>

<script setup>

    import useArticles from '../resources/js/composables/Article';
    import { onMounted } from 'vue';

    const { articles, getArticles } = useArticles();

    onMounted(getArticles);
</script>