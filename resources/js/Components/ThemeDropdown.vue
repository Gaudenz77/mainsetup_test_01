<script setup lang="ts">
import { ref, onMounted } from 'vue';


const themes = ref([
"light",
"dark",
"cupcake",
"bumblebee",
"emerald",
"corporate",
"synthwave",
"retro",
"cyberpunk",
"valentine",
"halloween",
"garden",
"forest",
"aqua",
"lofi",
"pastel",
"fantasy",
"wireframe",
"black",
"luxury",
"dracula",
"cmyk",
"autumn",
"business",
"acid",
"lemonade",
"night",
"coffee",
"winter",
"dim",
"nord",
"sunset",

  // Add all your themes here
]);

const selectedTheme = ref('light');

const saveTheme = () => {
  localStorage.setItem('selectedTheme', selectedTheme.value);
};

onMounted(() => {
  const storedTheme = localStorage.getItem('selectedTheme');
  if (storedTheme && themes.value.includes(storedTheme)) {
    selectedTheme.value = storedTheme;
  }
});
</script>
<template>
  <div class="dropdown mb-72">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li v-for="theme in themes" :key="theme">
        <label :for="theme" class="flex items-center">
            <input type="radio" :id="theme" :name="`theme-dropdown`" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme" :value="theme" v-model="selectedTheme" @change="saveTheme">          <!-- <span>{{ theme }}</span> -->
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* .theme-controller {
    --tw-ring-offset-color: #d92a2a;
} */

</style>

                           