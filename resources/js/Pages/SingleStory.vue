<script setup lang="ts">
import { ref, defineProps } from 'vue';

import AppLayout from '@/Layouts/AppLayout.vue';

import { Head } from "@inertiajs/vue3";
import axios from 'axios';

const props = defineProps<{
    blog: {
        id: number;
        user_id: number;
        title: string;
        leadtext: string;
        message: string;
        image: string | null;
    };
    authId: number; // Add authId prop
}>();

const editMode = ref(false);
let originalBlogTitle: string;
let originalLeadText: string;
let originalBlogContent: string;

const deleteBlog = async (id: number) => {
    try {
        await axios.delete(`/blogs/${id}`);
        window.location.href = '/blogpage'; // Redirect to the pinboard after deletion
    } catch (error) {
        console.error('Error deleting blog:', error);
    }
};

const updateBlog = async () => {
    try {
        const response = await axios.put(`/blogs/${props.blog.id}`, props.blog);
        console.log('blog updated:', response.data);
        window.location.reload(); // Refresh the page after update
    } catch (error) {
        console.error('Error updating blog:', error);
    }
};

const startEditMode = () => {
    editMode.value = true;
    // Save the original blog title, lead text, and content
    originalBlogTitle = props.blog.title;
    originalLeadText = props.blog.leadtext;
    originalBlogContent = props.blog.message;
};

const cancelEdit = () => {
    editMode.value = false;
    // Restore the original blog title, lead text, and content
    props.blog.title = originalBlogTitle;
    props.blog.leadtext = originalLeadText;
    props.blog.message = originalBlogContent;
};

    /* document.addEventListener("selectionchange", (e) => {
        console.log(window.getSelection()?.toString());
    }) */


</script>

<template>
    
    <Head title="Dashboard"></Head>

    <AppLayout :blog="props.blog" :authId="props.authId">
        <template #header>
            <h2 class="font-semibold text-xl leading-tight text-black dark:text-white">
                Single Story No. {{ props.blog.id }}
            </h2>
        </template>
        <div class="min-h-screen text-black dark:text-white">
            <!-- Upper row with full-width image -->
            <div class="relative h-[500px] overflow-hidde">
                <img v-if="blog.image" :src="'/storage/' + blog.image" class="absolute inset-0 w-full h-full object-cover object-center" alt="blog Image" />
            </div>
            <!-- Lower row with centered content -->
            <div class="flex items-center justify-center h-1/2">
                <div class="w-1/2 py-12">
                    <!-- Content goes here -->
                    <h1 v-if="editMode" class="text-3xl font-bold mb-4">
                        <input v-model="props.blog.title" class="w-full border-gray-300 text-slate-800 rounded-md p-2">
                    </h1>
                    <h1 v-else class="text-3xl font-bold mb-4">{{ props.blog.title }}</h1>
                    <p v-if="editMode" class="text-lg leading-relaxed">
                        <textarea v-model="props.blog.leadtext" class="w-full border-gray-300 text-slate-800 rounded-md p-2"></textarea>
                    </p>
                    <p v-else class="text-lg leading-relaxed">{{ props.blog.leadtext }}</p>
                    <!-- Show textarea for editing blog if in edit mode -->
                    <textarea v-if="editMode" v-model="props.blog.message" class="w-full border-gray-300 text-slate-800 rounded-md p-2"></textarea>
                    <!-- Show blog content if not in edit mode -->
                    <p v-else class="textSingle text-sm">{{ props.blog.message }}</p>
                    <!-- Buttons for edit and delete -->
                    <div class="flex justify-center mt-4 gap-2">
                        <button v-if="props.authId === props.blog.user_id" @click="!editMode ? startEditMode() : updateBlog()" class="text-white bg-yellow-500 px-4 py-2 rounded-md mr-0">{{ !editMode ? 'Edit' : 'Update' }}</button>
                        <button v-if="props.authId === props.blog.user_id && !editMode" @click="deleteBlog(props.blog.id)" class="text-white bg-red-500 px-4 py-2 rounded-md">Delete</button>
                        <button v-if="editMode" @click="cancelEdit" class="text-white bg-gray-500 px-4 py-2 rounded-md">Cancel</button>
                        <a href="/blogpage" type="button" class="text-white bg-gray-500 px-4 py-2 rounded-md">Back to Blogpage</a>
                        
                    </div>
                    <!-- admin only start -->
                    <!-- <div  v-if="$page.props.auth.user" class="flex mt-4 justify-center align-middle ">
                        <p>Auth ID: {{ props.authId }}</p>
                        <p>blog User ID: {{ props.blog.user_id }}</p>
                    </div> -->
                    <!-- admin only stop -->
                </div>
                
            </div>
        </div>
     
    </AppLayout>
    
</template>

<style>
.textSingle {
    white-space: pre-wrap;
}
</style>