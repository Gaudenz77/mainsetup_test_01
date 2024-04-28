<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
/* import Blogcard from '@/Components/Blogcard.vue'; */

import { Head } from "@inertiajs/vue3";
import axios from 'axios';

const props = defineProps<{
    auth: Object;
    blog: {
        id: number;
        user_id: number;
        title: string;
        leadtext: string;
        message: string;
        image: string | null;
    };
    authId: number;
}>(); 

/* const originalblogContent = ref(''); */
const blogs = ref<Blog[]>([]);

interface Blog {
  id: number;
  user_id: number;
  user_name: string;
  title: string;
  leadtext: string;
  image: string;
  message: string;
  created_at: string;
}


// Fetch blogs
onMounted(async () => {
  try {
    
    const response = await axios.get('/blogs');
    blogs.value = response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
});

const formatCreatedAt = (createdAt: any) => {
  const date = new Date(createdAt);
  return date.toLocaleString();
};




</script>

<template>
  <div>

    <Head title="Dashboard"></Head>

    <AppLayout>
      <template #header>
        <h2 class="bricolage-grotesque-mainsetup-lead text-black dark:text-white text-end">
          Pinboard hey hey YALLZIES !!!!!
        </h2>
        <div class="">
          <button class="btn btn-info">Info</button>
        </div>
      </template>
      <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center me-32 my-12 ">
        <div v-for="blog in blogs" :key="blog.id">
          <a :href="'/singlestory/' + blog.id" class="mx-8 w-full group lg:relative block aspect-w-4 aspect-h-5 rounded-xl lg:h-96"
            style="height:auto;">
            <span class="mx-8 absolute inset-0 border-2 w-full border-dashed border-black dark:border-white rounded-xl"></span>
            <div class="mx-8 lg:relative flex flex-col w-full h-full border-2 border-black dark:bg-white bg-slate-800 dark:text-slate-900 text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl ">
              <!-- <img v-if="blog.image" :src="'/storage/' + blog.image" alt="blog Image"
                    class="fluid my-0 rounded-t-lg"> -->
              <div  class="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 rounded-xl">
                <i class="fa-solid fa-earth-africa fa-2x mt-3"></i>
                <h2 class="mt-4 text-xl font-medium sm:text-2xl">

                  <h1 class="uppercase text-4xl font-bold">{{ blog.title }}</h1>
                </h2>
                
                <div>
                  
                </div>
              </div>
              <img v-if="blog.image" :src="'/storage/' + blog.image" alt="blog Image"
                    class="rounded-lg" style="background-size: cover; background-position: center;">
              <div class="absolute p-4 opacity-0 transition-opacity group-hover:lg:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 class="mt-4 text-xl font-medium sm:text-2xl">{{ blog.title }}</h3>
                <p class="mt-4 text-sm sm:text-base">
                <h3 class="text-lg">{{ blog.leadtext }}</h3>
                </p>
                <p>Created At: {{ formatCreatedAt(blog.created_at) }}</p>
                <p class="mt-8 font-bold"><a :href="'/singlestory/' + blog.id" class="read-more-link">Read more</a>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </AppLayout>

  </div>
</template>