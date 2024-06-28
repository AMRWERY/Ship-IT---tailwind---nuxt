<template>
  <nav class="fixed top-0 left-0 right-0 bg-[#4F46E5] dark:bg-[#6196A6] py-1.5 flex justify-center z-50">
    <p class="mt-0.5 text-sm text-white">{{ $t('layout.get_free_delivery_on_orders_over_egp_1000') }}</p>
    <span class="mx-2 text-white">|</span>

    <today-deals />

  </nav>

  <nav
    class="relative flex flex-no-wrap items-center justify-between w-full py-2 mt-7 bg-zinc-50 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
    <div class="flex flex-wrap items-center justify-between w-full px-3">
      <!-- Hamburger button for mobile view -->
      <button
        class="block px-2 bg-transparent border-0 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button" data-twe-collapse-init data-twe-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
          <icon name="grommet-icons:menu" />
        </span>
      </button>

      <!-- Collapsible navigation container -->
      <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1" data-twe-collapse-item>
        <!-- Logo -->
        <nuxt-link ref="el"
          class="flex items-center mt-3 mb-4 me-5 ms-2 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
          to="/">
          <img src="/shopping-bags-svgrepo-com.svg" class="h-10" loading="lazy" />
        </nuxt-link>

        <!-- Categories -->
        <categories-menu />
        <!-- Left links -->
      </div>

      <!-- Right elements -->
      <div class="relative flex items-center space-s-3">
        <!-- Toggle Languages-->
        <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-if="isRTL"
          @click="updateLocale('en')">
          <span class="[&>svg]:w-5">
            En
          </span>
        </nuxt-link>
        <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-else @click="updateLocale('ar')">
          <span class="[&>svg]:w-5">
            العربية
          </span>
        </nuxt-link>

        <!-- Toggle Themes-->
        <button type="button" @click="toggleTheme" class="p-1 text-gray-400 rounded-full dark:text-white">
          <icon :name="theme === 'dark' ? 'heroicons-solid:sun' : 'heroicons-solid:moon'"></icon>
        </button>

        <!-- cart -->
        <cart-dialog v-if="isAuthenticated" />

        <!-- Dropdown menu -->
        <profile-menu v-if="isAuthenticated" />

        <!-- Login -->
        <nuxt-link to="/auth/login" type="button"
          class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          v-if="!isAuthenticated">Login</nuxt-link>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
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

onMounted(async () => {
  const { Tooltip, Collapse, Dropdown, initTWE } = await import("tw-elements");
  initTWE({ Tooltip, Collapse, Dropdown });
});
</script>