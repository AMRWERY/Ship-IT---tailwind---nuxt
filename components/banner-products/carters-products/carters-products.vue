<template>
  <div class="bg-white">
    <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-2">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Results</h2>
      <p>Price and other details may vary based on product size and color.</p>

      <!-- search input -->
      <div class="px-6 py-4 md:flex md:justify-center md:items-center">
        <div class="relative pt-2 text-gray-600">
          <div class="absolute inset-y-0 flex items-center mt-2 pointer-events-none end-0 pe-3">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="text" id="table-search" v-model="searchQuery" @keyup="search"
            class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg pe-10 dark:text-white w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products...">
        </div>
      </div>

      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in store.filteredProducts" :key="product.id"
          class="relative w-full max-w-xs m-5 overflow-hidden bg-white rounded-lg shadow-md card-transit">
          <nuxt-link :to="'/carters-products/' + product.id">
            <div>
              <img class="object-cover w-full rounded-t-lg h-60" :src="product.productImg" />
            </div>
            <span
              class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
              v-if="product.discount">{{ product.discount }}% off</span>
            <div class="px-5 pb-5 mt-4">
              <h5 class="text-lg font-semibold tracking-tight truncate text-slate-900">
                {{ product.title }}
              </h5>
              <div class="mt-2.5 mb-5 flex items-center space-x-2">

                <rating :rating="product.rating" />

                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
                  product.rating }}</span>
              </div>
              <div class="flex items-center justify-between">
                <p>
                  <span class="mr-2 font-bold text-md text-slate-900">EGP{{ product.price }}</span>
                  <span class="line-through text-md text-slate-600" v-if="product.originalPrice">EGP{{
                    product.originalPrice
                    }}</span>
                </p>
              </div>
              <p class="mt-2">Get it by <span class="font-semibold">{{ product.getBy }}</span></p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <pagination />

    </div>
  </div>
</template>

<script setup>
const store = useCartersProductsStore()
const searchQuery = ref("");

const search = () => {
  store.searchProducts(searchQuery.value);
};

const props = defineProps(['filteredProducts']);

onMounted(() => {
  store.fetchProducts()
})
</script>