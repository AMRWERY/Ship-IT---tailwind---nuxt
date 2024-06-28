<template>
  <div>
    <div class="relative w-full h-screen">
      <img src="https://justfields.com/storage/projects/7M5rV059/deal05.jpg"
        class="absolute inset-0 object-cover w-full h-full">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <div class="w-full max-w-md py-2 mx-auto bg-white rounded-2xl">
          <div class="mx-auto max-w-screen-2xl">
            <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-4 lg:text-3xl">
              {{ $t('auth.reset_password') }}</h2>

            <FormKit type="form" id="reset-password-form" v-model="data" :actions="false" :incomplete-message="false"
              @submit="resetPassword" class="max-w-lg mx-auto">
              <div class="flex flex-col gap-4 p-4">
                <div>
                  <FormKitSchema :schema="translatedResetPasswordSchema" />
                </div>

                <button type="submit" :disabled="loading"
                  class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-gray-800 rounded-lg outline-none ring-gray-300 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                  <div v-if="loading">
                    <span class="me-2">{{ $t('btn.loading') }}...</span>
                    <icon name="svg-spinners:270-ring-with-bg" />
                  </div>
                  <span v-else>{{ $t('btn.reset_password') }}</span>
                </button>
              </div>

              <div class="flex items-center justify-center p-4 bg-gray-100">
                <p class="text-sm text-center text-gray-500">
                  <nuxt-link to="/auth/login"
                    class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">{{
                      $t('auth.back_to_login') }}</nuxt-link>
                </p>
              </div>
            </FormKit>
          </div>
        </div>
      </div>
    </div>

    <!-- Alert Component -->
    <successfully-alert :showAlert="showAlert" @closeAlert="closeAlert" :message="alertMessage" />
  </div>
</template>

<script setup>
import { resetPasswordSchema } from '@/dynamic-forms/dynamic-inputs'

const { t } = useI18n();
const store = useAuthStore()
const loading = ref(false);
const showAlert = ref(false);
const alertMessage = ref('reusable.your_password_has_been_reset_successfully_please_check_your_email');

const data = reactive({
  email: '',
});

const closeAlert = () => {
  showAlert.value = false;
};

const resetPassword = async () => {
  loading.value = true;
  try {
    await store.resetUserPassword({ email: data.email });
    showAlert.value = true;
    alertMessage.value = t('reusable.your_password_has_been_reset_successfully_please_check_your_email');
    setTimeout(() => {
      showAlert.value = false;
    }, 3000);
  } catch (error) {
    alertMessage.value = t('reusable.an_error_occurred_while_resetting_your_password_please_try_again');
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 3000);
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const translatedResetPasswordSchema = computed(() => translateSchemaLabels(resetPasswordSchema, t));

useHead(() => ({
  title: t('head.reset_password')
}))
</script>