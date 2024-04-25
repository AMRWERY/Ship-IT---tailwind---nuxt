<template>
  <div>
    <div id="carouselDarkVariant" class="relative" data-twe-carousel-init data-twe-ride="carousel">
      <!-- Carousel items -->
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <nuxt-link to="/carters-products"
          class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade data-twe-carousel-item data-twe-carousel-active>
          <img src="https://justfields.com/storage/projects/7M5rV059/carterssss.webp" class="block w-full" />
        </nuxt-link>
        <nuxt-link to=""
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade data-twe-carousel-item>
          <img src="https://justfields.com/storage/projects/7M5rV059/salsssss.webp" class="block w-full" />
        </nuxt-link>
        <nuxt-link to=""
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade data-twe-carousel-item>
          <img src="https://justfields.com/storage/projects/7M5rV059/express-deals.webp" class="block w-full" />
        </nuxt-link>
        <nuxt-link to=""
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade data-twe-carousel-item>
          <img src="https://justfields.com/storage/projects/7M5rV059/guess.webp" class="block w-full" />
        </nuxt-link>
      </div>

      <!-- Carousel controls - prev item-->
      <button
        class="absolute top-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
        type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="prev">
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <icon name="ic:baseline-arrow-back" />
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <!-- Carousel controls - next item-->
      <button
        class="absolute top-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
        type="button" data-twe-target="#carouselDarkVariant" data-twe-slide="next">
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <icon name="ic:baseline-arrow-forward" />
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
onMounted(async () => {
  const { Carousel, initTWE } = await import("tw-elements");
  initTWE({ Carousel });
});
</script>