<template>
  <div>
    <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 class="text-3xl italic font-normal text-center">Read About Fashion</h1>
      <h4 class="text-center"><b class="text-red-500">Amr Mohamed</b> <span class="mx-2">|</span> {{ currentDate }}</h4>
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
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {{ card.title }}
                  </h5>
                  <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
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
// const { t } = useI18n();

const cards = ref([
  { title: 'Top 10 Fashion of the Week', img: 'https://justfields.com/storage/projects/7M5rV059/slider3.jpg' },
  { title: 'Best brands for fashion', img: 'https://justfields.com/storage/projects/7M5rV059/slider01.jpg' },
  { title: 'Fashion Tips & Tricks', img: 'https://justfields.com/storage/projects/7M5rV059/slider04.jpg' },
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