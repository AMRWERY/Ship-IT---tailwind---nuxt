<template>
  <div>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 class="text-3xl italic font-normal text-center text-gray-800 dark:text-gray-300">{{
        $t('blogs.read_about_fashion') }}</h1>
      <h4 class="flex justify-center text-center"><b class="text-red-500 dark:text-blue-300">{{ $t('blogs.amr_mohamed')
          }}</b> <span class="mx-2 text-gray-800 dark:text-gray-300">|</span class>
        <p class="text-gray-700 dark:text-gray-200">{{ currentDate }}</p>
      </h4>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto sm:py-12 lg:max-w-none lg:py-16">
          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div v-for="card in cards" :key="card" class="relative group">
              <div
                class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative overflow-hidden bg-no-repeat bg-cover" data-te-ripple-init
                  data-te-ripple-color="light">
                  <img class="rounded-t-lg transit" :src="card.img" />
                  <a href="#!">
                    <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                  </a>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-100">
                    {{ $t(card.title) }}
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-300">
                    {{ $t(card.desc) }}
                  </p>
                  <posts-dialog :card="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-10">
        <users-reviews />
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  { title: 'blogs.top_10_fashion_of_the_week', desc: 'blogs.the_truth_you_believe_and_cling_to_makes_you_unavailable_to_hear_anything_new_a_jug_fills_drop_by_drop', img: 'https://justfields.com/storage/projects/7M5rV059/slider3.jpg' },
  { title: 'blogs.best_brands_for_fashion', desc: 'blogs.the_weak_can_never_forgive_Forgiveness_is_the_attribute_of_the_strong_no_one_has_ever_become_poor_by_giving', img: 'https://justfields.com/storage/projects/7M5rV059/slider01.jpg' },
  { title: 'blogs.fashion_tips_tricks', desc: 'blogs.when_you_see_a_man_of_worth_think_of_how_you_may_emulate_him_when_you_see_one_who_is_unworthy_examine_yourself', img: 'https://justfields.com/storage/projects/7M5rV059/slider04.jpg' },
])

const currentDate = ref('');

const updateDate = () => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = date.toLocaleDateString(undefined, options).replace(/,/, '');
};

onMounted(() => {
  updateDate();
  setInterval(updateDate, 60000);
});

useHead({
  title: 'Blogs'
})
</script>