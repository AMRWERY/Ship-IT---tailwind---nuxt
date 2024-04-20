<template>
  <div>
    <div id="content" role="main" class="w-full max-w-md p-6 mx-auto">
      <div class="bg-white border-2 border-indigo-300 shadow-lg mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">{{ $t('auth.reset_password') }}</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {{ $t('auth.remember_your_password') }}
              <nuxt-link class="font-medium text-blue-600 decoration-2 hover:underline" to="#">
                {{ $t('auth.back_to_login') }}
              </nuxt-link>
            </p>
          </div>

          <div class="mt-5">
            <FormKit type="form" id="reset-password-form" :actions="false" :incomplete-message="false"
              @submit="resetPassword">
              <div class="grid gap-y-4">
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
                <button type="submit"
                  class="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">{{
                    $t('btn.reset_password') }}</button>
              </div>
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore()
const email = ref('')

const resetPassword = () => {
  store.resetUserPassword({
    email: email.value,
  });
};

useHead({
  title: 'Reset Password'
})
</script>