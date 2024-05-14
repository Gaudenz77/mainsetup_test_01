<script setup lang="ts">
import AppLayout from '@/Layouts/AppLayout.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Welcome from '@/Components/Welcome.vue';
import ImageTable from '@/Components/ImageTable.vue';
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
    const response = await axios.post('/blogs', formDataToSend, {
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data);
    // Handle success response
    successMessage.value = response.data.blog;
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

        <div class="lg:py-12 sm:pt-0" data-theme="">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class=" overflow-hidden shadow-xl sm:rounded-lg"> <!-- bg-white dark:bg-zinc-950 -->
                    <!-- <Welcome /> -->
                    <div class="p-6 lg:p-8 dark:bg-white bg-zinc-600  border-b border-gray-200">
                    <a class="flex md:justify-start justify-center items-center" href="/" >
                        <ApplicationLogo class="block h-12 w-auto  fa-beat-fade" />
                        <h1 class="bricolage-grotesque-mainsetup-lead ps-4 text-base font-medium"> <!-- text-gray-100 dark:text-stone-800  -->
                        Welcome to your Dashoboard Command Center</h1>
                    </a>
                </div>
                    
                    <div class=" grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8"> <!-- bg-gray-200 bg-opacity-25 -->
                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold"> <!--text-gray-900 dark:text-gray-100 -->
                                    <a href="https://laravel.com/docs">Create New Blogs</a>
                                </h2>
                            </div>

                            <p class="mt-4 text-gray-500 text-sm leading-relaxed">
                                <!-- CREATE BLOGS FORM -->
                                <form @submit.prevent="submitForm" enctype="multipart/form-data" class="formOwnOne space-y-4" data-theme="">
                                    <div>
                                    <label data-theme=""  for="title" class="block text-sm font-medium ">Title</label> 
                                    <input  type="text" id="title" v-model="formData.title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div>
                                    <label data-theme="" for="leadtext" class="block text-sm font-medium ">Leadtext</label>
                                    <input type="text" id="leadtext" v-model="formData.leadtext" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div>
                                    <label  data-theme=""for="message" class="block text-sm font-medium ">Text</label>
                                    <textarea id="message" v-model="formData.message" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 text-zinc-100 dark:text-zinc-800 bg-zinc-800  dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                    </div>
                                    <div>
                                    <label data-theme="" for="image" class="block text-sm font-medium">Image</label>
                                    <Input type="file" id="image" accept="image/*" @change="handleImageChange" class="mt-1 focus:ring-indigo-500 text-zinc-100 dark:text-zinc-800 focus:border-indigo-500 bg-zinc-800 dark:bg-zinc-100 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md fileInputOwn" />
                                    
                                    </div>
                                    <div>
                                    <button type="submit" class="btn">
                                        Submit
                                    </button>
                                    </div>
                                </form>
                            </p>

                            <!-- Tailwind modal for displaying success message -->
                            <div v-if="successMessage" class="fixed inset-0 overflow-y-auto">
                            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                                </div>

                                        <!-- This is the modal container -->
                                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                        <!-- Modal panel, show/hide based on modal state. -->
                                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
                                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <!-- Heroicon name: check -->
                                                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 class="text-lg font-medium text-gray-900" id="modal-headline">
                                                Success!
                                                </h3>
                                                <div class="mt-2">
                                                <p class="text-sm text-gray-500">
                                                    {{ successMessage }}
                                                </p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <a href="/blogpage" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                            Go to Blogpage
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    <a href="https://laracasts.com">Uploaded Image Collection</a>
                                </h2>
                            </div>

                            <p class="mt-4 text-sm leading-relaxed">
                                IMAGE TABLE  
                                <ImageTable />              
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold">
                                    <a href="https://tailwindcss.com/">Uploaded Events / Publications </a>
                                </h2>
                            </div>

                            <p class="mt-4 0 text-sm leading-relaxed">
                                EVENTS / PUBLICATIONS FORM
                            </p>
                        </div>

                        <div>
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <h2 class="ms-3 text-xl font-semibold ">
                                    Uploaded Events / Publications (Chat?)
                                </h2>
                            </div>

                            <p class="mt-4  text-sm leading-relaxed">
                                EVENTS / PUBLICATIONS TABLE  (CHAT FORM)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </AppLayout>
</template>



<style scoped>
/* Style for modal */
.modal {
  display: none;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

}

.modal-content {
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  max-width: 700px;
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
