<template>
    <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px]">
      <form @submit.prevent="register">
        <div class="mb-5">
          <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">name</label>
          <input type="text" v-model="form.name" name="name" id="name" placeholder="name" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">email</label>
          <input type="email" v-model="form.email" name="email" id="email" placeholder="Email" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">password</label>
          <input type="password" v-model="form.password" name="password" id="password" placeholder="Password" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div class="mb-5">
          <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">password</label>
          <input type="password" v-model="form.password_confirmation" name="password_confirmation" id="password_confirmation" placeholder="Password Confirmation" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
        </div>
        <div>
          <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
        </div>
      </form>
    </div>
  </div>
  
  </template>

<script setup>
    import axios from "axios";
    import { reactive } from "vue";
    import useAuth from "../../resources/js/composables/Auth";

    const form = reactive({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const { createUser } = useAuth();

    const register = async () => {
        await createUser({...form})
    }
</script>