<template>
  <div>
    <section class="relative flex flex-wrap max-w-6xl py-4 mx-auto lg:h-screen lg:items-center">
      <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div class="max-w-lg mx-auto text-center">
          <h1 class="text-2xl font-semibold leading-normal text-surface dark:text-white">{{
            $t('auth.login_into_your_account') }}</h1>
        </div>

        <FormKit type="form" id="login-form" v-model="data" :actions="false" :incomplete-message="false"
          @submit="signIn" class="max-w-lg mx-auto">
          <div class="flex flex-col gap-4 p-4">
            <div>
              <FormKitSchema :schema="translatedLoginSchema" />
            </div>

            <button type="submit" :disabled="loading"
              class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
              <div v-if="loading">
                <span class="me-2">{{ $t('btn.loading') }}...</span>
                <icon name="svg-spinners:270-ring-with-bg" />
              </div>
              <span v-else>{{ $t('btn.login') }}</span>
            </button>

            <div class="relative flex items-center justify-center">
              <span class="absolute inset-x-0 h-px bg-gray-300"></span>
              <span class="relative px-4 text-sm text-gray-400 bg-white">{{ $t('auth.log_in_with_social') }}</span>
            </div>

            <!-- <button type="button"
              class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none ring-blue-300 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
              <icon name="ic:baseline-facebook" class="w-5 h-5 shrink-0" />
              {{ $t('auth.continue_with_facebook') }}
            </button> -->

            <button type="button" @click="signInWithGoogleAccount"
              class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-gray-800 transition duration-100 bg-white border border-gray-300 rounded-lg outline-none ring-gray-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
              <icon name="logos:google-icon" class="w-5 h-5 shrink-0" />
              {{ $t('auth.continue_with_google') }}
            </button>
          </div>

          <div class="flex items-center justify-center p-4 bg-gray-100">
            <p class="text-sm text-center text-gray-500">{{ $t('auth.dont_have_an_account') }}
              <nuxt-link to="/auth/sign-up"
                class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                  $t('auth.register') }}</nuxt-link>
            </p>
          </div>

          <div class="flex items-center justify-center p-4">
            <p class="text-sm text-center text-gray-500">
              <nuxt-link to="/auth/reset-password"
                class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                  $t('auth.forget_password') }}</nuxt-link>
            </p>
          </div>
        </FormKit>
      </div>

      <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
        <img src="https://justfields.com/storage/projects/7M5rV059/deal05.jpg"
          class="absolute inset-0 object-cover w-full h-full rounded-2xl" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { loginSchema } from '@/dynamic-forms/dynamic-inputs';

const { t } = useI18n();
const store = useAuthStore();
const loading = ref(false);

const data = reactive({
  email: '',
  password: ''
});

const signIn = () => {
  loading.value = true;
  setTimeout(() => {
    debugger
    store.userSignIn({
      email: data.email,
      password: data.password,
    }).finally(() => {
      loading.value = false;
    });
  }, 3000);
};

const signInWithGoogleAccount = () => {
  store.signInWithGoogle({
    email: data.email,
  });
};

const translatedLoginSchema = computed(() => translateSchemaLabels(loginSchema, t));

useHead(() => ({
  title: t('head.login_into_your_account')
}))
</script>