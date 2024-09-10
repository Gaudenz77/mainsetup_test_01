<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
    <!-- BLOGCARD TEMPLATE ONE START -->
    
        <div v-for="(blog, index) in blogs" :key="blog.id" :style="{ animationDelay: `${index * 100}ms` }" class="animate__animated animate__rotateIn">
        <!-- Your card content here -->
        <a :href="'/singlestory/' + blog.id" class="flex myCards bg-white transition hover:shadow-xl">
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time datetime=""
                    class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                    <span>{{ formatCreatedAt(blog.created_at) }}</span>
                    <span class="w-px flex-1 bg-gray-900/10"></span>
                </time>
            </div>

            <div class="hidden sm:block sm:basis-56">
                <img v-if="blog.image" :src="'/storage/' + blog.image" alt="blog Image"
                    class="aspect-square h-full w-full object-cover" />
            </div>

            <div class="flex flex-1 flex-col justify-between">
                <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 class="font-bold uppercase text-gray-900">
                            {{ blog.title }}
                        </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {{ blog.leadtext }}
                    </p>
                </div>

                <div class="sm:flex sm:items-end sm:justify-end">

                    <a :href="'/singlestory/' + blog.id"
                        class="block dark:bg-yellow-300 bg-emerald-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 dark:hover:bg-orange-500">
                        Read Blog
                    </a>
                </div>
            </div>
        </a>
    </div>
 


</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.myCards {
    position:relative;
    z-index:-10;
    /* display:none; */
}
</style>

  <!-- BLOGCARD TEMPLATE TWO START -->
        <!-- <a :href="'/singlestory/' + blog.id" class="mx-8 w-full group lg:relative block aspect-w-4 aspect-h-5 rounded-xl lg:h-96"
            style="height:auto;">
            <span class="mx-8 absolute inset-0 border-2 w-full border-dashed border-black dark:border-white rounded-xl"></span>
            <div class="mx-8 lg:relative flex flex-col w-full h-full border-2 border-black dark:bg-white bg-slate-800 dark:text-slate-900 text-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl ">
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
          </a> -->