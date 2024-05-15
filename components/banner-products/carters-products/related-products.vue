<template>
  <div>
    <h3 class="text-xl font-semibold text-neutral-600 dark:text-neutral-300">{{ $t('products.related_products') }}</h3>
    <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3000" :transition="500">
      <Slide v-for="product in storeTwo.products" :key="product">
        <div class="carousel__item">
          <div
            class="relative m-10 w-[300px] max-w-[16rem] overflow-hidden rounded-2xl bg-white shadow-md dark:bg-neutral-700">
            <div>
              <img class="object-cover w-full rounded-t-lg h-60 transit" :src="product.productImg" />
            </div>
            <span
              class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
              v-if="product.discount">{{ product.discount }}% {{ $t('home.off') }}</span>
            <div class="px-5 pb-5 mt-4">
              <a href="#">
                <h5 class="font-semibold tracking-tight truncate text-md text-slate-900 dark:text-slate-300">
                  {{ product.title }}
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <p>
                  <span class="text-lg font-bold text-red-600 me-2 dark:text-red-200">{{ $t('products.egp') }} {{
                    product.price
                    }}</span>
                  <span class="line-through text-md text-slate-900 dark:text-slate-300" v-if="product.originalPrice">{{
                    $t('products.egp')
                    }} {{
                      product.originalPrice
                    }}</span>
                </p>
              </div>
              <p class="mt-2 text-sm text-start text-slate-700 dark:text-slate-300">{{ $t('products.get_it_by') }} {{
                product.getBy }}</p>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
const storeTwo = useCartersRelatedProductsStore()

onMounted(() => {
  storeTwo.fetchProducts()
})

const settings = ref({
  itemsToShow: 4.5,
  snapAlign: 'center',
});

const breakpoints = ref({
  412: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4.25,
    snapAlign: 'center',
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>