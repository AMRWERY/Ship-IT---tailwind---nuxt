<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 bg-[#4F46E5] dark:bg-[#6196A6] py-1.5 flex justify-center z-50">
      <p class="mt-0.5 text-sm text-white">{{ $t('layout.get_free_delivery_on_orders_over_egp_1000') }}</p>
      <span class="mx-2 text-white">|</span>
      <today-deals />
    </nav>

    <header class="z-30 flex items-center w-full h-12 mt-12 sm:h-12">
      <div class="container flex items-center justify-between max-w-full px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center">
          <nuxt-link to="/" class="text-3xl font-black xs:text-lg lg:text-3xl text-gradient" ref="el">
            Ship-IT
          </nuxt-link>
          <categories-menu class="ml-4 xs:ml-2" />
        </div>

        <div class="flex items-center">
          <nav class="items-center space-x-1 text-lg text-gray-800 font-sen xs:flex sm:space-x-1.5">
            <!-- Toggle Language -->
            <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-if="isRTL"
              @click="updateLocale('en'); changeLocale('en')">
              <span class="[&>svg]:w-5">
                En
              </span>
            </nuxt-link>
            <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-else
              @click="updateLocale('ar'); changeLocale('ar')">
              <span class="[&>svg]:w-5">
                العربية
              </span>
            </nuxt-link>

            <button type="button" @click="toggleTheme" class="p-1 text-gray-400 rounded-full dark:text-white">
              <icon :name="theme === 'dark' ? 'heroicons-solid:sun' : 'heroicons-solid:moon'"></icon>
            </button>

            <cart-dialog v-if="isAuthenticated" />

            <profile-menu v-if="isAuthenticated" />

            <nuxt-link to="/auth/login" type="button"
              class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              v-if="!isAuthenticated">Login</nuxt-link>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const updateLocale = (value) => {
  setLocale(value);
  sessionStorage.setItem("locale", value);
};

const isRTL = ref(false);

watch(locale, (newVal) => {
  isRTL.value = newVal === 'ar';
});

onMounted(() => {
  const storedLocale = sessionStorage.getItem("locale");
  if (storedLocale) {
    setLocale(storedLocale);
  }
});

const isAuthenticated = useIsAuthenticated()

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  sessionStorage.setItem('theme', theme.value);
  updateThemeClasses(theme.value);
};

const updateThemeClasses = (newTheme) => {
  const body = document.querySelector('body');
  if (newTheme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

updateThemeClasses(sessionStorage.getItem('theme') || 'light');

//rotate logo composable
const { el } = useAnimateRotation();
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #4F46E5, #6196A6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>