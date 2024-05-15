<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Modal from '@/Components/Modal.vue'; // Adjust the path based on your project structure

// Define reactive variable for image preview
const previewImage = ref<string | null>(null);
// Define reactive variable for blogs
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

// Method to open image preview modal
const openImagePreview = (image: string) => {
  // Prepend /storage to the image path
  previewImage.value = '/storage/' + image;
};

// Method to close image preview modal
const closeImagePreview = () => {
  previewImage.value = null;
};

// Fetch blogs data from the API
const fetchBlogs = async () => {
  try {
    const response = await axios.get('/blogs');
    blogs.value = response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

// Fetch blogs data when the component is mounted
onMounted(() => {
  fetchBlogs();
});
</script>

<template>
  <!-- Blog Table -->
  <table data-theme="">
    <thead>
      <tr>
        <th>Title</th>
        <th>Lead Text</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <!-- Iterate over blogs -->
      <tr v-for="blog in blogs" :key="blog.id">
        <td>{{ blog.title }}</td>
        <td>{{ blog.leadtext }}</td>
        <td>
          <!-- Image Link with Preview -->
            <a href="#" @click.prevent="openImagePreview(blog.image)">
                <img :src="'/storage/' + blog.image" alt="Blog Image" style="width: 100px; height: auto;" />
            </a>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Include the Modal component -->
  <Modal :show="previewImage !== null" maxWidth="2xl" :closeable="true" @close="closeImagePreview">
  <div class="modal-content" data-theme="">
    <span class="close" @click="closeImagePreview"  ><i class="fa-solid fa-circle-xmark p-3 invert"></i></span>
    <!-- Conditional rendering of img element -->
    <template v-if="previewImage !== null">
      <img :src="previewImage" alt="Preview Image" />
    </template>
  </div>
</Modal>

</template>

<style scoped>
/* Style for modal */
.modal {
  display: none;
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
 /*  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9); */
}

.modal-content {



}

.close {
  color: #4b4040;
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
