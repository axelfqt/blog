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
            <li><a class="hover:text-gray-200" href="/profil">Mon profil</a></li>
            <li><a class="hover:text-gray-200" @click="userLogout">Déconnexion</a></li>
          </ul>
          <a href="/users"><svg class="text-white-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg></a>
        </div>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></a>
      </nav>
    </section>
  </div>
<router-view/>
</template>

<script setup>
  import { onMounted } from "vue";
  import useAuth from "./resources/js/composables/Auth";

  const {isLogin, getUserToken, logout} = useAuth();

  const userLogout = async () => {
    await logout()
  }
  onMounted(() => getUserToken());
</script>