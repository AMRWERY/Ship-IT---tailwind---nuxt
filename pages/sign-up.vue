<template>
    <div>
        <section class="relative flex flex-wrap max-w-6xl py-4 mx-auto lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="max-w-lg mx-auto text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">{{ $t('auth.sign_up_new_account') }}</h1>

                    <p class="mt-4 text-gray-500">
                        {{ $t('auth.let_is_get_you_all_set_up_so_you_can_start_creating_your_first') }}
                        {{ $t('auth.first_onboarding_experience') }}
                    </p>
                </div>

                <FormKit type="form" id="register-form" :actions="false" :incomplete-message="false"
                    class="max-w-md mx-auto mt-8 mb-0 space-y-4" @submit="signUp">
                    <div class="flex flex-col gap-4 p-4">
                        <div class="grid grid-cols-1 mt-5 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <form-inputs>
                                    <template #first-name="{ icon, label, placeholder }">
                                        <label for="name"
                                            class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                label }}</label>
                                        <div class="relative">
                                            <FormKit name="first name" type="text" v-model="firstName"
                                                validation="required|contains_alpha|length:2,10"
                                                validation-visibility="dirty" :placeholder="placeholder"
                                                message-class="text-red-600 mt-1.5"
                                                input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                            <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </template>
                                </form-inputs>
                            </div>
                            <div class="sm:col-span-3">
                                <div>
                                    <form-inputs>
                                        <template #last-name="{ icon, label, placeholder }">
                                            <label for="name"
                                                class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                    label }}</label>
                                            <div class="relative">
                                                <FormKit name="last name" type="text" v-model="lastName"
                                                    validation="required|contains_alpha|length:2,10"
                                                    validation-visibility="dirty" :placeholder="placeholder"
                                                    message-class="text-red-600 mt-1.5"
                                                    input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                                <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                                    <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                                </span>
                                            </div>
                                        </template>
                                    </form-inputs>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form-inputs>
                                <template #email="{ icon, label, placeholder }">
                                    <label for="email" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                        label }}</label>
                                    <div class="relative">
                                        <FormKit name="email" type="email" v-model="email"
                                            validation="required|email|ends_with:.com" validation-visibility="dirty"
                                            :placeholder="placeholder" message-class="text-red-600 mt-1.5"
                                            input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                        <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                            <icon :name="icon" class="w-5 h-5 text-gray-400" />
                                        </span>
                                    </div>
                                </template>
                            </form-inputs>
                        </div>

                        <div>
                            <form-inputs>
                                <template #password="{ icon, label, placeholder }">
                                    <div class="flex items-center">
                                        <label for="password"
                                            class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                                                label }}</label>
                                        <nuxt-link to="/reset-password" class="text-sm text-blue-600 ms-auto">{{
                                            $t('auth.forget_password') }}</nuxt-link>
                                    </div>
                                    <div class="relative">
                                        <FormKit name="password" type="password" v-model="password"
                                            validation="required|password|length:6,7" validation-visibility="dirty"
                                            :placeholder="placeholder" message-class="mt-1.5 text-red-600"
                                            input-class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50" />
                                        <span class="absolute inset-y-0 flex items-center end-0 pe-3">
                                            <icon :name="icon" class="w-5 h-5 text-gray-400 mt-2.5" />
                                        </span>
                                    </div>
                                </template>
                            </form-inputs>
                        </div>

                        <div class="flex items-center justify-between">
                            <p class="text-sm text-gray-500">
                                {{ $t('auth.already_have_an_account') }}
                                <nuxt-link class="underline" to="">{{ $t('auth.please_login') }}</nuxt-link>
                            </p>

                            <button type="submit"
                                class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg ">
                                {{ loading ? $t('btn.loading') : $t('btn.sign_up') }}
                                <template v-if="loading">
                                    <icon name="svg-spinners:6-dots-scale-middle" class="animate-spin" />
                                </template>
                            </button>
                        </div>
                    </div>
                </FormKit>

                <div class="relative flex items-center justify-center">
                    <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                    <span class="relative px-4 text-sm text-gray-400 bg-white">{{ $t('auth.log_in_with_social')
                        }}</span>
                </div>

                <div class="flex flex-col gap-4 p-4">
                    <!-- <button
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none ring-blue-300 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                  <icon name="ic:baseline-facebook" class="w-7 h-7" />
                  {{ $t('auth.continue_with_facebook') }}
                </button> -->

                    <button @click="signUpWithGoogleAccount"
                        class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border border-gray-300 rounded-lg outline-none ring-gray-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                        <svg class="w-5 h-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                                fill="#4285F4" />
                            <path
                                d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                                fill="#34A853" />
                            <path
                                d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                                fill="#FBBC05" />
                            <path
                                d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                                fill="#EA4335" />
                        </svg>
                        {{ $t('auth.continue_with_google') }}
                    </button>
                </div>
            </div>

            <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
                <img src="https://justfields.com/storage/projects/7M5rV059/deal05.jpg"
                    class="absolute inset-0 object-cover w-full h-full" />
            </div>
        </section>
    </div>
</template>

<script setup>
const store = useAuthStore()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const { t } = useI18n();
const loading = ref(false);

const signUp = async () => {
    loading.value = true;
    if (email.value && password.value) {
        await store.userSignUp({
            email: email.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value
        });
        await new Promise(resolve => setTimeout(resolve, 3000));
        loading.value = false;
    }
};

const signUpWithGoogleAccount = () => {
    store.signUpWithGoogle({
        email: email.value
    });
};

useHead({
    title: 'Create new Account'
})
</script>