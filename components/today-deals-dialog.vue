<template>
    <div>
        <div>
            <div class="flex text-white" role="button" @click="openModal">
                <icon name="svg-spinners:clock" class="text-red-100 mt-0.5" size="20px" />
                <p class="ms-2">{{ $t('layout.today_deals') }}</p>
            </div>
        </div>

        <HeadlessTransitionRoot appear :show="isOpen" as="template">
            <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
                <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </HeadlessTransitionChild>
                <div
                    class="fixed mt-12 top-0 start-0 end-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="flex items-center justify-center min-h-full p-4 text-center">
                        <HeadlessTransitionChild as="template" enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <HeadlessDialogPanel
                                class="w-full max-w-3xl p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl rounded-2xl dark:bg-gray-100">
                                <div class="flex items-start justify-between pt-2 pb-2">
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
                                    <div class="max-w-full">
                                        <div class="flex flex-wrap p-4 mx-auto" v-if="todayDeal">
                                            <img class="object-cover object-center w-full h-64 rounded-xl lg:w-[350px] lg:h-auto"
                                                :src="todayDeal.productImg">
                                            <div class="w-full mt-6 lg:w-[450px] lg:ps-10 lg:py-6 lg:mt-0">
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h1 class="mb-1 text-3xl font-medium text-gray-900 title-font">
                                                        {{ todayDeal.title }}</h1>
                                                    <div class="flex gap-2 mt-2">
                                                        <p class="font-medium text-gray-500 line-through text-md">
                                                            {{ $t('products.egp') }} {{ todayDeal.originalPrice }}
                                                        </p>
                                                        <p class="font-medium text-gray-900 text-md">{{
                                                            $t('products.egp') }} {{ todayDeal.price }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="flex mb-4">
                                                    <span class="flex items-center">
                                                        <rating :rating="todayDeal.rating" />
                                                        <span class="text-gray-600 ms-3">{{ todayDeal.reviews }} {{
                                                            $t('deal.reviews')
                                                        }}</span>
                                                    </span>
                                                    <span
                                                        class="flex py-2 border-gray-200 ms-3 ps-3 border-s-2 space-x-2s">
                                                        <a class="text-gray-500 me-2 transit">
                                                            <icon name="ci:facebook" />
                                                        </a>
                                                        <a class="text-gray-500 me-2 transit">
                                                            <icon name="ci:twitter" />
                                                        </a>
                                                        <a class="text-gray-500 transit">
                                                            <icon name="memory:comment-text" />
                                                        </a>
                                                    </span>
                                                </div>
                                                <p class="leading-relaxed">"{{
                                                    $t('deal.i_cannot_make_my_days_longer_so_i_strive_to_make_them_better')
                                                    }} {{ $t('deal.nothing_in_life_is_to_be_feared') }} {{
                                                        $t('deal.it_is_only_to_be_understood') }} {{
                                                        $t('deal.joy_is_the_best_makeup') }} {{
                                                        $t('deal.love_is_never_lost') }}
                                                    {{
                                                        $t('deal.if_not_reciprocated_it_will_flow_back_and_soften_and_purify_the_heart')
                                                    }}"
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
const store = useTodayDealStore()
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