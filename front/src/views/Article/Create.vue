<template>
  <div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">
    <form @submit.prevent="createArticle">
      <div class="mb-5">
        <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">Titre</label>
        <input type="text" v-model="form.title" name="title" id="title" placeholder="Titre de l'article" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div class="mb-5">
        <label for="slug" class="mb-3 block text-base font-medium text-[#07074D]">Slug</label>
        <input type="text" v-model="form.slug" name="slug" id="slug" placeholder="Slug de l'article" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div class="mb-5">
        <label for="description" class="mb-3 block text-base font-medium text-[#07074D]">Description</label>
        <textarea rows="4" v-model="form.description" name="description" id="description" placeholder="Description de l'article" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
      </div>
      <div>
        <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
      </div>
    </form>
  </div>
</div>

</template>

<script setup>

  import useArticles from "../../resources/js/composables/Article";
  import { reactive } from 'vue'

  const form = reactive({
      name: '',
      email: '',
      address: '',
      website: ''
  })

  const { storeArticle } = useArticles()

  const createArticle = async () => {
      await storeArticle({ ...form })
  }
</script>