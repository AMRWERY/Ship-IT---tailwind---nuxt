<template>
  <div>
    <div class="bg-white dark:bg-[#1B1D1E]">
      <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">{{ $t('products.results') }}</h2>
        <p class="text-gray-700 dark:text-gray-300">{{
          $t('products.price_and_other_details_may_vary_based_on_product_size_and_color') }}</p>

        <!-- search input -->
        <div class="max-w-lg mx-auto">
          <div class="flex">
            <div class="relative w-full mt-6">
              <input type="search" id="search-dropdown" class="block p-2.5 input"
                :placeholder="$t('placeholder.search_products')" required v-model="searchQuery" @keyup="search" />
              <div
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <icon name="radix-icons:magnifying-glass" class="w-5 h-5" />
                <span class="sr-only">Search</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div v-if="store.filteredProducts.length === 0"
            class="flex flex-col items-center justify-center w-full h-[calc(100vh-12rem)] sm:mx-72">
            <icon name="svg-spinners:blocks-shuffle-3" class="w-16 h-16 text-gray-600" />
            <p class="mt-4 text-xl font-semibold text-gray-500 dark:text-gray-300">{{ $t('products.no_items_available')
              }}</p>
          </div>

          <div v-for="product in store.filteredProducts" :key="product.id"
            class="relative w-full max-w-xs m-5 overflow-hidden bg-white shadow-md rounded-2xl card-transit dark:bg-neutral-700">
            <nuxt-link :to="'/carters-products/' + product.id">
              <div>
                <img class="object-cover w-full rounded-t-lg h-60" :src="product.productImg" />
              </div>
              <span
                class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
                v-if="product.discount">{{ product.discount }}% {{ $t('home.off') }}</span>
              <div class="px-5 pb-5 mt-4">
                <h5 class="text-lg font-semibold tracking-tight truncate text-slate-900 dark:text-slate-300">
                  {{ product.title }}
                </h5>
                <div class="mt-2.5 mb-5 flex items-center space-s-2">

                  <rating :rating="product.rating" />

                  <span class="me-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{{
                    product.rating }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <p>
                    <span class="text-lg font-bold text-red-600 me-2 text-md dark:text-red-200">{{ $t('products.egp') }}
                      {{ product.price
                      }}</span>
                    <span class="line-through text-md text-slate-900 dark:text-slate-300"
                      v-if="product.originalPrice">{{ $t('products.egp')
                      }} {{
                        product.originalPrice
                      }}</span>
                  </p>
                </div>
                <p class="mt-2 text-start text-slate-700 dark:text-slate-300">{{ $t('products.get_it_by') }} <span
                    class="font-semibold">{{ product.getBy }}</span>
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>

        <pagination />

      </div>
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