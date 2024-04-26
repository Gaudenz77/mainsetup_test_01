<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import { Head } from "@inertiajs/vue3";
import axios from 'axios';
import { ref, Ref } from 'vue';
import { defineProps } from 'vue';

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
// Define props
const { authId } = defineProps(['authId']);

// Define the type of formData
interface FormData {
  title: string;
  leadtext: string;
  message: string;
  image: File | null; // Allow image to be either a File or null
}


// Define reactive formData
const formData: Ref<FormData> = ref({
  title: '',
  leadtext: '',
  message: '',
  image: null,
});

const successMessage = ref<string | null>(null);

// Define method to handle image change
const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    formData.value.image = target.files[0];
  }
};

// Define method to submit form
const submitForm = async () => {
  try {
    console.log("User ID:", authId);
    // Create form data object
    const formDataToSend = new FormData();
    // Append form fields
    formDataToSend.append('title', formData.value.title);
    formDataToSend.append('leadtext', formData.value.leadtext);
    formDataToSend.append('message', formData.value.message);
    // Append image file
    if (formData.value.image) {
      formDataToSend.append('image', formData.value.image);
    }
    // Append user ID
    formDataToSend.append('user_id', authId);
    // Send form data using axios
    const response = await axios.post('/messages', formDataToSend, {
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data);
    // Handle success response
    successMessage.value = response.data.message;
    // Clear form data
    formData.value.title = '';
    formData.value.leadtext = '';
    formData.value.message = '';
    formData.value.image = null;
  } catch (error: any) {
    console.error(error.response.data);
  }
};
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="bricolage-grotesque-mainsetup-lead font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="lg:py-12 sm:pt-0">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <!-- <Welcome /> -->
                    <div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold text-gray-900">
                                    <a href="https://laravel.com/docs">Create New Blogs</a>
                                </h2>
                            </div>

                            <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                <!-- CREATE BLOGS FORM -->
                                <form @submit.prevent="submitForm" enctype="multipart/form-data" class="formOwnOne space-y-4">
                                    <div>
                                    <label for="title" class="block text-sm font-medium text-zinc-800 dark:text-zinc-100">Title</label>
                                    <input type="text" id="title" v-model="formData.title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div>
                                    <label for="leadtext" class="block text-sm font-medium text-zinc-800 dark:text-zinc-100">Leadtext</label>
                                    <input type="text" id="leadtext" v-model="formData.leadtext" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div>
                                    <label for="message" class="block text-sm font-medium text-zinc-800 dark:text-zinc-100">Message</label>
                                    <textarea id="message" v-model="formData.message" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800  dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                    </div>
                                    <div>
                                    <Label for="image" class="block text-sm font-medium text-zinc-800 dark:text-zinc-100">Image</Label>
                                    <Input type="file" id="image" accept="image/*" @change="handleImageChange" class="mt-1 focus:ring-indigo-500 text-zinc-100 dark:text-zinc-800 focus:border-indigo-500 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md fileInputOwn" />
                                    
                                    </div>
                                    <div>
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit
                                    </button>
                                    </div>
                                </form>
                            </p>

                            <p class="mt-4 text-sm">
                                <!-- <a href="https://laravel.com/docs" class="inline-flex items-center font-semibold text-indigo-700">
                                    Explore the documentation

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500">
                                        <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                                    </svg>
                                </a> -->
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold text-gray-900">
                                    <a href="https://laracasts.com">Uploaded Image Collection</a>
                                </h2>
                            </div>

                            <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                IMAGE TABLE                
                            </p>

                            <p class="mt-4 text-sm">
                                <!-- <a href="https://laracasts.com" class="inline-flex items-center font-semibold text-indigo-700">
                                    Start watching Laracasts

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500">
                                        <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                                    </svg>
                                </a> -->
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold text-gray-900">
                                    <a href="https://tailwindcss.com/">Uploaded Events / Publications </a>
                                </h2>
                            </div>

                            <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                EVENTS / PUBLICATIONS FORM
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold text-gray-900">
                                    Uploaded Events / Publications (Chat?)
                                </h2>
                            </div>

                            <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                EVENTS / PUBLICATIONS TABLE  (CHAT FORM)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
