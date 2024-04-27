<template>
  <div>
    <!-- Button trigger modal -->
    <button data-twe-toggle="modal" data-twe-target="#exampleModal" data-twe-ripple-init data-twe-ripple-color="light"
      type="button"
      class="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
        $t('btn.login') }}</button>

    <!-- Modal -->
    <div data-twe-modal-init
      class="fixed left-0 top-12 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div data-twe-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
        <div
          class="relative flex flex-col w-full text-current bg-white border-none rounded-md outline-none pointer-events-auto bg-clip-padding shadow-4 dark:bg-surface-dark">
          <div class="mx-auto mt-4">
            <img src="/shopping-bags-svgrepo-com.svg" class="w-12 h-12">
          </div>
          <div
            class="flex items-center justify-center flex-shrink-0 p-4 rounded-t-md border-neutral-100 dark:border-white/10">
            <h5 class="text-xl font-semibold leading-normal text-surface dark:text-white" id="exampleModalLabel">
              {{ $t('auth.login_into_your_account') }}
            </h5>
          </div>

          <!-- Modal body -->
          <div class="relative flex-auto" data-twe-modal-body-ref>
            <FormKit class="max-w-lg mx-auto rounded-lg" type="form" id="login-form" :actions="false"
              :incomplete-message="false" @submit="signIn">
              <div class="flex flex-col gap-4 p-4">
                <div>
                  <form-inputs>
                    <template #email="{ icon, label, placeholder }">
                      <label for="email" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
                        label }}</label>
                      <div class="relative">
                        <FormKit name="email" type="email" v-model="email" validation="required|email|ends_with:.com"
                          validation-visibility="dirty" :placeholder="placeholder" message-class="text-red-600 mt-1.5"
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
                        <label for="password" class="inline-block mb-1 text-sm text-gray-800 sm:text-base">{{
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

                <button type="submit" data-twe-modal-dismiss
                  class="block px-8 py-3 mt-1 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">{{
                    loading ? $t('btn.loading') : $t('btn.login') }}
                  <template v-if="loading">
                    <icon name="svg-spinners:6-dots-scale-middle" class="animate-spin" />
                  </template>
                </button>
              </div>
            </FormKit>

            <div class="relative flex items-center justify-center">
              <span class="absolute inset-x-0 h-px bg-gray-300"></span>
              <span class="relative px-4 text-sm text-gray-400 bg-white">{{ $t('auth.log_in_with_social') }}</span>
            </div>

            <div class="flex flex-col gap-4 p-4">
              <!-- <button
                  class="flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-blue-500 rounded-lg outline-none ring-blue-300 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                  <icon name="ic:baseline-facebook" class="w-7 h-7" />
                  {{ $t('auth.continue_with_facebook') }}
                </button> -->

              <button @click="signInWithGoogleAccount"
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

            <div class="flex items-center justify-center p-4 bg-gray-100">
              <p class="text-sm text-center text-gray-500">{{ $t('auth.dont_have_an_account') }}
                <nuxt-link to="/sign-up"
                  class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                    $t('auth.register') }}</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore()
const email = ref('')
const password = ref('')
const loading = ref(false);

const signIn = async () => {
  loading.value = true;
  if (email.value && password.value) {
    await store.userSignIn({
      email: email.value,
      password: password.value,
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    loading.value = false;
  }
};

// const signIn = () => {
//   store.userSignIn({
//     email: email.value,
//     password: password.value,
//   });
// };

const signInWithGoogleAccount = () => {
  store.signInWithGoogle({
    email: email.value,
  });
};

onMounted(async () => {
  const { Modal, initTWE } = await import("tw-elements");
  initTWE({ Modal });
});
</script>