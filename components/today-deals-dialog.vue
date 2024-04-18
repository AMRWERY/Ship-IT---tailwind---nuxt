<template>
    <div>
        <div>
            <div class="flex text-white" role="button" @click="openModal">
                <icon name="svg-spinners:clock" class="text-red-100 mt-0.5" size="20px" />
                <p class="ms-2">{{ $t('layout.today_deals') }}</p>
            </div>
            <!-- <button @click="openModal"
            class="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none">
            {{ $t('btn.deal_of_today') }}
        </button> -->
        </div>

        <HeadlessTransitionRoot appear :show="isOpen" as="template">
            <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
                <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </HeadlessTransitionChild>

                <div
                    class="fixed mt-12 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">

                    <div class="flex items-center justify-center min-h-full p-4 text-center">
                        <HeadlessTransitionChild as="template" enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <HeadlessDialogPanel
                                class="w-full max-w-3xl p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl rounded-2xl dark:bg-gray-100">
                                <div class="flex items-start justify-between pt-2 pb-4 rounded-t dark:border-gray-600">
                                    <div class="w-full text-center">
                                        <HeadlessDialogTitle as="h3" class="text-xl font-semibold text-gray-900">
                                            {{ $t('deal.today_deal') }}
                                        </HeadlessDialogTitle>
                                    </div>
                                    <button type="button" @click="closeModal"
                                        class="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-600 bg-transparent">
                                        <icon name="ci:close-md" />
                                    </button>
                                </div>
                                <div class="mt-2">
                                    <main class="mt-4">
                                        <div class="container max-w-full">
                                            <div class="flex flex-wrap mx-auto lg:w-4/5" v-if="todayDeal">
                                                <img alt="ecommerce"
                                                    class="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                                                    :src="todayDeal.productImg">
                                                <div class="w-full mt-6 lg:w-1/2 lg:ps-10 lg:py-6 lg:mt-0">
                                                    <div
                                                        class="flex justify-between text-base font-medium text-gray-900">
                                                        <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
                                                            {{
                                                                todayDeal.title }}</h1>
                                                        <div class="flex gap-2 mt-2">
                                                            <p class="font-medium text-gray-500 line-through text-md">
                                                                ${{
                                                                    todayDeal.originalPrice }}
                                                            </p>
                                                            <p class="font-medium text-gray-900 text-md">${{
                                                                todayDeal.price
                                                            }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="flex mb-4">
                                                        <span class="flex items-center">
                                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 22 20">
                                                                <path
                                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 22 20">
                                                                <path
                                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 22 20">
                                                                <path
                                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 22 20">
                                                                <path
                                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <svg class="w-4 h-4 text-gray-300 dark:text-gray-500"
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor" viewBox="0 0 22 20">
                                                                <path
                                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                            <span class="text-gray-600 ms-3">4 {{ $t('deal.reviews')
                                                                }}</span>
                                                        </span>
                                                        <span
                                                            class="flex py-2 border-gray-200 ms-3 ps-3 border-s-2 space-x-2s">
                                                            <a class="text-gray-500 me-2">
                                                                <icon name="ci:facebook" />
                                                            </a>
                                                            <a class="text-gray-500 me-2">
                                                                <icon name="ci:twitter" />
                                                            </a>
                                                            <a class="text-gray-500">
                                                                <icon name="memory:comment-text" />
                                                            </a>
                                                        </span>
                                                    </div>
                                                    <p class="leading-relaxed">"I cannot make my days longer so I strive
                                                        to make them better. Nothing in life is to be feared. It is only
                                                        to be understood. "Joy is the best makeup. Love is never lost.
                                                        If not reciprocated, it will flow back and soften and purify the
                                                        heart."
                                                    </p>
                                                    <div class="flex items-center pb-5 mt-6 mb-5 border-gray-100">
                                                        <div class="flex items-center ms-6">
                                                            <div class="flex space-s-4">
                                                                <div class="flex items-center">
                                                                    <span class="text-4xl text-orange-400">{{ hours
                                                                        }}</span>
                                                                    <p class="text-sm ms-1">{{ $t('deal.hours') }}</p>
                                                                </div>
                                                                <div class="flex items-center">
                                                                    <span class="text-4xl text-orange-400">{{ minutes
                                                                        }}</span>
                                                                    <p class="text-sm ms-1">{{ $t('deal.minutes') }}</p>
                                                                </div>
                                                                <div class="flex items-center">
                                                                    <span class="text-4xl text-orange-400">{{ seconds
                                                                        }}</span>
                                                                    <p class="text-sm ms-1">{{ $t('deal.seconds') }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="todayDealExpired" class="m-5">
                                                <p class="text-center text-red-500">{{ $t('deal.deal_has_been_expired')
                                                    }}</p>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                            </HeadlessDialogPanel>
                        </HeadlessTransitionChild>
                    </div>
                </div>
            </HeadlessDialog>
        </HeadlessTransitionRoot>
    </div>
</template>

<script setup>
const store = useMyTodayDealStoreStore()
const isOpen = ref(false)
const hours = ref('')
const minutes = ref('')
const seconds = ref('')


onMounted(() => {
    store.fetchDeals()
})

const todayDeal = computed(() => store.deals[0]);

const todayDealExpired = computed(() => {
    if (todayDeal.value && todayDeal.value.endDate) {
        const now = new Date().getTime();
        const endDate = new Date(todayDeal.value.endDate).getTime();
        return endDate <= now;
    }
    return false;
});

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};

const updateClock = () => {
    const now = new Date().getTime();
    const timeLeft = dealExpiry - now;
    if (timeLeft > 0) {
        hours.value = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(2, '0');
        minutes.value = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        seconds.value = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
    } else {
        clearInterval(timer);
        hours.value = '00';
        minutes.value = '00';
        seconds.value = '00';
    }
}

const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    if (todayDeal.value && todayDeal.value.endDate) {
        const endDate = new Date(todayDeal.value.endDate).getTime();
        const timeLeft = endDate - now;
        if (timeLeft <= 0) {
            clearInterval(timer);
            return;
        }
        const hoursRemaining = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);
        hours.value = String(hoursRemaining).padStart(2, '0');
        minutes.value = String(minutesRemaining).padStart(2, '0');
        seconds.value = String(secondsRemaining).padStart(2, '0');
    }
};

calculateTimeRemaining();

const timer = setInterval(calculateTimeRemaining, 1000);

onMounted(() => {
    calculateTimeRemaining();
});
</script>