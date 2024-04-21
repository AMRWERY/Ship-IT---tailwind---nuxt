<template>
  <div>
    <div class="max-w-5xl py-6 mx-auto sm:px-6 lg:px-8">
      <section class="max-w-full mx-auto mt-10 sm:px-6 lg:px-8">
        <h2 class="mb-6 text">{{ $t('home.shop_by_brand') }}</h2>
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :slidesPerView="4.5" :loop="true" :grabCursor="true" :grid="{ rows: 1 }" :pagination="{ clickable: true }"
          :modules="[SwiperAutoplay, SwiperPagination]" class="mySwiper">
          <swiper-slide v-for="(card, index) in store.shopByBrand" :key="index">
            <div class="relative flex justify-center flex-shrink-0 h-48 mx-2 overflow-hidden w-44 rounded-xl">
              <div class="relative overflow-hidden bg-no-repeat bg-cover transit">
                <img class="h-48 rounded-t-lg" :src="getImageUrl(card.img)" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </div>

    <div class="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-full lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="card in cards" :key="card" class="relative group">
          <nuxt-link :to="card.route"
            class="block max-w-96 lg:max-w-96 xs:min-w-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="p-6 text-center">
              <p class="mb-2 truncate">{{ $t(card.title) }}</p>
              <p class="text-base text-neutral-600 dark:text-neutral-200">
                {{ $t(card.subtitle) }}
              </p>
            </div>
            <div class="relative overflow-hidden bg-no-repeat bg-cover">
              <img class="transit" :src="card.img" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="max-w-full py-6 mx-auto mt-8 sm:px-6 lg:px-8">
      <img src="https://justfields.com/storage/projects/7M5rV059/expressss.webp"
        class="w-full h-60 xs:h-56 sm:h-72 md:h-96">
    </div>
  </div>
</template>

<script setup>
const store = useShopByBrandStore()

const fetchAllImages = () => {
  store.fetchAllImages();
};

onMounted(() => {
  fetchAllImages();
});

onMounted(() => {
  for (let i = 0; i < store.files.length; i++) {
    const file = store.files[i];
    store.fetchImg(file.name);
  }
});

const getImageUrl = (imgPath) => {
  const image = store.images.find((image) => image.name === imgPath);
  return image ? image.url : '';
};

const { t } = useI18n();

const cards = ref([
  { title: 'home.activewear_for_your_coolness', subtitle: 'home.large_collections_of_activewear_explore_the_outside', img: 'https://justfields.com/storage/projects/7M5rV059/activewear.jpg', route: '' },
  { title: 'home.too_cool_hipster_kids_clothes', subtitle: 'home.every_kid_needs_this_place_its_fun_inside_check_out_the_coolest_kids', img: 'https://justfields.com/storage/projects/7M5rV059/4-Kids.jpg', route: '' },
  { title: 'home.a_never_ending_sunglasses_season', subtitle: 'home.on_any_and_all_occasions_the_right_pair_of_shades_will_elevate_your_days_out', img: 'https://justfields.com/storage/projects/7M5rV059/6-sunglasses.jpg', route: '' },
  { title: 'home.accessories_and_bags', subtitle: 'home.large_collections_of_sharpening_up_your_fashion_look_with_these_statement', img: 'https://justfields.com/storage/projects/7M5rV059/bagssss.jpg', route: '' },
])
</script>

<style>
.carousel__item {
  min-height: 200px;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  border: 2px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>