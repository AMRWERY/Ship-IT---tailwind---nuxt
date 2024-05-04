<template>
  <div>
    <div class="sticky top-0 z-40">
      <div class="flex items-center justify-between w-full px-6 bg-gray-100 border-b h-14">
        <!-- left navbar -->
        <div class="flex">
          <!-- mobile hamburger -->
          <div class="flex items-center inline-block mr-4 lg:hidden">
            <button class=" hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"
              @click="toggleSidebar()">
              <icon name="grommet-icons:menu" class="w-5 h-5" v-bind:style="{ fill: 'black' }" />
            </button>
          </div>

          <!-- logo -->
          <div class="flex items-center justify-center w-full h-12 px-4">
            <img src="/shopping-bags-svgrepo-com.svg" class="w-12 h-12" ref="el" />
          </div>
        </div>

        <div class="flex">
          <!-- back to home -->
          <nuxt-link to="/" class="relative flex items-center">
            <icon name="humbleicons:home" class="mr-3 fill-current hover:text-blue-500" />
          </nuxt-link>

          <!-- profile -->
          <div class="flex flex-wrap items-center px-4 my-4 cursor-pointer">
            <img src="https://justfields.com/storage/projects/7M5rV059/profile.jpg"
              class="border-2 border-white rounded-full w-9 h-9" />
            <div class="ml-4">
              <p class="text-sm text-gray-800 dark:text-white">Amr Mohamed</p>
              <p class="text-xs text-gray-800 dark:text-white">amrmounir2@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- sidebar -->
    <div class="fixed z-30 w-1/2 h-screen bg-gray-100 border-r md:w-1/3 lg:w-64 md:top-14 md:left-0 lg:block"
      :class="sideBarOpen ? '' : 'hidden'" id="main-nav">
      <div class="px-4 my-4">
        <p class="pl-4 mb-1 text-sm font-semibold">Main</p>
        <div
          class="flex items-center w-full h-10 pl-4 text-blue-400 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="humbleicons:dashboard" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Dashboard</span>
        </div>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="uim:analytics" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Analytics</span>
        </div>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="bi:database-fill-gear" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Inventory</span>
        </div>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="bi:envelope-open-fill" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Enquiries</span>
        </div>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="material-symbols:calendar-month-outline-rounded" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Calender</span>
        </div>
      </div>

      <div class="px-4 mb-4">
        <p class="pl-4 mb-1 text-sm font-semibold">Products</p>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="bi:plus-circle" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Add Product</span>
        </div>
        <div class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="material-symbols-light:list-alt-outline" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">View Products</span>
        </div>
      </div>

      <!-- logout -->
      <div class="px-4 mb-4 border-t-2">
        <div role="button"
          class="flex items-center w-full h-10 pl-4 text-blue-400 rounded-lg cursor-pointer hover:bg-gray-200">
          <icon name="material-symbols:power-settings-new-outline-rounded" class="w-6 h-6 mr-2 fill-current" />
          <span class="text-gray-700">Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sideBarOpen = ref(false);

const toggleSidebar = () => {
  sideBarOpen.value = !sideBarOpen.value;
};

//rotate logo composable
const { el } = useAnimateRotation();
</script>/