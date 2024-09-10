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
  const themeColors: Record<Theme, { textColor: string; bgColor: string }> = {
  light: { textColor: 'text-black', bgColor: 'bg-white' },
  dark: { textColor: 'text-white', bgColor: 'bg-gray-800' },
  cupcake: { textColor: 'text-pink-500', bgColor: 'bg-pink-100' },
  bumblebee: { textColor: 'text-yellow-700', bgColor: 'bg-yellow-100' },
  emerald: { textColor: 'text-green-500', bgColor: 'bg-green-100' },
  corporate: { textColor: 'text-blue-500', bgColor: 'bg-blue-100' },
  synthwave: { textColor: 'text-purple-500', bgColor: 'bg-purple-100' },
  retro: { textColor: 'text-orange-500', bgColor: 'bg-orange-100' },
  cyberpunk: { textColor: 'text-cyan-500', bgColor: 'bg-cyan-100' },
  valentine: { textColor: 'text-red-500', bgColor: 'bg-red-100' },
  halloween: { textColor: 'text-orange-500', bgColor: 'bg-orange-200' },
  garden: { textColor: 'text-green-700', bgColor: 'bg-green-100' },
  forest: { textColor: 'text-green-800', bgColor: 'bg-green-200' },
  aqua: { textColor: 'text-blue-700', bgColor: 'bg-blue-100' },
  lofi: { textColor: 'text-gray-500', bgColor: 'bg-gray-100' },
  pastel: { textColor: 'text-pink-300', bgColor: 'bg-pink-50' },
  fantasy: { textColor: 'text-purple-700', bgColor: 'bg-purple-100' },
  wireframe: { textColor: 'text-gray-700', bgColor: 'bg-gray-50' },
  black: { textColor: 'text-black', bgColor: 'bg-black' },
  luxury: { textColor: 'text-yellow-700', bgColor: 'bg-gray-800' },
  dracula: { textColor: 'text-red-600', bgColor: 'bg-gray-900' },
  cmyk: { textColor: 'text-blue-600', bgColor: 'bg-yellow-50' },
  autumn: { textColor: 'text-orange-600', bgColor: 'bg-orange-50' },
  business: { textColor: 'text-blue-800', bgColor: 'bg-white' },
  acid: { textColor: 'text-green-600', bgColor: 'bg-yellow-100' },
  lemonade: { textColor: 'text-yellow-700', bgColor: 'bg-yellow-50' },
  night: { textColor: 'text-blue-300', bgColor: 'bg-gray-900' },
  coffee: { textColor: 'text-brown-800', bgColor: 'bg-brown-100' },
  winter: { textColor: 'text-blue-700', bgColor: 'bg-blue-50' },
  dim: { textColor: 'text-gray-500', bgColor: 'bg-gray-800' },
  nord: { textColor: 'text-blue-500', bgColor: 'bg-blue-900' },
  sunset: { textColor: 'text-orange-500', bgColor: 'bg-orange-100' }
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
      {{selectedTheme}}
      <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="myDropdown dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
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

.myDropdown {
  position:relative;
  z-index:3;
}

</style>

                           