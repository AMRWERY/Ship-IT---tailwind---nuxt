<template>
    <div class="flex items-center">
        <div v-for="star in stars" :key="star" class="flex items-center">
            <icon :name="star.iconName" :class="star.iconClass" aria-hidden="true"></icon>
        </div>
        <p class="text-sm font-bold text-gray-900 ms-2 dark:text-white">{{ rating }}</p>
        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-gray-300">
            {{ reviews }}
        </a>
    </div>
</template>

<script setup>
const props = defineProps(['rating', 'reviews']);

const stars = computed(() => {
    const fullStars = Math.floor(props.rating);
    const hasHalfStar = props.rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starsArray = [];

    for (let i = 0; i < fullStars; i++) {
        starsArray.push({ iconClass: 'w-5 h-5 text-yellow-300', iconName: 'ic:baseline-star' });
    }
    if (hasHalfStar) {
        starsArray.push({ iconClass: 'w-5 h-5 text-yellow-300', iconName: 'ic:baseline-star-half' });
    }
    for (let i = 0; i < emptyStars; i++) {
        starsArray.push({ iconClass: 'w-5 h-5 text-gray-300', iconName: 'ic:baseline-star-border' });
    }
    return starsArray;
});
</script>