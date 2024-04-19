<template>
  <div>
    <div class="pt-2 mt-10 bg-[#013A48]">
      <footer class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="flex flex-col items-center justify-between gap-4 py-6 border-b md:flex-row">
          <!-- nav - start -->
          <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <nuxt-link to="/contact"
              class="transition duration-100 text-neutral-200 hover:text-neutral-300 active:text-neutral-400">{{
                $t('footer.contact') }}</nuxt-link>
            <nuxt-link to="/about-us"
              class="transition duration-100 text-neutral-200 hover:text-neutral-300 active:text-neutral-400">{{
                $t('footer.about_us') }}</nuxt-link>
            <nuxt-link to="/blogs"
              class="transition duration-100 text-neutral-200 hover:text-neutral-300 active:text-neutral-400">{{
                $t('footer.blogs') }}</nuxt-link>
          </nav>
          <!-- nav - end -->

          <!-- social - start -->
          <div class="flex gap-4">
            <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transit">
              <icon name="fontisto:facebook" class="w-5 h-5" />
            </a>

            <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transit">
              <icon name="fontisto:instagram" class="w-5 h-5" />
            </a>

            <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transit">
              <icon name="fontisto:twitter" class="w-5 h-5" />
            </a>

            <a href="#" target="_blank" class="text-gray-400 hover:text-gray-500 active:text-gray-600 transit">
              <icon name="fontisto:whatsapp" class="w-5 h-5" />
            </a>
          </div>
          <!-- social - end -->
        </div>

        <div class="p-6 text-center bg-[#013A48] border-t-2 border-neutral-600">
          <span class="me-1 text-neutral-200">{{ $t('footer.2023_copyright') }}</span>
          <nuxt-link class="font-semibold text-neutral-300" to=""> Ship-IT </nuxt-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>

</script>