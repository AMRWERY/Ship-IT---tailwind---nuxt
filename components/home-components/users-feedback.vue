<template>
  <div>
    <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8">
      <section class="body-font">
        <h2 class="mb-6 text">
          {{ $t('home.latest_from_blogs') }}
        </h2>
        <div class="px-5 pt-5 mx-auto pb-7">
          <div class="flex flex-wrap -m-4">
            <div class="w-full p-4 sm:w-96 md:w-1/3" v-for="card in cards" :key="card">
              <div class="h-full overflow-hidden border-2 border-gray-800 rounded-lg">
                <img class="object-cover object-center w-full lg:h-48 md:h-36 transit" :src="card.img">
                <div class="p-6">
                  <h2 class="text-2xl font-semibold text-center text-gray-700">
                    {{ $t(card.title) }}</h2>
                  <br>
                  <p class="mb-3 leading-relaxed text-gray-500">{{ $t(card.subtitle) }}</p>
                  <div class="flex flex-wrap items-center">
                    <nuxt-link to="" class="inline-flex items-center text-indigo-700 md:mb-2 lg:mb-0">
                      {{ $t('home.learn_more') }}
                    </nuxt-link>
                    <span
                      class="inline-flex items-center py-1 text-sm leading-none text-gray-500 border-gray-800 me-3 lg:ms-auto md:ms-0 ms-auto pe-3 border-e-2">
                      <icon name="fontisto:eye" />
                      <p class="ms-1">{{ card.reviews }}K</p>
                    </span>
                    <span class="inline-flex items-center text-sm leading-none text-gray-500">
                      <icon name="fontisto:comments" />
                      <p class="ms-1">{{ card.comments }}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

const cards = ref([
  { subtitle: 'home.here_are_some_of_best_online_shopping_sites_for_you_in_the_world', title: 'home.billy_wade', img: 'https://justfields.com/storage/projects/7M5rV059/post-1.jpg', reviews: '1.2', comments: '26' },
  { subtitle: 'home.get_awesome_offers_on_new_collection_is_available_at_all_stores', title: 'home.demean_phil', img: 'https://justfields.com/storage/projects/7M5rV059/post-2.jpg', reviews: '1.1', comments: '22' },
  { subtitle: 'home.festival_sale_has_lots_of_amazing_offer_for_men_and_women', title: 'home.luke_hobbs', img: 'https://justfields.com/storage/projects/7M5rV059/post-3.jpg', reviews: '1.4', comments: '39' },
]);
</script>