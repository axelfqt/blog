<template>
  <div class="flex flex-wrap place-items-center">
    <section class="relative mx-auto">
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-3xl font-bold font-heading" href="#">Blog</a>
          <ul v-if="!isLogin" class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" href="/">Home</a></li>
            <li><a class="hover:text-gray-200" href="/login">Se connecter</a></li>
            <li><a class="hover:text-gray-200" href="/register">S'enregistrer</a></li>
          </ul>

          <ul v-if="isLogin" class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><a class="hover:text-gray-200" href="/">Home</a></li>
            <li><a class="hover:text-gray-200" href="/article">Créer un article</a></li>
            <li><a class="hover:text-gray-200" href="#">Mon profil</a></li>
            <li><a class="hover:text-gray-200" href="#">Déconnexion</a></li>
          </ul>
        </div>
        <a class="xl:hidden flex mr-6 items-center" href="#">
          <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
            </span>
          </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></a>
      </nav>
    </section>
  </div>
<router-view/>
</template>

<script setup>
  import { onMounted } from "vue";
  import useAuth from "./resources/js/composables/Auth";

  const {isLogin, getUserToken} = useAuth();
  onMounted(() => getUserToken());

  console.log(isLogin);
</script>