<template>
    <article class="py-12 px-4">
    <h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold">{{ article.title }}</h1>
    <div>
        <router-link :to="'/article/update/' + article.slug">Edit</router-link>
        <button @click="deleteArticle">Delete</button>
    </div>
    <p class="text-center">
        <a class="ml-1 text-indigo-600 hover:underline" href="#">Michael Scott</a>
    </p>
    
    <div class="max-w-3xl mx-auto">
        <p class="mb-10">{{ article.description }}</p>
    </div>
    </article>
</template>

<script setup>

    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import useArticles from '../../resources/js/composables/Article';
    
    const route = useRoute()
    const {article, getArticle, destroyArticle} = useArticles();

    const deleteArticle = async () => {
        await destroyArticle(route.params.slug)
        await getArticle()
    }

    onMounted(() => getArticle( route.params.slug ))
</script>