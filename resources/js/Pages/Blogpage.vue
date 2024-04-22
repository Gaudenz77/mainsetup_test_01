<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';

import { Head } from "@inertiajs/vue3";
import axios from 'axios';

/* const props = defineProps<{
    auth: Object;
    message: {
        id: number;
        user_id: number;
        title: string;
        leadtext: string;
        message: string;
        image: string | null;
    };
    authId: number;
}>();  */

/* const originalMessageContent = ref(''); */
/* const messages = ref<Message[]>([]);

interface Message {
  id: number;
  user_id: number;
  user_name: string;
  title: string;
  leadtext: string;
  image: string;
  message: string;
  created_at: string;
} */


// Fetch messages
/* onMounted(async () => {
  try {
    
    const response = await axios.get('/messages');
    messages.value = response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
});

const formatCreatedAt = (createdAt: any) => {
  const date = new Date(createdAt);
  return date.toLocaleString();
}; */




</script>

<template>
  <div>

    <Head title="Dashboard"></Head>

    <AppLayout>
      <template #header>
        <h2 class="bricolage-grotesque-mainsetup-lead">
          Pinboard hey hey YALLZIES !!!
        </h2>
      </template>
      <!-- <div
        class="container min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center my-12 min-h-100"> -->
        <!-- <div v-for="message in messages" :key="message.id">
          <a :href="'/singlestory/' + message.id" class="group lg:relative block aspect-w-4 aspect-h-5 rounded-xl"
            style="height:auto;">
            <span class="absolute inset-0 border-2 border-dashed border-black dark:border-white rounded-xl"></span>
            <div
              class="lg:relative flex flex-col h-full border-2 border-black dark:bg-white bg-slate-800 dark:text-slate-900 text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl ">
              <div  class="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 rounded-xl">
                <i class="fa-solid fa-earth-africa fa-2x mt-3"></i>
                <h2 class="mt-4 text-xl font-medium sm:text-2xl">

                  <h1 class="text-4xl font-bold">{{ message.title }}</h1>
                </h2>
                <div>
                  <img v-if="message.image" :src="'/storage/' + message.image" alt="Message Image"
                    class="fluid my-4 rounded-lg">
                </div>
              </div>
              <div
                class="absolute p-4 opacity-0 transition-opacity group-hover:lg:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 class="mt-4 text-xl font-medium sm:text-2xl">{{ message.title }}</h3>
                <p class="mt-4 text-sm sm:text-base">
                <h3 class="text-xl italic">{{ message.leadtext }}</h3>
                </p>
                <p>Created At: {{ formatCreatedAt(message.created_at) }}</p>
                <p class="mt-8 font-bold"><a :href="'/singlestory/' + message.id" class="read-more-link">Read more</a>
                </p>
              </div>
            </div>
          </a>
        </div> -->
        <div class="flex flex-col sm:flex-row justify-center m-8 gap-8 ">
            <div class="bricolage-grotesque-mainsetup w-full sm:w-1/4 bg-red-500 ps-16 p-8 lg:relative top-8 rounded-tr-3xl rounded-bl-full ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae cum et rem officia earum eligendi ad saepe consequatur cupiditate, totam aut molestiae ipsam repellendus harum eum quos ducimus? Iusto, dolor.</div>
            <div class="w-full sm:w-1/4 bg-blue-500 ps-16 p-8 lg:relative top-16 rounded-e-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam incidunt reiciendis quis laborum, vero ratione, ea architecto ut sit repellendus iste enim nisi et aut error optio assumenda porro?</div>
            <div class="w-full sm:w-1/4 bg-green-500 ps-16 p-8 lg:relative bottom-3 rounded-s-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo ad, facere numquam, veniam aliquid a perspiciatis, nulla corrupti quam quas molestiae iste fuga expedita placeat officia quia dolorem! Quod.</div>
            <div class="w-full sm:w-1/4 bg-yellow-500 ps-16 p-8 lg:relative top-8 rounded-e-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo ad, facere numquam, veniam aliquid a perspiciatis, nulla corrupti quam quas molestiae iste fuga expedita placeat officia quia dolorem! Quod.</div>
        </div>
         <!-- </div> -->
    </AppLayout>

  </div>
</template>