<template>
  <div>
    <!-- Profile dropdown container -->
    <div class="relative" data-twe-dropdown-ref data-twe-dropdown-alignment="end">
      <!-- Profile dropdown trigger -->
      <nuxt-link
        class="flex items-center transition duration-150 ease-in-out whitespace-nowrap motion-reduce:transition-none"
        to="#" id="dropdownMenuButton2" role="button" data-twe-dropdown-toggle-ref aria-expanded="false">
        <!-- User avatar -->
        <img src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" class="rounded-full h-7 w-7" loading="lazy" />
      </nuxt-link>
      <!-- Profile dropdown menu -->
      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-[150px] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
        aria-labelledby="dropdownMenuButton2" data-twe-dropdown-menu-ref>
        <!-- Profile dropdown menu items -->
        <li>
          <nuxt-link
            class="block w-full px-4 py-2 text-sm font-normal bg-white whitespace-nowrap text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 text-start"
            to="/profile" data-twe-dropdown-item-ref>
            <icon name="dashicons:admin-users" size="20px" class="text-gray-500 me-2" />
            {{ $t('menu.your_profile') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link v-if="isAuthenticated && userEmail === 'amrmounir2@gmail.com'"
            class="block w-full px-4 py-2 text-sm font-normal bg-white whitespace-nowrap text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 text-start"
            to="#" data-twe-dropdown-item-ref>
            <icon name="dashicons:chart-pie" size="20px" class="text-gray-500 me-2" />
            {{ $t('menu.dashboard') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="block w-full px-4 py-2 text-sm font-normal bg-white whitespace-nowrap text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 text-start"
            to="#" data-twe-dropdown-item-ref>
            <icon name="icon-park-solid:transaction-order" size="20px" class="text-gray-500 me-2" />
            {{ $t('menu.your_orders') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link role="button" @click="logout"
            class="block w-full px-4 py-2 text-sm font-normal bg-white whitespace-nowrap text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 text-start"
            to="" data-twe-dropdown-item-ref>
            <icon name="humbleicons:logout" size="20px" class="text-gray-500 me-2" />
            {{ $t('menu.sign_out') }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore()

const logout = () => {
  try {
    store.logout();
    setTimeout(() => {
      location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}

const isAuthenticated = useIsAuthenticated()

const userEmail = computed(() => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('email');
  } else {
    return null;
  }
});
</script>