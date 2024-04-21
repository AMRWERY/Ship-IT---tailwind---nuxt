<template>
  <div>
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav class="flex">
          <ol role="list" class="flex items-center">
            <li class="text-start">
              <div class="-m-1">
                <nuxt-link to="#"
                  class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800">
                  Home
                </nuxt-link>
              </div>
            </li>

            <li class="text-start">
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <div class="-m-1">
                  <nuxt-link to href="#"
                    class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800">
                    Products
                  </nuxt-link>
                </div>
              </div>
            </li>

            <li class="text-start">
              <div class="flex items-center">
                <span class="mx-2 text-gray-400">/</span>
                <div class="-m-1">
                  <nuxt-link to href="#"
                    class="p-1 text-sm font-medium text-gray-600 rounded-md focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page">
                    Coffee
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div class="flex flex-wrap mx-auto lg:w-4/5">
        <img class="max-w-xl overflow-hidden rounded-lg h-[600px] xs:h-[300px] lg:h-[600px] xs:w-[400px] lg:w-[550px]"
          :src="selectedImg" />
        <div class="w-full mt-4 lg:order-1 lg:w-96 lg:flex-shrink-0">
          <div class="flex items-start">
            <button type="button" @click="selectCard('imgFront')" v-if="productDetails?.imgFront != null"
              class="w-20 h-20 mb-3 overflow-hidden text-center border-2 border-gray-900 rounded-lg flex-0 aspect-square max-w-24 me-3 transit">
              <img class="object-cover w-full h-full" :src="productDetails?.productImg" />
            </button>
            <button type="button" @click="selectCard('imgBack')" v-if="productDetails?.imgBack != null"
              class="w-20 h-20 mb-3 overflow-hidden text-center border-2 border-gray-900 rounded-lg flex-0 aspect-square max-w-24 ms-2 transit">
              <img class="object-cover w-full h-full" :src="productDetails?.imgBack" />
            </button>
          </div>
        </div>
        <div class="w-full mt-6 lg:w-1/2 lg:ps-10 lg:py-6 lg:mt-0">
          <div class="flex">
            <h2 class="font-medium tracking-widest text-blue-500 text-md title-font">
              {{ productDetails?.brand }}
            </h2>
            <span class="p-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg ms-auto"
              v-if="productDetails?.discount">{{ productDetails?.discount }}% {{ $t('home.off') }}</span>
          </div>
          <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
            {{ productDetails?.title }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center">

              <rating :rating="productDetails?.rating" :reviews="productDetails?.reviews" />

            </span>
            <span class="flex py-2 border-gray-200 border-s-2 ms-3 ps-3">
              <a class="text-gray-500">
                <icon name="ci:facebook" class="w-5 h-5" />
              </a>
              <a class="text-gray-500 ms-2">
                <icon name="ci:twitter" class="w-5 h-5" />
              </a>
              <a class="text-gray-500 ms-2">
                <icon name="fontisto:whatsapp" class="w-5 h-5" />
              </a>
            </span>
          </div>
          <div class="my-3">
            <p>{{ $t('products.sku') }}: <strong>{{ productDetails?.sku }}</strong></p>
          </div>
          <div class="mb-4">
            <p>{{ $t('products.availability') }}: <strong>{{ productDetails?.availability }}</strong></p>
          </div>
          <div class="overflow-x-hidden overflow-y-auto max-h-20 desc">
            <p class="leading-relaxed">
              {{ productDetails?.description }}
            </p>
          </div>
          <div class="flex items-center pb-5 mt-6 mb-5 border-gray-100">
            <div class="flex">
              <div class="items-center" v-if="productDetails?.color != null">
                <p class="flex items-center me-3">{{ $t('products.color') }} <strong
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium border rounded-md cursor-pointer ms-3 hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                      productDetails?.color }}</strong></p>
              </div>
              <div class="items-center" v-if="productDetails?.colors != null">
                <p class="flex items-center me-3">{{ $t('products.color') }} <strong
                    v-for="color in store.selectedProduct?.colors" :key="color"
                    class="relative flex items-center justify-center px-4 py-3 text-sm font-medium border rounded-md cursor-pointer ms-3 hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                      color }}</strong></p>
              </div>
            </div>
            <div class="flex items-center ms-16" v-if="productDetails?.size != null">
              <span class="me-3">{{ $t('products.size') }} </span>
              <div class="ms-auto">
                <div class="relative">
                  <select
                    class="py-2 text-base border border-gray-400 rounded appearance-none pe-10 ps-3 focus:outline-none focus:border-red-500">
                    <option>--{{ $t('products.select') }}--</option>
                    <option v-for="size in store.selectedProduct?.size" :key="size">{{ size }}</option>
                  </select>
                  <span
                    class="absolute top-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none end-0">
                    <icon name="material-symbols:keyboard-arrow-down-rounded" class="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div class="items-center ms-16" v-if="productDetails?.oneSize != null">
              <p class="flex items-center me-3">{{ $t('products.size') }} <strong
                  class="relative flex items-center justify-center px-4 py-3 text-sm font-medium border rounded-md cursor-pointer ms-3 hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                    productDetails?.oneSize }}</strong></p>
            </div>
            <div class="items-center ms-16" v-if="productDetails?.package != null">
              <p class="flex items-center me-3">{{ $t('products.package') }} <strong
                  class="relative flex items-center justify-center px-4 py-3 text-sm font-medium border rounded-md cursor-pointer ms-3 hover:bg-gray-50 focus:outline-none sm:flex-1">{{
                    productDetails?.package }}</strong></p>
            </div>
            <div class="flex items-center ms-16" v-if="productDetails?.styles != null">
              <span class="mr-3">{{ $t('products.style') }} </span>
              <div class="ms-auto">
                <div class="relative">
                  <select
                    class="py-2 text-base border border-gray-400 rounded appearance-none pe-10 ps-3 focus:outline-none focus:border-red-500">
                    <option>--{{ $t('products.select') }}--</option>
                    <option v-for="style in store.selectedProduct?.styles" :key="style">{{ style }}</option>
                  </select>
                  <span
                    class="absolute top-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none end-0">
                    <icon name="material-symbols:keyboard-arrow-down-rounded" class="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3" v-if="productDetails?.type != null">
            <p>{{ $t('products.type') }}: <strong>{{ productDetails?.type }}</strong></p>
          </div>
          <div class="my-3">
            <p>{{ $t('products.category') }} <strong>{{ productDetails?.category }}</strong></p>
          </div>

          <div class="flex items-center">
            <label for="quantity" class="mt-5 text-xl font-semibold text-gray-700 me-4 dark:text-gray-400">{{
              $t('products.quantity') }}</label>
            <div class="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
              <button type="button" @click="decrementQuantity"
                class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 hover:bg-red-400">
                <span class="m-auto text-2xl font-thin hover:text-white">-</span>
              </button>

              <input type="number" id="Quantity" :value="quantity" @input="updateQuantity"
                class="h-10 w-12 rounded border-gray-200 text-center [...]" />

              <button type="button" @click="incrementQuantity"
                class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75 hover:bg-blue-400">
                <span class="m-auto text-2xl font-thin hover:text-white">+</span>
              </button>
            </div>
          </div>

          <hr class="mt-4">
          <div class="flex mt-6">
            <span class="text-2xl font-medium text-gray-900 title-font">{{ $t('products.egp') }} {{
              productDetails?.price }}</span>
            <span class="mt-1 font-medium text-gray-500 line-through ms-2 text-md"
              v-if="productDetails?.originalPrice">{{ $t('products.egp') }} {{ productDetails?.originalPrice
              }}</span>
            <button @click="addToCart" :class="{
              'bg-red-500 hover:bg-red-600': isAddingToCart,
              'bg-indigo-500 hover:bg-indigo-600': !isAddingToCart,
            }"
              class="inline-flex items-center justify-center px-6 py-2 text-white transition-all duration-200 ease-in-out border-0 rounded ms-auto focus:outline-none focus:shadow"
              :disabled="isAddingToCart">
              <icon name="svg-spinners:blocks-shuffle-3" class="w-5 h-5 me-3" v-if="isAddingToCart"></icon>
              <icon name="material-symbols:shopping-basket-sharp" class="w-5 h-5 me-3" v-else />
              {{ isAddingToCart ? $t('btn.adding') : $t('btn.buy_now') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- related products -->
    <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">

      <related-products />

      <!-- <div class="lg:col-span-3">
          <div class="border-b border-gray-300">
              <nav class="flex gap-4">
                  <a href="#" title=""
                      class="py-4 text-sm font-medium text-gray-900 border-b-2 border-gray-900 hover:border-gray-400 hover:text-gray-800">
                      Description
                  </a>

                  <a href="#" title=""
                      class="inline-flex items-center py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent">
                      Reviews
                      <span class="block px-2 py-px ml-2 text-xs font-bold text-gray-100 bg-gray-500 rounded-full">
                          1,209
                      </span>
                  </a>
              </nav>
          </div>

          <div class="flow-root mt-8 sm:mt-12">
              <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
              <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  accusantium nesciunt fuga.
              </p>
              <h1 class="mt-8 text-3xl font-bold">
                  From the Fine Farms of Brazil
              </h1>
              <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  numquam enim facere.
              </p>
              <p class="mt-4">
                  Amet consectetur adipisicing elit. Optio numquam enim facere.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                  rerum nostrum eius facere, ad neque.
              </p>
          </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const store = useCartersProductsStore()
const cartStore = useCartStore()
const router = useRouter()
const productDetails = ref(null);
const productId = ref('');
const selectedImg = ref(null);
const isAddingToCart = ref(false);
const quantity = ref(1);

onMounted(() => {
  productId.value = router.currentRoute.value.params.id;
  store.getProductById(productId.value);
});

watch(() => store.selectedProduct, (newProduct) => {
  if (newProduct) {
    productDetails.value = newProduct;
  }
  selectedImg.value = productDetails.value['productImg'];
});

const selectCard = (imgProperty) => {
  selectedImg.value = productDetails.value[imgProperty];
};

const addToCart = () => {
  cartStore.addToCart({ ...productDetails.value, quantity: quantity.value });
  isAddingToCart.value = true;
  setTimeout(() => {
    isAddingToCart.value = false;
  }, 3000);
};

const updateQuantity = (event) => {
  const newQuantity = parseInt(event.target.value, 10);
  quantity.value = isNaN(newQuantity) ? 1 : newQuantity;
};

const incrementQuantity = () => {
  quantity.value += 1;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
  }
};
</script>