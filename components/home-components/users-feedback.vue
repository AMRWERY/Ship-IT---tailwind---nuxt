<template>
  <div>
    <section class="overflow-hidden text-gray-600 body-font">
      <h3 class="text-3xl font-semibold text-center">{{ $t('home.latest_from_blogs') }}</h3>
      <div class="max-w-full px-5 py-12 mx-auto">
        <div class="flex flex-wrap mx-auto lg:w-4/5">
          <div class="relative object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto">
            <img src="https://themehut.co/html/geair/assets/img/blog/blog_img01.jpg"
              class="w-full h-full transition duration-300 ease-in-out delay-150 rounded hover:-translate-y-1 hover:scale-110" />
            <div class="absolute bottom-0 py-2 end-0 start-0 ps-3">
              <h2 class="mb-2 text-lg font-medium text-white title-font">
                <icon name="ep:user-filled" class="me-2" />
                <span class="me-4">{{ $t('blogs.emely_watson') }}</span> |
                <icon name="ep:calendar" class="ms-4 me-2" />
                <span>{{ $t('blogs.february_19_2024') }}</span>
              </h2>
              <p class="text-2xl leading-relaxed text-white">
                {{ $t('home.get_awesome_offers_on_new_collection_is_available_at_all_stores') }}
              </p>
            </div>
          </div>

          <div class="w-full mt-6 lg:w-1/2 lg:ps-10 lg:py-6 lg:mt-0">
            <div class="-mx-4 -mt-4 -mb-10 space-y-6 sm:-m-4 md:space-y-0">
              <div class="flex p-4" v-for="card in cards" :key="card">
                <div class="inline-flex items-center justify-center flex-shrink-0 mb-4 bg-indigo-100 rounded w-36 h-36">
                  <div class="mt-4">
                    <img
                      class="object-cover object-center transition duration-300 ease-in-out delay-150 rounded w-36 h-36 hover:-translate-y-1 hover:scale-110"
                      :src="card.img" />
                  </div>
                </div>
                <div class="flex-grow ps-6">
                  <h2 class="mb-2 text-lg font-medium text-gray-800 title-font dark:text-gray-200">
                    <icon name="ep:user-filled" class="me-2" />
                    <span class="me-4">{{ $t(card.title) }}</span> |
                    <icon name="ep:calendar" class="ms-4 me-2" />
                    <span>{{ card.date }}</span>
                  </h2>
                  <p class="text-2xl leading-relaxed dark:text-gray-400">
                    {{ $t(card.subtitle) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n();

const cards = ref([
  { subtitle: 'home.here_are_some_of_best_online_shopping_sites_for_you_in_the_world', title: 'home.billy_wade', img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg', date: 'May 17, 2024' },
  { subtitle: 'home.get_awesome_offers_on_new_collection_is_available_at_all_stores', title: 'home.demean_phil', img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg', date: 'June 2, 2024' },
  { subtitle: 'home.festival_sale_has_lots_of_amazing_offer_for_men_and_women', title: 'home.luke_hobbs', img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg', date: 'June 14, 2024' },
]);
</script>