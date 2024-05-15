<template>
  <div>
    <div class="max-w-full py-6 mx-auto space-y-6 sm:px-6 lg:px-8">
      <section class="max-w-full mx-auto mt-5 sm:px-6 lg:px-8">
        <h2 class="mb-6 text">New Arrivals</h2>
        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3000" :transition="500">
          <Slide v-for="card in arrivalOne" :key="card">
            <div class="carousel__item">
              <div
                class="relative mt-5 w-[300px] max-w-[18rem] overflow-hidden rounded-2xl bg-white shadow-md dark:bg-neutral-700">
                <div class="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl">
                  <img class="object-cover w-full transit" :src="card.img" />
                  <span
                    class="absolute top-0 left-0 px-2 m-2 text-sm font-medium text-center text-white bg-black rounded-full"
                    v-if="card.discount">{{ card.discount }}%
                    {{ $t('home.off') }}</span>
                </div>
                <div class="px-5 pb-5 mt-4">
                  <nuxt-link to="">
                    <h5 class="font-semibold tracking-tight truncate text-md text-slate-900 dark:text-slate-300">
                      {{ card.title }}
                    </h5>
                  </nuxt-link>

                  <div class="flex items-center mt-2 mb-5">
                    <p>
                      <span class="text-lg font-bold text-red-600 dark:text-red-200">{{ $t('products.egp') }}{{
                        card.price
                        }}</span>
                      <span class="text-sm line-through text-slate-900 dark:text-slate-300 me-1"
                        v-if="card.originalPrice">{{ $t('products.egp') }}{{
                          card.originalPrice }}</span>
                    </p>
                  </div>
                  <p class="mt-2 text-start text-slate-700 dark:text-slate-300">Get it by {{ card.getBy }}</p>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </section>
    </div>

    <div class="max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
      <img src="https://justfields.com/storage/projects/7M5rV059/tommy.webp"
        class="w-full rounded-2xl h-60 xs:h-56 sm:h-72 md:h-96">
    </div>

    <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
        <div v-for="card in cardsOne" :key="card" class="relative group">
          <div
            class="block max-w-96 xs:min-w-full rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="p-6 text-center">
              <p class="mb-2 font-semibold truncate text-neutral-800 dark:text-neutral-300">{{ $t(card.title) }}</p>
              <p class="text-base text-neutral-700 dark:text-neutral-300">
                {{ $t(card.subtitle) }}
              </p>
            </div>
            <div class="relative overflow-hidden bg-no-repeat bg-cover">
              <img class="w-full transit" :src="card.img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-full py-2 mx-auto mt-4 sm:px-6 lg:px-8">
      <img src="https://justfields.com/storage/projects/7M5rV059/six-shop.jpg"
        class="w-full h-60 xs:h-56 sm:h-72 md:h-96 rounded-2xl">
    </div>

    <div class="max-w-2xl px-4 mx-auto mt-4 sm:px-6 lg:max-w-full lg:px-8 mb-7">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
        <div v-for="card in cardsTwo" :key="card" class="relative group">
          <div
            class="block max-w-96 xs:min-w-full rounded-2xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="p-6 text-center">
              <p class="mb-2 font-semibold truncate text-neutral-800 dark:text-neutral-300">{{ $t(card.title) }}</p>
              <p class="text-base text-neutral-700 dark:text-neutral-300">
                {{ $t(card.subtitle) }}
              </p>
            </div>
            <div class="relative overflow-hidden bg-no-repeat bg-cover">
              <img class="w-full transit" :src="card.img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const arrivalOne = ref([
  { img: 'https://justfields.com/storage/projects/7M5rV059/025.webp', title: 'Feel Good Loved Up Feel Good Eau de Toilette', price: '599.00', originalPrice: '270.00', discount: '55', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/026.webp', title: "Shein Men Flap Pocket Buckle Cargo Pants", price: '1.809.00', originalPrice: '2.419.00', discount: '25', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/027.webp', title: "Adidas Performance Trunks 3-Pack", price: '1.929.00', originalPrice: '2.419.00', discount: '20', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/028.webp', title: "Plain Rib No Show Thong", price: '299.00', originalPrice: '409.00', discount: '27', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/029.webp', title: "Men's Analog Wrist Watch", price: '750.00', originalPrice: '950.00', discount: '21', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/030.webp', title: "Emery Rose Floral Print Open Front Jacket", price: '1.389.00', originalPrice: '1.920.00', discount: '28', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/031.webp', title: "Men Slogan Graphic Buckle Detail Flap Pocket Drawstring Waist Cargo Pants", price: '1.979.00', originalPrice: '2.609.00', discount: '24', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/032.webp', title: "Shein Men Letter and Tropical Print Polo Shirt", price: '969.00', originalPrice: '1.309.00', discount: '26', getBy: 'Nov 28 - Dec 05' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/033.webp', title: "Shein Men Camo Print Flap Pocket Cargo Jeans", price: '950.00', originalPrice: '1.500.00', discount: '37', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/034.webp', title: "Women White Lace-Up Front Running Shoes", price: '1.979.00', originalPrice: '2.679.00', discount: '26', getBy: 'Nov 28 - Dec 05' },
])

const { t } = useI18n();

const cardsOne = ref([
  { title: 'home.browse_this_extraordinary_womens_dresses_assortment', subtitle: 'home.from_this_exceptional_assortment_choose_your_ideal_dress_and_be_whatever_you_desire', img: 'https://justfields.com/storage/projects/7M5rV059/035.jpg' },
  { title: 'home.shop_stylish_winter_wear_with_no_wallet_worries', subtitle: 'home.find_great_winter_season_looks_without_worrying_about_your_wallet_all_within_your_budget', img: 'https://justfields.com/storage/projects/7M5rV059/036.jpg' },
])

const cardsTwo = ref([
  { title: 'home.unleash_the_fashionista_side_of_you_with_shein_products', subtitle: 'home.explore_an_incredible_collection_of_trendy_clothing_at_amazing_prices', img: 'https://justfields.com/storage/projects/7M5rV059/01201.jpg' },
  { title: "home.find_the_best_womens_Winter_boots_around", subtitle: "home.make_a_statement_with_our_stunning_selection_of_womens_boots_they_are_the_best", img: 'https://justfields.com/storage/projects/7M5rV059/045454.jpg' },
])

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