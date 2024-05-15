<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';


// Define a type for theme names
type Theme = 'light' | 'dark' | 'cupcake' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave' | 'retro' | 'cyberpunk' | 'valentine' | 'halloween' | 'garden' | 'forest' | 'aqua' | 'lofi' | 'pastel' | 'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' | 'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | 'winter' | 'dim' | 'nord' | 'sunset';

// List of themes
const themes = ref<Theme[]>([
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"
]);

const selectedTheme = ref<Theme>('light');



const themeClasses = computed(() => {
  const themeColors: Record<Theme, { textColor: string;
                                       bgColor: string }> = {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-emerald-500',
    },
    dark: {
      textColor: 'text-white',
      bgColor: 'bg-gray-800',
    },
    cupcake: {
      textColor: 'text-pink-500',
      bgColor: 'bg-pink-100',
    },
    bumblebee: {
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-500',
    },
    forest: {
      textColor: 'text-emerald-100',
      bgColor: 'bg-orange-500',
    },
    black: {
      textColor: 'text-coffee-500',
      bgColor: 'bg-orange-500',
    },
    dracula: {
      textColor: 'text-rose-500',
      bgColor: 'bg-orange-500',
    },
    // Add other themes similarly
  };
  

  const theme = themeColors[selectedTheme.value] || themeColors.light;

  return {
    [theme.textColor]: true,
    [theme.bgColor]: true,
  };
});

const saveTheme = () => {
  localStorage.setItem('selectedTheme', selectedTheme.value);
};

onMounted(() => {
  const storedTheme = localStorage.getItem('selectedTheme');
  if (storedTheme && themes.value.includes(storedTheme as Theme)) {
    selectedTheme.value = storedTheme as Theme;
  }
});
</script>
<template>
  <div :class="themeClasses" class="dropdown mb-72">
    <div tabindex="0" role="button" class="btn m-1">
      Theme
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li v-for="theme in themes" :key="theme">
        <label :for="theme" class="flex items-center">
          <input type="radio" :id="theme" :name="`theme-dropdown`" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme" :value="theme" v-model="selectedTheme" @change="saveTheme">
        </label>
      </li>
    </ul>
  </div>
</template>

<!-- <template>
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
            <input type="radio" :id="theme" :name="`theme-dropdown`" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" :aria-label="theme" :value="theme" v-model="selectedTheme" @change="saveTheme">
        </label>
      </li>
    </ul>
  </div>
</template> -->

<style scoped>
/* .theme-controller {
    --tw-ring-offset-color: #d92a2a;
} */

</style>

                           