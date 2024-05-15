<template>
  <div>
    <div class="max-w-full py-6 mx-auto space-y-6 sm:px-6 lg:px-8">
      <section class="max-w-full mx-auto mt-5 space-y-12 sm:px-6 lg:px-8">
        <h2 class="mb-6 text">{{ $t('home.express_deals') }}</h2>
        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3000" :transition="500">
          <Slide v-for="card in expressOne" :key="card">
            <div class="carousel__item">
              <div
                class="relative mt-5 w-[300px] max-w-[18rem] overflow-hidden rounded-2xl bg-white shadow-md dark:bg-neutral-700">
                <div>
                  <img class="object-cover w-full rounded-t-lg h-60 transit" :src="card.img" />
                </div>
                <span
                  class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
                  v-if="card.discount">{{ card.discount }}% {{ $t('home.off') }}</span>
                <div class="px-5 pb-5 mt-4">
                  <nuxt-link to="">
                    <h5 class="font-semibold tracking-tight truncate text-md text-slate-900 dark:text-slate-300">
                      {{ card.title }}
                    </h5>
                  </nuxt-link>
                  <div class="flex items-center justify-between">
                    <p class="mt-2">
                      <span class="text-lg font-bold text-red-600 dark:text-red-200 me-1">{{ $t('products.egp') }}{{
                        card.price }}</span>
                      <span class="text-sm line-through text-slate-900 dark:text-slate-300" v-if="card.originalPrice">{{
                        $t('products.egp') }}{{
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

        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3500" :transition="500">
          <Slide v-for="card in expressTwo" :key="card">
            <div class="carousel__item">
              <div
                class="relative mt-5 w-[300px] max-w-[18rem] overflow-hidden rounded-2xl bg-white shadow-md dark:bg-neutral-700">
                <div>
                  <img class="object-cover w-full rounded-t-lg h-60 transit" :src="card.img" />
                </div>
                <span
                  class="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28"
                  v-if="card.discount">{{ card.discount }}% {{ $t('home.off') }}</span>
                <div class="px-5 pb-5 mt-4">
                  <nuxt-link to="">
                    <h5 class="font-semibold tracking-tight truncate text-md text-slate-900 dark:text-slate-300">
                      {{ card.title }}
                    </h5>
                  </nuxt-link>
                  <div class="flex items-center justify-between">
                    <p class="mt-2">
                      <span class="text-lg font-bold text-red-600 dark:text-red-200 me-1">{{ $t('products.egp') }}{{
                        card.price
                        }}</span>
                      <span class="text-sm line-through text-slate-900 dark:text-slate-300" v-if="card.originalPrice">{{
                        $t('products.egp') }}{{
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

    <div class="max-w-full py-2 mx-auto mt-4 sm:px-6 lg:px-8">
      <img src="https://justfields.com/storage/projects/7M5rV059/ck_banner.webp"
        class="w-full rounded-2xl h-60 xs:h-56 sm:h-72 md:h-96">
    </div>
  </div>
</template>

<script setup>
const expressOne = ref([
  { img: 'https://justfields.com/storage/projects/7M5rV059/01.webp', title: 'Lace Wig cap for making wigs with adjustable strap', price: '50.00', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/012.webp', title: "Victoria's secret Pink - one size -  freedom of speech T-Shirt", price: '950.00', originalPrice: '1.250.00', discount: '24', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/03.webp', title: "Polo Ralph Lauren Liquid Cotton T-Shirt, White", price: '950.00', originalPrice: '1.600.00', discount: '41', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/04.webp', title: 'Gold Colored Festoon Necklace - Summer 2023 Collection - Multiple Styles Available', price: '230.00', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/05.webp', title: 'MARY-LOU MANIZER® - HIGHLIGHTER', price: '370.00', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/06.webp', title: "Hoops 3.0 Low Classic Sneakers", price: '2.650.00', originalPrice: '3.400.00', discount: '22', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/08.webp', title: 'Sue sunglasses', price: '1.590.00', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/09.webp', title: 'INC Cold-Shoulder Sweater - Burnt Olive', price: '890.00', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/010.webp', title: "Nike Men's Jordan DRI-FIT Sport Diamond Pattern Woven Basketball Shorts", price: '1.950.00', originalPrice: '2.30.00', discount: '15', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/011.webp', title: 'Crochet top', price: '715.00', getBy: 'Nov 07 - Nov 09' },
])

const expressTwo = ref([
  { img: 'https://justfields.com/storage/projects/7M5rV059/012.webp', title: 'Michael Kors Combat Booties Alistair For Women With All Over Logo Print', price: '4.800.00', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/013.webp', title: 'NAUTICA - Pajamas sets', price: '930.00', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/014.webp', title: "DOOGEE S99 Smartphone 8GB 128GB 108MP AI Camera Mobile Phone 64MP Night Vision 6000mAh 6.3 Inch Octa Core Android 12 Cellphone", price: '10.200.00', originalPrice: '14.000.00', discount: '27', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/016.webp', title: 'GUESS Dixon Small Satchel', price: '2.735.00', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/017.webp', title: "Women Elegant With Belt Bodycon Midi Casual Feminine Y2K Print Long Sleeve Tie Detail Work The Dress", price: '890.00', originalPrice: '1.350.00', discount: '34', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/018.webp', title: "Alex Pilot Sunglasses - RB4201F - Lens Size: 59mm - Black", price: '2.950.00', originalPrice: '3.500.00', discount: '16', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/019.webp', title: "Luxe High-Neck Swing Tank Top for Women", price: '600.00', originalPrice: '800.00', discount: '25', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/020.webp', title: 'Knotted Front Top', price: '650.00', getBy: 'Nov 08 - Nov 10' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/021.webp', title: "Nike Dunk High 1985", price: '4.500.00', originalPrice: '5.500.00', discount: '18', getBy: 'Nov 07 - Nov 09' },
  { img: 'https://justfields.com/storage/projects/7M5rV059/022.webp', title: "Men's Silicone Digital Wrist Watch W-96H-2AVDF - 36 mm - Black", price: '750.00', getBy: 'Nov 08 - Nov 10' },
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