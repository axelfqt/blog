<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
            class="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 dark:bg-transparent">
            <p class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Retrouvez tous les utilisateurs..</p>


            <form>
                <label
                    class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                    for="search">

                    <input id="search" placeholder="Entrez un nom d'utilisateur" class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" v-model="strSearch" @keydown.enter="onPressEnter">
                </label>
            </form>

            <div class="mt-6 text-left mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-black-200 sm:text-4xl" v-for="user in users" :key="user.id">
                <p class=""><router-link :to="'/user/' + user.name">{{user.name}}</router-link></p>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch } from "vue";
    import useUsers from '../../resources/js/composables/User';


    const strSearch = ref('');
    const {users, findUsers} = useUsers();

    const onPressEnter = (e) => {
        e.preventDefault()
    }

    watch(() => strSearch.value, (newValue) => {
        if(strSearch.value < 1){
            return;
        }
        findUsers(newValue)
    })
</script>