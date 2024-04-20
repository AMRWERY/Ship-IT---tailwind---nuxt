<template>
  <div>
    <h3 class="text-xl font-semibold">{{ $t('products.related_products') }}</h3>
    <Carousel :wrapAround="true" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="product in storeTwo.products" :key="product">
        <div class="carousel__item">
          <div class="relative m-10 w-[300px] max-w-[16rem] overflow-hidden rounded-lg bg-white shadow-md">
            <div>
              <img class="object-cover w-full rounded-t-lg h-60 transit" :src="product.productImg" />
            </div>
            <span
              class="absolute top-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black start-0 w-28"
              v-if="product.discount">{{ product.discount }}% {{ $t('home.off') }}</span>
            <div class="px-5 pb-5 mt-4">
              <a href="#">
                <h5 class="font-semibold tracking-tight truncate text-md text-slate-900">
                  {{ product.title }}
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <p>
                  <span class="font-bold ms-2 text-md text-slate-900">{{ $t('products.egp') }} {{ product.price
                    }}</span>
                  <span class="line-through text-md text-slate-600" v-if="product.originalPrice">{{ $t('products.egp')
                    }} {{
                      product.originalPrice
                    }}</span>
                </p>
              </div>
              <p class="mt-2 text-sm text-start">{{ $t('products.get_it_by') }} {{ product.getBy }}</p>
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
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const storeTwo = useCartersRelatedProductsStore()

onMounted(() => {
  storeTwo.fetchProducts()
})

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  600: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  960: {
    itemsToShow: 2.5,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 4.5,
    snapAlign: 'start',
  },
});
</script>