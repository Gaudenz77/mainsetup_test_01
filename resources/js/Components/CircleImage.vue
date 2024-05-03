<template>
    <div
      class="absolute rounded-full overflow-hidden"
      :class="`h-${size} w-${size}`"
      :style="randomPosition"
    >
      <img :src="imageUrl" alt="Circle Image" class="w-full h-full object-cover animate__animated animate__slow animate__rotateIn" />
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    imageUrl: String,
    size: {
      type: Number,
      default: 100, // Default size of the circle image
    },
  });
  
  // Function to generate random position for the circle-shaped divs
  const randomPosition = () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  });
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  