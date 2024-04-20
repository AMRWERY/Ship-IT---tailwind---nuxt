<!-- <template>
    <div class="flex items-center">
        <i class="fa-solid fa-star w-4 h-4 text-yellow-300 me-1" aria-hidden="true"></i>
        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{{ rating }}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{{ reviews }}
            reviews</a>
    </div>
</template>

<script setup>
const props = defineProps(["rating", 'reviews']);
</script> -->

<template>
    <div class="flex items-center">
        <div v-for="star in stars" :key="star" class="flex items-center">
            <i :class="star.iconClass" aria-hidden="true"></i>
        </div>
        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{{ rating }}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
            {{ reviews }} reviews
        </a>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps(['rating', 'reviews']);

const stars = computed(() => {
    const fullStars = Math.floor(props.rating);
    const hasHalfStar = props.rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starsArray = [];

    for (let i = 0; i < fullStars; i++) {
        starsArray.push({ iconClass: 'fa-solid fa-star w-4 h-4 text-yellow-300 me-1' });
    }
    if (hasHalfStar) {
        starsArray.push({ iconClass: 'fa-solid fa-star-half w-4 h-4 text-yellow-300 me-1' });
    }
    for (let i = 0; i < emptyStars; i++) {
        starsArray.push({ iconClass: 'fa-regular fa-star w-4 h-4 text-gray-300 me-1' });
    }
    return starsArray;
});
</script>
  